export const navLinks = [{
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [{
    id: 1,
    name: 'Neha Sharma',
    position: 'Software Engineer',
    img: 'assets/review1.webp',
    review: "The team at Tiza Webcrafts did an exceptional job building our company's new website. They were highly responsive, understood our requirements perfectly, and delivered a visually stunning and user-friendly platform. Highly recommended for anyone looking for top-notch web development services."
  } ,
  {
    id: 2,
    name: 'Raj Kumar',
    position: ' Marketing Manager',
    img: 'assets/review2.webp',
    review: "Working with Tiza Webcrafts was a breeze. They guided us through the entire web development process, offering valuable insights and suggestions to optimize our online presence. The final product exceeded our expectations, and we've seen a significant increase in website traffic and leads since launch.",
  },
  {
    id: 3,
    name: 'Priya Gupta',
    position: 'Entrepreneur',
    img: 'assets/review3.avif',
    review:  "As a small business owner, I was looking for a reliable web development partner to help establish my online store. Tiza Webcrafts not only built a visually appealing and functional e-commerce website, but they also provided ongoing support and optimization recommendations. I'm thrilled with the results and highly recommend their services.",
  },
  {
    id: 4,
    name: 'Anish Mehta',
    position: ' IT Manager',
    img: 'assets/review4.avif',
    review:  "Tiza Webcrafts demonstrated exceptional technical expertise and project management skills during the development of our corporate website. They were proactive in identifying and addressing any issues, ensuring a seamless launch. I'm impressed by their dedication and would gladly work with them again.",
  },
];

export const myProjects = [{
    title: 'Delicacy - Exquisite Restaurant Website',
    desc: '"Delicacy" is an exquisite restaurant website crafted to offer users a sophisticated and interactive online experience. The site boasts a sleek interface with engaging animations and interactive features, highlighting Delicacys gourmet offerings and exceptional dining atmosphere.',
    subdesc: 'The website is developed using modern web technologies such as HTML, CSS, and React.',
    href: 'https://delicacy-taha.netlify.app/',
    texture: 'textures/project/project1.mp4',
    logo: '/assets/project-logo1.avif',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.avif',
    tags: [{
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/html.avif',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/css (1).avif',
      },
    ],
  },
  {
    title: 'Tazza - Fresh Vegetable E-commerce Website',
    desc: '"Tazza" is a fresh and vibrant e-commerce website designed to offer users a seamless and engaging online shopping experience. The website features a clean and intuitive interface, enriched with interactive elements and animations, showcasing Tazzas wide range of fresh vegetables',
    subdesc: 'The website is developed using modern web technologies such as HTML, CSS, Tailwind CSS, and React.',
    href: 'https://tahalokhandwala790.github.io/Tazza/',
    texture: 'textures/project/project2.mp4',
    logo: '/assets/project-logo2.avif',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [{
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/html.avif',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/css (1).avif',
      },
    ],
  },
  {
    title: 'Pesto - Dynamic Restaurant Website',
    desc: '"Pesto" is a dynamic restaurant website designed to provide users with an engaging online experience. The site features a vibrant interface enriched with animations and interactive elements, showcasing Pestos culinary delights and dining experiences.',
    subdesc: 'The website is built using modern web development technologies such as HTML, CSS, and React.',
    href: 'https://tahalokhandwala790.github.io/pesto-webapp/',
    texture: 'textures/project/project3.mp4',
    logo: '/assets/project-logo3.avif',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background: 'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [{
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.avif',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/html.avif',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/css (1).avif',
      },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [{
    id: 1,
    name: 'Creating Stunning 3D and Animated Websites',
    pos: 'Pro Front-End Developer',
    duration: '2024 - Present',
    title: "At the beginning of my journey, I focused on HTML, CSS, and JavaScript, mastering these essential web technologies. I learned to structure content with HTML, style it with CSS, and add interactivity using JavaScript. Additionally, I understood the backend basics of handling messages and contact forms, ensuring seamless data delivery..",
    icon: '/assets/st1.avif',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Advanced Front-End Development',
    pos: 'Front-End Developer',
    duration: '2023 - 2024',
    title: "With a solid foundation, I transitioned to React for advanced front-end development. I learned to build reusable components, manage state efficiently, and implement smooth navigation using React Router. This stage was pivotal in enhancing my skills in creating dynamic and interactive user interfaces.",
    icon: '/assets/st2.avif',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Mastering the Basics',
    pos: 'Junior Web Developer',
    duration: '2022 - 2023',
    title: "Finally, I explored Three.jsand advanced animations. I mastered creating and integrating 3D models with React Three Fiber, enhancing my ability to craft visually captivating and user-friendly websites. Using libraries like GSAP, I added complex animations, making my websites stand out with stunning visuals and interactivity.",
    icon: '/assets/st3.avif',
    animation: 'salute',
  },
];