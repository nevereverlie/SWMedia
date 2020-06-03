using System.Collections.Generic;

namespace SWMedia.API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public int Amount { get; set; }
        
    }
    
}