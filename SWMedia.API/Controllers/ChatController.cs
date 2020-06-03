using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SWMedia.API.Data;

namespace SWMedia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly IChatRepository _repo;
        public ChatController(IChatRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("getMessages")]
        public async Task<IActionResult> GetMessages()
        {
            var messages = await _repo.GetMessages();

            return Ok(messages);
        }

        [HttpGet("getMessage/{messageId}")]
        public async Task<IActionResult> GetMessage(int messageId)
        {
            var message = await _repo.GetMessage(messageId);

            return Ok(message);
        }
    }
}