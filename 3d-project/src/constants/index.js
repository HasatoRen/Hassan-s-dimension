import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    threejs,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "three JS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "The Beginning",
        company_name: "Exploring Programming",
        icon: starbucks, // Replace with your own icon
        iconBg: "#accbe1",
        date: "The Early Days",
        points: [
            "Discovered programming through YouTube videos about web and game development.",
            "Became fascinated with the idea of turning creative ideas into something real through code.",
            "Started experimenting with programming and learning the fundamentals.",
        ],
    },
    {
        title: "Python Developer",
        company_name: "Learning & Experimenting",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Learning Phase",
        points: [
            "Explored Python and learned programming fundamentals.",
            "Practiced working with functions, strings, lists, dictionaries, and other core concepts.",
            "Experimented with small programs and problem-solving.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Building for the Web",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Growing Through Projects",
        points: [
            "Started building websites using HTML, CSS, JavaScript, and React.",
            "Explored Tailwind CSS to create responsive and modern interfaces.",
            "Worked on personal projects and experimented with different design approaches.",
        ],
    },
    {
        title: "Creative Developer",
        company_name: "Exploring New Possibilities",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "2026 - Present",
        points: [
            "Exploring Three.js and React Three Fiber to create interactive 3D web experiences.",
            "Collaborating on software ideas and turning concepts into practical projects.",
            "Continuously improving my development, problem-solving, and design skills.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];