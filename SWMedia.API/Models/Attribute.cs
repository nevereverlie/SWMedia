namespace SWMedia.API.Models
{
    public class Attribute
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }

        public string AttributeName { get; set; }
        public string Value { get; set; }
    }
}