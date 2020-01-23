using System;

namespace cntask.ViewModels.ViewModels
{
    public class MailingGroupViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string[] Receivers { get; set; }
    }
}
