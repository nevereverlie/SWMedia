using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SWMedia.API.Data;
using SWMedia.API.Models;

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

        [HttpPost("addToOrder")]
        public async Task<IActionResult> AddToOrder(Order order)
        {
            var orderToExtend = new Order
            {
                Id = order.Id,
                ProductId = order.ProductId,
                Product = order.Product,
                UserId = order.UserId,
                Amount = order.Amount
            };

            var extendedOrder = await _repo.AddToOrder(orderToExtend);

            return Ok(extendedOrder);
        }

        [HttpPost("removeFromOrder")]
        public async Task<IActionResult> RemoveFromOrder([FromBody]int orderId)
        {
            var removedOrder = await _repo.RemoveFromOrder(orderId);

            var refreshedOrder = await _repo.GetOrder(removedOrder.UserId);

            return Ok(refreshedOrder);
        }

        [HttpPost("disposeOrder")]
        public void DisposeOrder([FromBody]int userId)
        {
            Console.WriteLine(userId);
            _repo.DisposeOrder(userId);

            return;
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

        [HttpGet("categories/{categoryName}/{productId}/attributes")]
        public async Task<IActionResult> GetAttributes(int productId)
        {
            var attributes = await _repo.GetAttributes(productId);
            
            return Ok(attributes);
        }

        [HttpGet("cart/{userId}")]
        public async Task<IActionResult> GetOrder(int userId) 
        {
            var order = await _repo.GetOrder(userId);

            return Ok(order);
        }
    }
}