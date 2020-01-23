using AutoMapper;
using cntask.Database;
using cntask.Database.Models;
using cntask.Messages;
using cntask.Services.Interfaces;
using cntask.ViewModels;
using cntask.ViewModels.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cntask.Services.Services
{
    public class MailingGroupService : IMailingGroupService
    {
        private readonly CnTaskContext _context;
        private readonly IMapper _mapper;

        public MailingGroupService(CnTaskContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ServiceResult> AddMailingGroup(MailingGroupCreateModel model)
        {
            try
            {
                var duplicatedName = await _context
                    .MailingGroups
                    .AnyAsync(x => !x.IsDeleted && x.Name == model.Name);

                if (duplicatedName)
                {
                    return ServiceResult.Failed(ServiceMessages.ErrorOnAddDuplicateName);
                }

                var newEntity = _mapper.Map<MailingGroup>(model);
                _context
                    .MailingGroups
                    .Add(newEntity);

                await _context.SaveChangesAsync();

                return ServiceResult.Succeed();

            }
            catch (Exception)
            {
                return ServiceResult.Failed(ServiceMessages.ErrorOnAdd);
            }
        }

        public async Task<ServiceResult> DeleteMailingGroup(Guid id)
        {
            try
            {
                var entry = await _context
                    .MailingGroups
                    .FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == id);

                if (entry == null)
                {
                    return ServiceResult.Failed(ServiceMessages.ErronOnDeleteGroupNotExists);
                }

                entry.IsDeleted = true;

                _context
                    .MailingGroups
                    .Update(entry);

                await _context.SaveChangesAsync();

                return ServiceResult.Succeed();

            }
            catch (Exception)
            {
                return ServiceResult.Failed(ServiceMessages.ErrorOnDelete);
            }
        }

        public async Task<ServiceResult> EditMailingGroup(MailingGroupUpdateModel model)
        {
            try
            {
                var duplicatedName = await _context
                    .MailingGroups
                    .AnyAsync(x => !x.IsDeleted && x.Name == model.Name && x.Id != model.Id);

                if (duplicatedName)
                {
                    return ServiceResult.Failed(ServiceMessages.ErrorOnEditDuplicateName);
                }
                var updateEntry = _mapper.Map<MailingGroup>(model);

                _context
                    .MailingGroups
                    .Update(updateEntry);

                await _context.SaveChangesAsync();

                return ServiceResult.Succeed();

            }
            catch (Exception)
            {
                return ServiceResult.Failed(ServiceMessages.ErrorOnEdit);
            }
        }

        public async Task<ServiceResult<IEnumerable<MailingGroupViewModel>>> GetMailingGroups()
        {
            try
            {
                var entities = await _context
                    .MailingGroups
                    .Where(x => !x.IsDeleted)
                    .ToListAsync();

                var mappedEntities = _mapper.Map<IEnumerable<MailingGroupViewModel>>(entities);

                return ServiceResult<IEnumerable<MailingGroupViewModel>>.Succeed(mappedEntities);

            }
            catch (Exception)
            {
                return ServiceResult<IEnumerable<MailingGroupViewModel>>.Failed(ServiceMessages.ErrorOnEdit);
            }
        }
    }
}
