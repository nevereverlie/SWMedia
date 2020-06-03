using AutoMapper;
using SWMedia.API.Dtos;
using SWMedia.API.Models;

namespace SWMedia.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForUpdateDto>();
        }
    }
}