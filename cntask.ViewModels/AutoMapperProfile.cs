using AutoMapper;
using cntask.Database.Models;
using cntask.ViewModels.ViewModels;

namespace cntask.ViewModels
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<MailingGroupCreateModel, MailingGroup>();
            CreateMap<MailingGroupUpdateModel, MailingGroup>();
            CreateMap<MailingGroup, MailingGroupViewModel>();

        }
    }
}
