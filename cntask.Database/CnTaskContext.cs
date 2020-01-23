using cntask.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace cntask.Database
{
    public class CnTaskContext : DbContext
    {
        public CnTaskContext(DbContextOptions<CnTaskContext> options)
            : base(options)
        {

        }
        public DbSet<MailingGroup> MailingGroups { get; set; }
    }
}
