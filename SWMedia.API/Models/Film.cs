namespace SWMedia.API.Models
{
    public class Film
    {
        public int Id { get; set; }
        public string Episode { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Premier { get; set; }
        public string TrailerUrl { get; set; }
        public double Rating { get; set; }
        public int Year { get; set; }
        public string BgUrl { get; set; }     
    }
}