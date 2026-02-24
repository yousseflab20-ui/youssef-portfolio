
export const PERSONAL_INFO = {
    name: "YOUSSEF LABNINE",
    title: "Web & Mobile Developer",
    email: "yousseflab20@gmail.com",
    phone: "+212 718-799401",
    location: "Agadir, Morocco",
    bio: "Based in Morocco, I build scalable web applications and high-performance mobile apps using modern technologies, focusing on clean architecture, performance, and user-centered design. I’m passionate about solving real-world problems and transforming ideas into reliable digital products. Let’s build something great together.",
    about: {
        intro: "I'm a Full Stack Mobile & Web Developer focused on building scalable, high-performance applications. I combine clean architecture with modern UI/UX principles to deliver reliable and efficient digital products.",
        specialization: "I specialize in designing robust backend systems and intuitive frontend experiences using modern JavaScript technologies. My goal is not just to write code — but to solve real business problems.",
        goal: "I am continuously improving my skills, exploring new technologies, and building production-ready solutions that scale."
    }
};

export const STATS = {
    yearsExperience: "1+",
    projectsCompleted: "50+",
    technologies: "15+"
};

export const SOCIAL_LINKS = {
    github: "https://github.com/yousseflab20-ui",
    linkedin: "https://www.linkedin.com/in/youssef-labnine-313a47367/",
};

export const TECH_STACK = [
    { name: "React", icon: "react/react-original.svg" },
    { name: "React Native", icon: "react/react-original.svg" },
    { name: "TypeScript", icon: "typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "javascript/javascript-original.svg" },
    { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
    { name: "Express", icon: "express/express-original.svg", invert: true },
    { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
    { name: "Docker", icon: "docker/docker-original.svg" },
    { name: "HTML5", icon: "html5/html5-original.svg" },
    { name: "CSS3", icon: "css3/css3-original.svg" },
    { name: "Jest", icon: "jest/jest-plain.svg" },
    { name: "Figma", icon: "figma/figma-original.svg" },
    { name: "Jira", icon: "jira/jira-original.svg" },
    { name: "MySQL", icon: "mysql/mysql-original.svg" },
    { name: "Expo", icon: "expo/expo-original.svg" },
];

export const PROJECTS = [
    {
        title: "CarMarket Mobile App",
        description: "A full-stack car marketplace mobile application built with Expo & TypeScript. The app allows users to list, browse, and chat in real-time about vehicles. I developed both frontend and backend including authentication, image uploads, push notifications, and CI/CD workflows.",
        tech: ["Expo", "TypeScript", "Node.js", "Sequelize ORM", "Zod", "Zustand", "Firebase", "Socket.io", "Cloudinary", "GitHub Actions"],
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500",
        link: "#",
        github: "https://github.com/yousseflab20-ui/CarMarket"
    },
    {
        title: "La Grande Soirée Gnawa",
        description: "A full-stack event management mobile application developed for La Grande Soirée Gnawa. I built both backend and frontend including authentication, event management, user registration, and secure data handling. The project focuses on performance, scalability, and clean architecture.",
        tech: ["React Native CLI", "TypeScript", "Node.js", "JavaScript", "ORM", "Zustand", "AsyncStorage"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
        link: "#",
        github: "https://github.com/yousseflab20-ui/La-Grande-Soiree-Gnawa"
    },
    {
        title: "Agadir Task Manager 2025",
        description: "A full-stack task management mobile application developed for Agadir Task Manager 2025. I built both frontend and backend including authentication, task creation, real-time updates, and secure data handling.",
        tech: ["React Native CLI", "TypeScript", "Node.js", "JavaScript", "Sequelize ORM", "Zustand", "AsyncStorage"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
        link: "#",
        github: "https://github.com/yousseflab20-ui/Agadir-Task-Manager-2025"
    },
    {
        title: "Simulateur de Taxi Casablancais",
        description: "A taxi booking simulation mobile application built with Expo. The app calculates the distance between the user and the taxi, displays real-time taxi location tracking on the map, and provides estimated arrival updates.",
        tech: ["React Native", "Expo", "Maps Integration", "Geolocation", "Distance Calculation"],
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500",
        link: "#",
        github: "https://github.com/yousseflab20-ui/Simulateur-de-Taxi-Casablancais"
    }
];
