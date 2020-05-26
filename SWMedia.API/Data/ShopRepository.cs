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

        public async Task<Product> GetProduct(int id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(p => p.ProductId == id);

            return product;
        }

        public async Task<List<Attribute>> GetAttributes(int productId)
        {
            var attributes = 
                from p in _context.Products
                join att in _context.Attributes on p.ProductId equals att.ProductId
                select att;
                
            return await attributes.ToListAsync();
        }

        public async Task<List<Order>> GetOrder(int userId)
        {
            var order = 
                from o in _context.Orders
                join p in _context.Products on o.ProductId equals p.ProductId
                where o.UserId == userId
                select o;

            return await order.Include(p => p.Product).ToListAsync();
        }

        public async Task<Order> AddToOrder(Order order)
        {
            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();

            return order;
        }

    }
}