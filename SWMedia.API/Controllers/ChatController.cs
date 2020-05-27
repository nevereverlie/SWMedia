using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SWMedia.API.Data;

namespace SWMedia.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private IChatRepository _repo;
        private IMapper _mapper;
        public ChatController(IChatRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

    }
}