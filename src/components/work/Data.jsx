// Data.jsx

import GoWeb from "../../assets/GoWeb.jpg";
import GoApp from "../../assets/GoApp.png";
import Dashboard from "../../assets/dashboard.png";

export const projectsData = [
  {
    id: 1,
    image: GoWeb,
    title: "GoSolar Egypt",
    category: "web",
    link: "https://www.gosolaregypt.com/",
    description: "A professional landing page for a solar energy company.",
    tools: ["React", "CSS", "Firebase","tilwindcss","react-router-dom","EmailUs.Js"]
  },
  {
    id: 2,
    image: Dashboard,
    title: "Trackon Dashboard",
    category: "web",
    link: "https://trackongraduation.vercel.app/welcome",
    description: "A dashboard for task and project management.",
    tools: ["React", "CSS","Tilwindcss","react-router-dom", "Authentication" ]
  },
  {
    id: 3,
    image: GoApp,
    title: "Go solar App",
    category: "app",
    link: "https://www.gosolaregypt.com/",
    description: "Showcase of social media presence and content strategy.",
    tools: ["React Native Cli", "Firebase", "Redux", "React Navigation", "Google Maps" ]
  },
];

// projectsNav remains the same
export const projectsNav = [
    { name: 'all' },
    { name: 'web' },
    { name: 'app' },
];