using System.Collections.Generic;
using System.Threading.Tasks;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public class ShopRepository : IShopRepository
    {
        public Task<List<TShirt>> GetTShirts()
        {
            throw new System.NotImplementedException();
        }
    }
}