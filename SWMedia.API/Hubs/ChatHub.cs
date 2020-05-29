using System.Net.WebSockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SWMedia.API.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendToAll(string name, string message)
        {
            await Clients.All.SendAsync("sendToAll", name, message);
        }
    }
}