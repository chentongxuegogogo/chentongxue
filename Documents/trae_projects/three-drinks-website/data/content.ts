import { SiteData } from '../types';

export const siteData: SiteData = {
  profile: {
    name: "Your Name",
    tagline: "Product Engineer & Interaction Designer",
    bio: "Exploring the intersection of technology, design, and life. Welcome to my digital garden.",
    xhsUrl: "https://www.xiaohongshu.com/user/your-id",
    email: "hello@example.com",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/yourusername", icon: "Github" },
      { platform: "Twitter", url: "https://twitter.com/yourusername", icon: "Twitter" }
    ]
  },
  photography: [
    {
      id: "p1",
      title: "Urban Solitude",
      date: "2023-12",
      location: "Tokyo",
      coverImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1533552030240-5a7ce6985050?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Capturing the quiet moments in a busy city."
    },
    {
      id: "p2",
      title: "Morning Coffee",
      date: "2024-01",
      location: "Home",
      coverImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  ],
  articles: [
    {
      id: "a1",
      title: "The Art of Interaction Design",
      url: "https://medium.com/@yourusername/article-1",
      date: "2024-02-15",
      tags: ["Design", "UX"]
    },
    {
      id: "a2",
      title: "Building Scalable Frontends",
      url: "https://dev.to/yourusername/article-2",
      date: "2024-01-20",
      tags: ["Tech", "React"]
    }
  ],
  resume: {
    pdfUrl: "/resume.pdf",
    highlights: [
      "5+ years of Full Stack Development",
      "Led design system migration for enterprise product",
      "Open source contributor"
    ],
    experience: [
      {
        company: "Tech Corp",
        role: "Senior Frontend Engineer",
        period: "2021 - Present",
        description: [
          "Architected the new dashboard using Next.js",
          "Improved performance by 40%"
        ]
      },
      {
        company: "Creative Studio",
        role: "Web Developer",
        period: "2019 - 2021",
        description: [
          "Developed award-winning marketing sites",
          "Collaborated closely with designers"
        ]
      }
    ],
    education: [
      {
        school: "University of Technology",
        degree: "B.S. Computer Science",
        year: "2019"
      }
    ],
    skills: ["React", "TypeScript", "Next.js", "Node.js", "Figma", "Tailwind CSS"]
  }
};
