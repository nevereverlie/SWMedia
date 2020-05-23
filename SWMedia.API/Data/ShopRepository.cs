using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public class ShopRepository : IShopRepository
    {
        private readonly DataContext _context;
        public ShopRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<List<Category>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        public Task<List<Product>> GetProducts()
        {
            throw new System.NotImplementedException();
        }
    }
}