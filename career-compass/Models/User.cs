using Microsoft.AspNetCore.Identity;

namespace CareerCompass.Models
{
    public class User : IdentityUser
    {
        public virtual ICollection<CV> CVs { get; set; }
    }
}
