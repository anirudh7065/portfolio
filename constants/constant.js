import { icons } from "lucide-react";

export const langs = [
    {
        name: "Javascript",
        url: "/langs/Js.svg",
    },
    {
        name: "C",
        url: "/langs/c.svg",
    },
    {
        name: "C++",
        url: "/langs/c++.svg",
    },
    {
        name: "MongoDB",
        url: "/langs/mongodb-icon.svg",
    },
    {
        name: "Next.js",
        url: "/langs/next-js.svg",
    },
    {
        name: "Node.js",
        url: "/langs/nodejs.png",
    },
    {
        name: "React",
        url: "/langs/react.svg",
    },
    {
        name: "Python",
        url: "/langs/python-icon.svg",
    },
    {
        name: "Express.js",
        url: "/langs/expressjs.png",
    },
    {
        name: "Tailwindcss",
        url: "/langs/tailwindcss-icon.svg",
    },
];


export const navs = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Certificates",
        url: "/certificates",
    },
    {
        name: "Projects",
        url: "/projects",
    },
    {
        name: "Contact",
        url: "/contact",
    },
];

export const socials = [
    {
        name: "Github",
        url: "https://github.com/anirudh7065",
        icon:"/social/github.svg"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/abhishek-valsan-7590a6224",
        icon:"/social/linkedin.svg"
    },
]


export const certificates = [{
    src: "/certificate/soft-min.png",
    alt: "Image of softpro certificate",
}, {
    src: "/certificate/css.png",
    alt: "Image of css certificate",
}, {
    src: "/certificate/cpp-info.png",
    alt: "Image of cpp certificate",
}, {
    src: "/certificate/html5.png",
    alt: "Image of html5 certificate",
}, {
    src: "/certificate/tcs.png",
    alt: "Image of tcs certificate",
}, {
    src: "/certificate/postman-letsu.png",
    alt: "Image of postman certificate",
    }];

export const contacts = [
    {
        name: "Email",
        url: "mailto:anirudhraj02@gmail.com?",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/abhishek-valsan-7590a6224",
    },
    {
        name: "Github",
        url: "https://github.com/anirudh7065",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/anni.raj.002/",
    },
]

export const projects = [
    {
        src: "/projects/zolo.png",
        alt: "Image of zolo project",
        title: "ZOlo",
        subtitle: "Video Calling",
        desc: "It is a video calling app with lets you do instant meetings, schedule meetings,and record meeting and join meeting",
        live: "http://zolo.vercel.app",
        stack: ["Nextjs", "Tailwind", "Shadcn", "Stream video client", "Clerk Auth"],
    },
    {
        src: "/projects/passman.png",
        alt: "Image of passman project",
        title: "PassMan",
        subtitle: "Password Manager",
        desc: "It is a password storing application used to store your passwords, edit your password or delete your password",
        sources: "https://github.com/anirudh7065/Password-Manager",
        stack: ["Vite", "Tailwind", "ReactJs", "Mongo DB", "NodeJs", "ExpressJS"],
    },
    {
        src: "/projects/portfolio.png",
        alt: "Image of portfolio project",
        title: "AV",
        subtitle: "Portfolio Website",
        desc: "It is my portfolio website on which you are currently on this stores everything about me as a job aspirant",
        live: "/",
        sources: "https://github.com/anirudh7065/portfolio",
        stack: ['Nextjs', 'Tailwind'],
    }
]
