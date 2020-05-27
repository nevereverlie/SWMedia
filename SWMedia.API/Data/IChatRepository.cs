using System.Threading.Tasks;
using SWMedia.API.Models;
using System.Collections.Generic;

namespace SWMedia.API.Data
{
    public interface IChatRepository
    {
        Task<User> GetUser(int id);
        Task<IEnumerable<User>> GetUsers();
        Task<Message> GetMessage(int id);
        Task<List<Message>> GetMessages();
    }
}