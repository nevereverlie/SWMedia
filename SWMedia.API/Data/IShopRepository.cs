using System.Collections.Generic;
using System.Threading.Tasks;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public interface IShopRepository
    {
        Task<List<Product>> GetProducts();
        Task<List<Category>> GetCategories();
        Task<List<Product>> GetProductsFromCategory(string categoryName);
    }
}