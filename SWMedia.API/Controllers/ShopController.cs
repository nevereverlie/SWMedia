using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SWMedia.API.Data;

namespace SWMedia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        private readonly IShopRepository _repo;
        public ShopController(IShopRepository repo)
        {
            _repo = repo;
        }
        [HttpGet("categories")]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _repo.GetCategories();
            return Ok(categories);
        }
        [HttpGet("categories/{categoryName}")]
        public async Task<IActionResult> GetProductsFromCategory(string categoryName)
        {
            var products = await _repo.GetProductsFromCategory(categoryName);
            return Ok(products);
        }

        [HttpGet("categories/{categoryName}/{productId}")]
        public async Task<IActionResult> GetProduct(int productId)
        {
            var product = await _repo.GetProduct(productId);
            return Ok(product);
        }
    }
}