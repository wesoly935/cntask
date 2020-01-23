using System;
using System.ComponentModel.DataAnnotations;

namespace cntask.ViewModels.ViewModels
{
    public class MailingGroupUpdateModel
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [MinLength(1)]
        public string[] Receivers { get; set; }
    }
}
