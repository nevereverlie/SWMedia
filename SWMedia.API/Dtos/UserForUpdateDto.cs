using System;
using System.ComponentModel.DataAnnotations;

namespace SWMedia.API.Dtos
{
    public class UserForUpdateDto
    {
        public string Username { get; set; }

        [StringLength(30, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 30 characters!")]
        public string Password { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string SelfDescription { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
    }
}