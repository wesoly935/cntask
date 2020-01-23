using cntask.ViewModels;
using cntask.ViewModels.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace cntask.Services.Interfaces
{
    public interface IMailingGroupService
    {
        Task<ServiceResult> AddMailingGroup(MailingGroupCreateModel model);
        Task<ServiceResult> EditMailingGroup(MailingGroupUpdateModel model);
        Task<ServiceResult> DeleteMailingGroup(Guid id);
        Task<ServiceResult<IEnumerable<MailingGroupViewModel>>> GetMailingGroups();

    }
}
