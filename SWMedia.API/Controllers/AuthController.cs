using System.ComponentModel.Design.Serialization;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SWMedia.API.Data;
using SWMedia.API.Dtos;
using SWMedia.API.Models;
using AutoMapper;

namespace SWMedia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthRepository _repo;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public AuthController(IAuthRepository repo, IConfiguration config, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
            _config = config;
        }
        [HttpPost("registerUser")]
        public async Task<IActionResult> RegisterUser(UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if (await _repo.UserExists(userForRegisterDto.Username))
            {
                return BadRequest("User already exists.");
            }

            var userToCreate = new User
            {
                Username = userForRegisterDto.Username,
                Email = userForRegisterDto.Email,
                Phone = userForRegisterDto.Phone,
                DateOfBirth = userForRegisterDto.DateOfBirth,
                Country = userForRegisterDto.Country,
                SelfDescription = userForRegisterDto.SelfDescription,
                City = userForRegisterDto.City
            };

            var createdUser = await _repo.RegisterUser(userToCreate, userForRegisterDto.Password);

            return Ok(createdUser);
        }

        [HttpPost("loginGoogleUser")]
        public async Task<IActionResult> LoginGoogleUser(GoogleUser googleUserToLogin)
        {
            if (!await _repo.GoogleUserExists(googleUserToLogin.Email))
            {
                var user = await _repo.RegisterGoogleUser(googleUserToLogin);
            }

            var userFromRepo = await _repo.LoginGoogleUser(googleUserToLogin.Email);
            //var userFromRepo = await _repo.LoginUser(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

            if (userFromRepo == null)
            {
                return Unauthorized();
            }

            var claims = new[]
            {
                    new Claim(ClaimTypes.NameIdentifier, userFromRepo.GoogleUserId.ToString()),
                    new Claim(ClaimTypes.Name, userFromRepo.Email),
                    new Claim(ClaimTypes.GivenName, userFromRepo.FirstName + ' ' + userFromRepo.LastName)
                };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
            //return Ok(user);


        }

        [HttpPost("loginUser")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            var userFromRepo = await _repo.LoginUser(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

            if (userFromRepo == null)
            {
                return Unauthorized();
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.UserId.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
        }

        [HttpPost("updateUser")]
        public async Task<IActionResult> UpdateUser(UserForUpdateDto userForUpdate)
        {
            userForUpdate.Username = userForUpdate.Username.ToLower();

            if (!await _repo.UserExists(userForUpdate.Username))
            {
                return BadRequest("User does not exist.");
            }
            var userToUpdate = new User
            {
                Username = userForUpdate.Username,
                Email = userForUpdate.Email,
                Phone = userForUpdate.Phone,
                DateOfBirth = userForUpdate.DateOfBirth,
                Country = userForUpdate.Country,
                SelfDescription = userForUpdate.SelfDescription,
                City = userForUpdate.City
            };
            Console.WriteLine(userToUpdate.Email);
            var updatedUser = await _repo.UpdateUser(userToUpdate, userForUpdate.Password);

            return Ok(updatedUser);
        }

        [HttpPost("getUserProfile")]
        public async Task<IActionResult> GetUserProfile([FromBody]int userId)
        {
            var userProfile = await _repo.GetUserProfile(userId);

            var profileToReturn = _mapper.Map<UserForListDto>(userProfile);
            Console.WriteLine(profileToReturn.Username);
            return Ok(profileToReturn);
        }
    }
}