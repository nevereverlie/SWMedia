using System;
using System.ComponentModel.DataAnnotations;

namespace SWMedia.API.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public User Sender { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Text { get; set; }
        public DateTime SendTime { get; set; }

    }
}