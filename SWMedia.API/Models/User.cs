using System;
using System.Collections.Generic;

namespace SWMedia.API.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public DateTime DateOfBirth { get; set; }
        public string SelfDescription { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public virtual ICollection<Message> MessagesSent { get; set; }

    
    }
}