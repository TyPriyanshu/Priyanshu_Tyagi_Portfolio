import { ProjectItem } from '../types/portfolio';

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "FinanceFlow - Personal Finance Management Platform (MERN)",
    duration: "April 2026",
    description: "Developed a full-stack personal finance management platform using MongoDB, Express.js, React.js and Node.js. Implemented secure JWT authentication, authorization, and role-based access control. Designed RESTful APIs for managing income, expenses, budgets, and financial reports. Built responsive dashboards with real-time financial analytics and data visualization.",
    image: "financeflow.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Recharts"],
    githubLink: "https://github.com/TyPriyanshu/FinanceFlow",
    liveLink: "https://financeflow-j17j.onrender.com"
  },
  {
    id: "proj-2",
    title: "Fear & Greed Index Analysis",
    duration: "January 2026",
    description: "An advanced data analytics project conducting preprocessing, data cleaning, and detailed exploratory analysis of market trends. Examined market sentiment correlations by analyzing data points using algorithmic indices.",
    image: "fear-greed.png",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Note"],
   
  },
  {
    id: "proj-3",
    title: "ExhibitX - Project Exhibition Management System (MERN)",
    duration: "March 2025",
    description: "Optimizing database queries for better performance. Developed a scalable web application for project submission, evaluation, and result management. Implemented secure authentication, CRUD operations, and REST APIs. Designed MongoDB database schema for efficient project and user management, automating project evaluation and result generation to improve overall workflow efficiency.",
    image: "exhibitx.png",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Framer Motion"],
    
  },
 
  {
    id: "proj-5",
    title: "Movie Ticket Booking Website",
    duration: "June 2023",
    description: "A comprehensive movie ticket reservation site with custom seat selection maps, secure payment gate flows, robust user registration, and active historical transaction records.",
    image: "movieticket.png",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express.js"],
  
  },

  
];
