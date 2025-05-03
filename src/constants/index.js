import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tripguide1,
  Deepak,
  Rahul,
  Ayush
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Insignia",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2024 - Mar 2025",
    points: [
      "Contributed to projects involving LLM integration, Flux architecture, and lip-sync model development",

"Helped build intelligent, real-time interfaces combining front-end tech with AI capabilities",

"Worked on optimizing model performance and syncing animation with natural language outputs",

"Gained hands-on experience in bridging web technologies with AI/ML models",
    ],
  },
  
  {
    title: "AI Intern",
    company_name: "Edunet Foundation",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2025 - Mar 2025",
    points: [
      "Selected for a competitive AI internship under the CSR initiative by Microsoft & SAP",
      "Contributed to building an AI-powered Resume Screening and Ranking System to streamline recruitment workflows",
      "Developed models to extract and analyze key information from resumes (skills, experience, education) using Natural Language Processing (NLP)",
      "Gained hands-on experience in deploying AI solutions to solve real-world HR tech challenges",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Himanshu proved me wrong.",
    name: "Deepak Gariya",
    image: Deepak,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Himanshu does.",
    name: "Rahul Kanyal",
    image: Rahul,
  },
  {
    testimonial:
      "After Himanshu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ayush Dilip Bakade",
    image: Ayush,
  },
];

const projects = [
  {
    name: "Chat With Multiple PDF",
    description:
      "Developed an interactive PDF extraction and search application to enable efficient data retrieval from multiple PDFs simultaneously.",
    tags: [
      {
        name: "Generative Models",
        color: "blue-text-gradient",
      },
      {
        name: "Langchain",
        color: "green-text-gradient",
      },
      {
        name: "Google Gemini",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://huggingface.co/spaces/Himanxhu/Chat_with_Multiple_PDF",
  },
  {
    name: "Medical_Assistant",
    description:
      "The Medical Assistant is an AI-powered virtual assistant built using Python, designed to simulate basic doctor-patient interactions, help users understand common symptoms, and offer non-diagnostic suggestions based on user input.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Image Processing",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://medicalassistantt.streamlit.app/",
  },
  {
    name: "Portfolio",
    description:
      "As soon as you land on the page, you're greeted by a smooth 3D animation—maybe a rotating Earth, a floating laptop, or a digital avatar—all powered by Three.js. It's not just eye-candy; it represents the depth and dimension I bring to every project.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide1,
    source_code_link: "https://ai-driven-resume-screening-and-ranking-sytsem.streamlit.app/",
  },
  {
    name: "AI-powered Resume Screening and Ranking System",
    description:
      "Built an intelligent system that scans resumes, extracts key info, and ranks candidates based on job relevance using NLP and ML algorithms.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ai-driven-resume-screening-and-ranking-sytsem.streamlit.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
