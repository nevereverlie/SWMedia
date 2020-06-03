using System;
using System.Collections.Generic;
using SWMedia.API.Models;

namespace SWMedia.API.Dtos
{
    public class UserForListDto
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string SelfDescription { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public ICollection<Message> MessagesSent { get; set; }
        
    }
}