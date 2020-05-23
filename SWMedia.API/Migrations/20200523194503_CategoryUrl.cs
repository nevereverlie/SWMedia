using Microsoft.EntityFrameworkCore.Migrations;

namespace SWMedia.API.Migrations
{
    public partial class CategoryUrl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CategoryUrl",
                table: "Categories",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryUrl",
                table: "Categories");
        }
    }
}
