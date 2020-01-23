using AutoMapper;
using cntask.Database;
using cntask.Database.Models;
using cntask.Services.Services;
using cntask.ViewModels;
using cntask.ViewModels.ViewModels;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace cntask.Tests
{
    public class TestCnTaskContext
    {
        [Test]
        public void AddMailingGroup_Test()
        {
            var options = new DbContextOptionsBuilder<CnTaskContext>()
                .UseInMemoryDatabase(databaseName: "TESTS")
                .Options;
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(profile: new AutoMapperProfile());
            });
            var mapper = new Mapper(mappingConfig);
            using (var context = new CnTaskContext(options))
            {
                var service = new MailingGroupService(context, mapper);
                Task.FromResult(service.AddMailingGroup(new MailingGroupCreateModel()
                {
                    Name = "Test",
                    Receivers = new string[] { "test@example.com" }
                }));
            }

            using (var context = new CnTaskContext(options))
            {
                Assert.AreEqual(1, context.MailingGroups.Count());
                Assert.AreEqual("Test", context.MailingGroups.Single().Name);
                Assert.AreEqual("test@example.com", context.MailingGroups.Single().Receivers.FirstOrDefault());
            }
        }

        [Test]
        public void EditMailingGroup_Test()
        {
            var options = new DbContextOptionsBuilder<CnTaskContext>()
                .UseInMemoryDatabase(databaseName: "TESTS")
                .Options;
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(profile: new AutoMapperProfile());
            });
            using (var context = new CnTaskContext(options))
            {
                context
                    .MailingGroups
                    .Add(new MailingGroup()
                    {
                        Id = Guid.Parse("73FF6568-9C1F-4530-BA15-66463F271084"),
                        Name = "Before Test",
                        Receivers = new string[] { "before@test.pl" },
                    });
                context.SaveChanges();
            }
            using (var context = new CnTaskContext(options))
            {
                var mapper = new Mapper(mappingConfig);

                var service = new MailingGroupService(context, mapper);
                Task.FromResult(service.EditMailingGroup(new MailingGroupUpdateModel()
                {

                    Id = Guid.Parse("73FF6568-9C1F-4530-BA15-66463F271084"),
                    Name = "After Test",
                    Receivers = new string[] { "after@test.pl" },
                }));
            }

            using (var context = new CnTaskContext(options))
            {
                Assert.AreEqual("After Test", context.MailingGroups.FirstOrDefault(x => x.Id == Guid.Parse("73FF6568-9C1F-4530-BA15-66463F271084")).Name);
                Assert.AreEqual("after@test.pl", context.MailingGroups.FirstOrDefault(x => x.Id == Guid.Parse("73FF6568-9C1F-4530-BA15-66463F271084")).Receivers.FirstOrDefault());
            }
        }
        [Test]
        public void DeleteMailingGroup_Test()
        {
            var options = new DbContextOptionsBuilder<CnTaskContext>()
                .UseInMemoryDatabase(databaseName: "TESTS")
                .Options;
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(profile: new AutoMapperProfile());
            });
            using (var context = new CnTaskContext(options))
            {
                context
                    .MailingGroups
                    .Add(new MailingGroup()
                    {
                        Id = Guid.Parse("9F3D8AA5-2B42-469E-AF30-1BC95F388994"),
                        Name = "Test",
                        Receivers = new string[] { "Test" },
                    });
                context.SaveChanges();
            }
            using (var context = new CnTaskContext(options))
            {
                var mapper = new Mapper(mappingConfig);

                var service = new MailingGroupService(context, mapper);
                Task.FromResult(service.DeleteMailingGroup(Guid.Parse("9F3D8AA5-2B42-469E-AF30-1BC95F388994")));
            }

            using (var context = new CnTaskContext(options))
            {
                Assert.AreEqual(true, context.MailingGroups.FirstOrDefault(x => x.Id == Guid.Parse("9F3D8AA5-2B42-469E-AF30-1BC95F388994")).IsDeleted);
            }
        }
    }
}
