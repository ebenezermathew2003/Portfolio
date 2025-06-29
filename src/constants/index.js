
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,

  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/EffiGO.jpeg";
import cdac from "../assets/company/cdac.png"


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Tester",
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
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
 {
    name: "Spring Boot",
    icon: framer,
  },

 
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Product Engineering Intern(QA)",
    company_name: "EffiGO Global",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Feb 2025 - Apr 2025",
    points: [
      "Created and executed test scenarios and test cases across various product modules .",
      "Performed functional testing and security testing .",
      "Gained knowledge of API testing and automation frameworks .",
      "Played an active role in identifying bugs and tracking them to closure.",
      "Collaborated with developers and designers to validate and troubleshoot features.",
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company_name: "C-DAC Bangalore",
    icon: cdac,
    iconBg: "#383E56",
    date: "Apr 2025 - June 2025",
    points: [
      "Developed a centralized Course Management System using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
"Enabled instructors to create courses, upload study materials, and manage student enrollments.",
"Implemented JWT-based authentication for secure user access (instructors & students).",
"Designed RESTful APIs and integrated MongoDB for dynamic course and user data storage.",
"Built a responsive front-end interface with React.js and managed state using Redux.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mathew proved me wrong.",
    name: "Ganesh H Y",
    designation: "Software Engineer",
    //company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mathew does.",
    name: "Harshith D M",
    designation: "Software Engineer",
    //company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Mathew optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Madhusudhan R",
    designation: "Software Engineer",
    //company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Gym Management Application",
    description:
      "A full-stack application designed to streamline gym operations. It includes features for admin and member login, member registration, equipment tracking, payment management, health progress monitoring, and announcements. Built using Flutter for the frontend, MySQL for the database, and PHP for backend APIs, the app ensures a responsive and user-friendly experience.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "white-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/ebenezermathew2003/Gym-Management-App.git",
  },
  {
    name: "Online Course Management System",
    description:
      "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) to facilitate seamless course creation and enrollment. The system allows instructors to create and manage courses, upload study materials, and track student enrollments. Implemented secure authentication using JWT for role-based access control. Designed RESTful APIs for efficient data handling and built a responsive front-end interface with React.js and Redux for state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Facial Emotion Detection and Age-Gender Prediction",
    description:
      "Built a real-time system using OpenCV and deep learning to detect facial emotions, age, and gender from webcam input. Integrated pre-trained CNN models for accurate prediction and live video processing.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "white-text-gradient",
      },
      {
        name: "TKinter",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/ebenezermathew2003/Live-Facial-Emotion-Detection-Through-OpenCV-and-Deep-Learning.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
