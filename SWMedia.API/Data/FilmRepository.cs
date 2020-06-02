using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public class FilmRepository : IFilmRepository
    {
        private readonly DataContext _context;

        public FilmRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Film> GetFilm(int id)
        {
            var film = await _context.Films.FirstOrDefaultAsync(f => f.Id == id);

            if (film == null)
                return null;
            
            return film;
        }

        public async Task<List<Film>> GetFilms()
        {
            var films = await _context.Films.ToListAsync();

            return films;
        }
    }
}