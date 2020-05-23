using System.Collections.Generic;
using System.Linq;
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

        public async Task<List<Product>> GetProductsFromCategory(string categoryName)
        {
            var products = 
                from p in _context.Products
                join c in _context.Categories on p.CategoryId equals c.CategoryId
                where c.CategoryName == categoryName
                select p;
            //return await products.Include(p => p.Category).ToListAsync();
            return await products.ToListAsync();
        }

        public async Task<List<Product>> GetProduct(int id)
        {
            var product = 
                from p in _context.Products
                where p.ProductId == id
                select p;
            return await product.ToListAsync();
        }

    }
}