using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public class ChatRepository : IChatRepository
    {
        private DataContext _context;

        public ChatRepository(DataContext context)
        {
            _context = context;
        }
        public Task<Message> GetMessage(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<List<Message>> GetMessages()
        {
            var messages = 
                from m in _context.Messages
                select m;
            
            return await messages.ToListAsync();
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(m => m.MessagesSent).FirstOrDefaultAsync(u => u.UserId == id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(m => m.MessagesSent).ToListAsync();

            return users;
        }
    }
}