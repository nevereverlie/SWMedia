using Microsoft.EntityFrameworkCore.Migrations;

namespace SWMedia.API.Migrations
{
    public partial class AddedFilmsEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Films",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Premier = table.Column<string>(nullable: true),
                    TrailerUrl = table.Column<string>(nullable: true),
                    Rating = table.Column<double>(nullable: true),
                    Year = table.Column<int>(nullable: true),
                    BgUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Films", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Films");
        }
    }
}
