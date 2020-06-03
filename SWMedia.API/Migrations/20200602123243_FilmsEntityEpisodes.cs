using Microsoft.EntityFrameworkCore.Migrations;

namespace SWMedia.API.Migrations
{
    public partial class FilmsEntityEpisodes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Episode",
                table: "Films",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Episode",
                table: "Films");
        }
    }
}
