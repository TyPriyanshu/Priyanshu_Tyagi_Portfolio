import { ExperienceItem } from '../types/portfolio';

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Web Developer Intern",
    company: "Xcentic Technologies",
    duration: "November 2025 – April 2026",
    description: [
      "Developed responsive web applications using React.js, JavaScript, HTML5 and CSS3.",
      "Built reusable UI components and integrated REST APIs with backend services.",
      "Collaborated with backend developers using Git and GitHub.",
      "Optimized website performance, fixed software defects and improved user experience.",
      "Worked in Agile development environments following software engineering best practices."
    ],
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Git", "GitHub", "Agile Methodologies"]
  },
  {
    id: "exp-2",
    role: "Web Development Intern",
    company: "TechnoHacks Edutech",
    duration: "July 2024 – August 2024",
    description: [
      "Developed responsive frontend interfaces using React.js.",
      "Improved UI responsiveness and collaborated with developers during feature implementation.",
      "Assisted in debugging and improving overall application performance."
    ],
    skills: ["React.js", "Responsive Design", "UI/UX Optimization", "Debugging Code"]
  },
  {
    id: "exp-3",
    role: "Data Analytics Virtual Experience",
    company: "Deloitte (Forage)",
    duration: "January 2026",
    description: [
      "Completed rigorous real-world data analytics simulation tasks with real dataset scenarios.",
      "Performed detailed data cleaning, modeling, and analysis using Excel and SQL engines.",
      "Created highly descriptive dashboard insights, presenting business summaries to stakeholders."
    ],
    skills: ["Data Analytics", "Data Cleaning", "Data Visualization", "Dashboard Reporting"]
  }
];
