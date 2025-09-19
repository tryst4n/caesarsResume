using Microsoft.AspNetCore.Identity;

namespace CareerCompass.Models
{
    public class User : IdentityUser
    {
        public virtual List<CV> CVs { get; set; }
    }
}
