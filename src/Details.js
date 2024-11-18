// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo.png";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import codeigniter from "./assets/techstack/codeigniter.png";
import php from "./assets/techstack/php.png";
import phpmyadmin from "./assets/techstack/phpmyadmin.png";
import python from "./assets/techstack/python.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";
import msoffice from "./assets/techstack/ms-office.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Arya Dillah",
  tagline: "Front-End Developer",
  img: profile,
  about: `My name is Arya Dillah, and I am a Front-End Developer.
A dedicated Information Systems student with diverse experience in industry, retail, and administration. Skilled in managing online stores, data administration, and customer service.
Currently seeking an opportunity to apply academic knowledge and practical experience in a challenging information technology role.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/arya-dillah-297230254/",
  github: "https://github.com/Aryaa0112-A",
  instagram: "https://www.instagram.com/0112_yaa/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "IT Support",
    Company: `PT. Tri Dharma Kencana`,
    Location: "Serang City",
    Type: "Internship",
    Duration: "Feb 2018 - Mar 2018",
  },
  {
    Position: "Production Operator and Inspector",
    Company: `PT. Bright Mobile Telecommunication`,
    Location: "Tangerang City",
    Type: "Full Time",
    Duration: "Sep 2019 - Sep 2022",
  },
  {
    Position: "Store Crew",
    Company: `PT. Indomarco Prismatama`,
    Location: "Tangerang City",
    Type: "Full Time",
    Duration: "May 2023 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Information Systems",
    Company: "Bina Sarana Informatika University",
    Location: "Tangerang City",
    Type: "Student",
    Duration: "Sep 2022 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  codeigniter : codeigniter,
  php : php,
  phpmyadmin :phpmyadmin, 
  python : python,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  msoffice : msoffice,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Web Ujian Online",
    image: projectImage1,
    description: `""Web Ujian Online" is a website I created for my final project in the 6th semester. This site has three different access levels: for teachers, students, and administrators.`,
    techstack: "CodeIgniter, PHP, CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Aryaa0112-A/ujian-online",
  },
  {
    title: "Sistem Pengelolaan Barang",
    image: projectImage2,
    description: `The website is designed to manage products for sale, where the administrator can update the merchandise.`,
    techstack: "CodeIgniter, PHP, CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Web Coffee Shop",
    image: projectImage3,
    description: `The website is designed with two access levels to manage products for the "Rider Coffee" brand: one for administrators and one for customers to place orders.`,
    techstack: "CodeIgniter, PHP, CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "UI/UX Design App ",
    image: projectImage4,
    description: `This UI/UX design was created as part of my coursework, specifically to design an application for ordering products both online and offline at a coffee shop.`,
    techstack: "Figma",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "aryadillah0112@gmail.com",
  phone: "+62 89647352044",
};
