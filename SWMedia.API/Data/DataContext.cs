using Microsoft.EntityFrameworkCore;
using SWMedia.API.Models;

namespace SWMedia.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        public DbSet<User> Users { get; set; }        
        public DbSet<GoogleUser> GoogleUsers { get; set; }
        //public DbSet<TShirt> TShirts { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}