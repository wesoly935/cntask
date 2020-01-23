using System.ComponentModel.DataAnnotations;

namespace cntask.ViewModels.ViewModels
{
    public class MailingGroupCreateModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [MinLength(1)]
        public string[] Receivers { get; set; }

    }
}
