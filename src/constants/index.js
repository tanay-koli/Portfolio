export const myProjects = [
  {
    id: 1,
    title: "Sound Generation using Neural Networks",
    description:
      "Developed a deep learning system that generates realistic audio by learning latent representations of sound using Variational Autoencoders (VAEs), focusing on balancing audio quality and computational efficiency.",
    subDescription: [
      "Designed an audio preprocessing pipeline to convert raw signals into normalized spectrograms for effective model training."
    
    ],
    href: "https://github.com/tanay-koli/SoundGenerationUsingNeuralNetwork",
    logo: "",
    image: "/assets/projects/sound.png",
    tags: [
      {
        id: 1,
        name: "TensorFlow",
        path: "/assets/logos/tensorflow.svg",
      },
      {
        id: 2,
        name: "Keras",
        path: "/assets/logos/keras.svg",
      },
      {
        id: 3,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
    ],
  },
  {
    id: 2,
    title: "A Multi-Modal Fusion Approach for Passive Bot Detection",
    description:
      "Developed a multi-modal detection framework combining mouse dynamics, web server log analysis, and honeypot interactions for non-intrusive bot identification.",
    subDescription: [
      "Engineered behavioral features from mouse trajectories (speed, acceleration, curvature) to capture human neuromotor patterns.",
      "Implemented honeypot mechanisms using hidden form fields to flag automated scripts with high confidence.",
      "Designed a fusion engine to combine probabilistic outputs from individual modules, improving robustness and reducing false positives.",
    ],
    href: "https://github.com/smitj25/CAPSTONE",
    logo: "",
    image: "/assets/projects/captcha.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Keras",
        path: "/assets/logos/keras.svg",
      },
      {
        id: 3,
        name: "Pytorch",
        path: "/assets/logos/pytorch.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Resume Analyzer – AI-Powered HR Tech",
    description:
      "Developed an AI-driven web application that automates resume screening by analyzing candidate profiles against job descriptions, helping recruiters make faster and more informed shortlisting decisions.",
    subDescription: [
      "Built a Flask-based web application allowing recruiters to upload PDF resumes through a simple, responsive interface.",
      "Implemented NLP-based text extraction and analysis to generate AI-powered resume summaries.",
      "Designed a job–resume matching mechanism to compute relevance scores based on skill alignment and role requirements.",
      "Automated the shortlisting workflow, reducing manual screening effort and improving evaluation consistency.",
    ],
    href: "https://github.com/tanay-koli/Brainrot-PS1",
    logo: "",
    image: "/assets/projects/resume.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "Flask",
        path: "/assets/logos/flask.png",
      },
    ],
  },
  {
    id: 4,
    title: "GIT GREENER – Sustainable Code Optimizer",
    description:
      "Developed a repository analysis engine to scan codebases and identify performance bottlenecks and inefficient patterns.",
    subDescription: [
      "Implemented AI-driven code recommendations to optimize resource usage and promote sustainable coding practices.",
      "Integrated a carbon impact assessment module to estimate the environmental footprint of code execution and infrastructure usage.",
      "Designed an interactive AI assistant to guide developers with context-aware, sustainability-focused suggestions.",
    ],
    href: "https://github.com/tanay-koli/HackForge",
    logo: "",
    image: "/assets/projects/getgreener.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.webp",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      }
    ],
  },
  /* {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },*/
]; 

export const mySocials = [
  {
    name: "Github",
    href: import.meta.env.VITE_GITHUB_URL,
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href:
      import.meta.env.VITE_LINKEDIN_URL,
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href:
      import.meta.env.VITE_INSTAGRAM_URL,
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "SVKM’s NMIMS, Kharghar",
    job: "",
    date: "August 2022 - Present",
    contents: [
      "Bachelor of Technology in Artificial Intelligence and Data Science",
      "CGPA: 3.89/4.00 (Till 6th Semester)"      
    ],
  },
  {
    title: "ENCIPHER IO",
    job: "",
    date: "May 2024 - Present",
    contents: [
      "Co-Founder",
      "Curate high-impact content across multiple social platforms, and maintain robust brand presence that drives audience engagement and community growth."
    ],
  },
  {
    title: "SHREERAM RADHAKRISHNAN MEMORIALTRUST",
    job: "",
    date: "June 2023- July 2023",
    contents: [
      " Teacher Assistant (Community Service) ",
      " Mentored and empowered underprivileged children through targeted educational interventions, addressing learning gaps and building foundational academic skills."
    ],
  },
  {
    title: "DAV Public School, Nerul",
    job: "",
    date: "June 2022",
    contents: [
      " CBSE, XIIth Grade ",
      " Grade: 90.02% "
    ],
  },
  {
    title: "DAV Public School, Nerul",
    job: "",
    date: "March 2020",
    contents: [
      " CBSE, Xth Grade",
      " Grade: 96.4%"
    ],
  },
];
/* export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
 */