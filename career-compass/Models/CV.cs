using System.Text.Json.Serialization;

namespace CareerCompass.Models
{
    public class CV
    {
        public int Id { get; set; }

        // Title (e.g., “Software Dev CV – Jan 2025”)
        public string Title { get; set; } = "My CV";

        // Store raw text
        public string Content { get; set; } = string.Empty;

        public CV(int id, string title, string content, string userId)
        {
            Id = id;
            Title = title;
            Content = content;
            UserId = userId;
        }

        public CV() { }

        // Foreign key → link to User
        public string UserId { get; set; }

        [JsonIgnore]
        public virtual User User { get; set; } = null!;
    }
}
