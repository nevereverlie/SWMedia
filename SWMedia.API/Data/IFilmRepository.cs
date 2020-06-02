using System.Collections.Generic;
using System.Threading.Tasks;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public interface IFilmRepository
    {
        Task<List<Film>> GetFilms();
        Task<Film> GetFilm(int id);
    }
}