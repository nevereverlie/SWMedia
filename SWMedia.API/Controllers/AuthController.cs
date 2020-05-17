using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SWMedia.API.Data;
using SWMedia.API.Dtos;
using SWMedia.API.Models;

namespace SWMedia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthRepository _repo;

        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }
        [HttpPost("registerUser")]
        public async Task<IActionResult> RegisterUser(UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            
            if(await _repo.UserExists(userForRegisterDto.Username))
            {
                return BadRequest("User already exists.");
            }

            var userToCreate = new User
            {
                Username = userForRegisterDto.Username,
                Email = userForRegisterDto.Email,
                Phone = userForRegisterDto.Phone
            };
            
            var createdUser = await _repo.RegisterUser(userToCreate, userForRegisterDto.Password);

            return Ok(createdUser);
        }
    }
}