using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<GoogleUser> LoginGoogleUser(string email)
        {
            var user = await _context.GoogleUsers.FirstOrDefaultAsync(x => x.Email == email);

            if (user == null)
                return null;

            return user;
        }

        public async Task<User> LoginUser(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username);

            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                        return false;
                }
            }
            return true;
        }

        public async Task<GoogleUser> RegisterGoogleUser(GoogleUser googleUser)
        {
            await _context.GoogleUsers.AddAsync(googleUser);
            await _context.SaveChangesAsync();

            return googleUser;
        }

        public async Task<User> RegisterUser(User user, string password)
        {
            byte[] passwordHash, passwordSalt;

            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if(await _context.Users.AnyAsync(u => u.Username == username))
            {
                return true;
            }
            return false;
        }

        public async Task<bool> GoogleUserExists(string email)
        {
            if(await _context.GoogleUsers.AnyAsync(u => u.Email == email))
            {
                return true;
            }
            return false;
        }

        public async Task<User> UpdateUser(User user, string password)
        {
            var updatedUser = await _context.Users.FirstOrDefaultAsync(x => x.Username == user.Username);

            if (updatedUser == null)
                return null;
            /*
            if (!VerifyPasswordHash(password, updatedUser.PasswordHash, updatedUser.PasswordSalt))
            {
                byte[] passwordHash, passwordSalt;

                CreatePasswordHash(password, out passwordHash, out passwordSalt);

                updatedUser.PasswordHash = passwordHash;
                updatedUser.PasswordSalt = passwordSalt;
            }
            */
            updatedUser.Email = user.Email;
            updatedUser.Phone = user.Phone;
            updatedUser.SelfDescription = user.SelfDescription;
            updatedUser.Country = user.Country;
            updatedUser.City = user.City;
            
            await _context.SaveChangesAsync();

            return updatedUser;
        }

        public async Task<User> GetUserProfile(int userId)
        {
            var userProfile = await _context.Users.FirstOrDefaultAsync(u => u.UserId == userId);
            if (userProfile == null)
                return null;
                
            return userProfile;
        }
    }
}