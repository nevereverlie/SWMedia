using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SWMedia.API.Data;

namespace SWMedia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmController : ControllerBase
    {
        private readonly IFilmRepository _repo;
        public FilmController(IFilmRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("getFilms")]
        public async Task<IActionResult> GetFilms()
        {
            var films = await _repo.GetFilms();

            return Ok(films);
        }
        [HttpGet("getFilm/{id}")]
        public async Task<IActionResult> GetFilm(int id)
        {
            var film = await _repo.GetFilm(id);

            return Ok(film);
        }
    }
}