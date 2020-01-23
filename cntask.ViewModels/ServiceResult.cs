using System.Collections.Generic;
using System.Linq;

namespace cntask.ViewModels
{
    public class ServiceResult
    {
        private IEnumerable<string> errors;

        public IEnumerable<string> Errors
        {
            get { return errors; }
            set { errors = value; }
        }

        public bool Success => Errors != null && Errors.Any() ? false : true;

        public static ServiceResult Succeed()
        {
            return new ServiceResult();
        }

        public static ServiceResult Failed(params string[] errors)
        {
            var result = new ServiceResult();
            result.Errors = errors.AsEnumerable();

            return result;
        }

        public string GetErrors()
        {
            return string.Join(", ", Errors);
        }
    }

    public class ServiceResult<T> : ServiceResult
    {
        public T Body { get; private set; }

        public ServiceResult(T data)
        {
            Body = data;
        }

        public ServiceResult()
        {
        }        
        public static ServiceResult<T> Succeed(T data)
        {
            return new ServiceResult<T>(data);
        }

        public new static ServiceResult<T> Failed(params string[] errors)
        {
            var result = new ServiceResult<T>();
            result.Errors = errors.AsEnumerable();
            return result;
        }
    }
}
