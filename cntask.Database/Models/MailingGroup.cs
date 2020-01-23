using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cntask.Database.Models
{
    public class MailingGroup
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }

        public string _receivers { get; set; }

        [NotMapped]
        public string[] Receivers
        {
            get
            {
                if (!string.IsNullOrEmpty(_receivers))
                {
                    return _receivers.Split(',');
                }
                return Array.Empty<string>();
            }
            set
            {
                if (value is null || value.Length == 0)
                {
                    _receivers = string.Empty;
                }
                else
                {
                    _receivers = string.Join(",", value);
                }
            }
        }

        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
    }
}
