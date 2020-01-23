using cntask.Services.Interfaces;
using cntask.ViewModels.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace cntask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailingGroupController : ControllerBase
    {
        private readonly IMailingGroupService _mailingGroupService;

        public MailingGroupController(IMailingGroupService mailingGroupService)
        {
            _mailingGroupService = mailingGroupService;
        }
        [HttpGet]
        public async Task<IActionResult> GetMailingGroups()
        {
            var result = await _mailingGroupService.GetMailingGroups();
            if (result.Success)
            {
                return Ok(result.Body);
            }
            return BadRequest(result.GetErrors());
        }

        [HttpPost]
        public async Task<IActionResult> AddMailingGroup(MailingGroupCreateModel data)
        {
            var result = await _mailingGroupService.AddMailingGroup(data);
            if (result.Success)
            {
                return Ok();
            }
            return BadRequest(result.GetErrors());
        }

        [HttpPut]
        public async Task<IActionResult> UpdateMailingGroup(MailingGroupUpdateModel data)
        {
            var result = await _mailingGroupService.EditMailingGroup(data);
            if (result.Success)
            {
                return Ok();
            }
            return BadRequest(result.GetErrors());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMailingGroup(Guid id)
        {
            var result = await _mailingGroupService.DeleteMailingGroup(id);
            if (result.Success)
            {
                return Ok();
            }
            return BadRequest(result.GetErrors());
        }
    }
}
