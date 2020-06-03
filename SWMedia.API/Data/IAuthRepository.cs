using System.Threading.Tasks;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public interface IAuthRepository
    {
        Task<User> RegisterUser(User user, string password);
        Task<GoogleUser> RegisterGoogleUser(GoogleUser googleUser);
        Task<bool> UserExists(string username);
        Task<bool> GoogleUserExists(string email);
        Task<User> LoginUser(string username, string password);
        Task<GoogleUser> LoginGoogleUser(string email);
        Task<User> UpdateUser(User user, string password);
        Task<User> GetUserProfile(int userId);
    }
}