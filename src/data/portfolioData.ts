export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  proofUrl?: string;
  date?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  status?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    about: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    leetcode: string;
    photo?: string;
    photoAlt?: string;
  };
  skills: {
    programmingLanguages: string[];
    coreFocus: string[];
    learningInterests: string[];
    tools: string[];
  };
  education: EducationItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
}

/**
 * Helper function to determine if a value is a placeholder (starts with '[').
 * Prevents rendering broken links or hrefs when values are not yet configured.
 */
export const isPlaceholder = (value?: string | null): boolean => {
  if (!value || typeof value !== 'string') return false;
  return value.trim().startsWith('[');
};

export const portfolioData: PortfolioData = {
  personal: {
    name: "Vangala Ramcharan Reddy",
    headline: "Driven by Logic. Defined by Precision. Inspired by Innovation.",
    about:
      "I am a Computer Science student passionate about problem-solving, data structures, and algorithms, with a strong foundation in C++ and core programming concepts. I aspire to build impactful software solutions, contribute to open-source projects, and explore emerging technologies in AI and software engineering.",
    location: "Nellore, Andhra Pradesh",
    email: "ramcharan2154993@gmail.com",
    github: "https://github.com/ramcharan2154993",
    linkedin: "[YOUR_LINKEDIN_PROFILE_URL]",
    leetcode: "https://leetcode.com/u/ramcharan_reddy/",
    photo: "/profile.jpg",
    photoAlt: "Photo of Vangala Ramcharan Reddy",
  },

  skills: {
    programmingLanguages: ["C", "C++", "Java", "Python"],
    coreFocus: ["DSA in C++"],
    learningInterests: ["[ADD LEARNING INTERESTS]"],
    tools: ["[ADD TOOLS]"],
  },

  education: [
    {
      institution: "Mohan Babu University",
      degree: "B.Tech CSE",
      duration: "2025-2029",
      status: "Currently 2nd year, 1st semester",
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate (MPC)",
      duration: "2023-2025",
    },
    {
      institution: "SVR EM High School",
      degree: "Class X",
      duration: "2022-2023",
    },
  ],

  projects: [
    {
      id: "projects-coming-soon",
      title: "Projects coming soon",
      description: "[Projects under active development. Check back soon!]",
      techStack: [],
    },
  ],

  achievements: [
    {
      id: "spelling-bee-winner",
      title: "APUSMA English Spelling Bee Winner",
      description: "Won the English Spelling Bee competition in Class 7.",
    },
    {
      id: "class-10-performance",
      title: "Outstanding Secondary School Performance",
      description: "Secured 579/600 (96.5%) in Class 10 and achieved 2nd rank in school.",
    },
    {
      id: "intermediate-excellence",
      title: "Academic Excellence in Intermediate",
      description: "Scored 97.1% in Intermediate.",
    },
    {
      id: "first-sem-gpa",
      title: "Perfect First-Semester GPA",
      description: "Achieved a 10.0 CGPA in the first semester of B.Tech.",
    },
    {
      id: "consistent-academic-excellence",
      title: "Consistent Academic Excellence",
      description: "Maintained a 9.89 CGPA through the third semester.",
    },
    {
      id: "java-programming-excellence",
      title: "Java Programming Excellence",
      description:
        "Achieved a perfect 10/10 score in Java Programming, a distinction earned by only 18 out of 1,800 students at my college.",
      proofUrl: "https://lnkd.in/p/d2uDSjWU",
    },
  ],
};
