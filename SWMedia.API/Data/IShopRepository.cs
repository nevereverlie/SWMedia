using System.Collections.Generic;
using System.Threading.Tasks;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public interface IShopRepository
    {
        Task<List<TShirt>> GetTShirts();
    }
}