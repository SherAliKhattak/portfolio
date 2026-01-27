export const portfolioData = {
  personal: {
    name: "Sher Ali Khattak",
    title: "Senior Flutter Developer",
    location: "Islamabad, Pakistan",
    email: "skhattak30@gmail.com",
    phones: ["+92 370 3472420", "+92 332 5342357"],
    github: "https://github.com/SherAliKhattak",
    linkedin: "https://linkedin.com/in/SherAliKhattak",
    summary: "Driven by curiosity and a passion for user-friendly apps, I self-taught Flutter, building a strong foundation to craft bug-free experiences that delight. Curiosity ignited my passion for coding, and Flutter became my weapon of choice. I forge user-centric apps, pixel-perfect and bug-free, for experiences that truly resonate.",
    aboutDetails: [
      "With a strong foundation in Computer Systems Engineering and years of hands-on experience, I specialize in building cross-platform mobile applications using Flutter. My journey started with curiosity and self-learning, which has evolved into a career focused on creating pixel-perfect, user-centric applications.",
      "I've successfully delivered projects ranging from healthcare solutions to e-commerce platforms, always prioritizing clean architecture, performance optimization, and delightful user experiences. My expertise spans state management, Firebase integration, API development, and deploying production-ready apps to both major app stores."
    ]
  },
  
  experience: [
    {
      position: "Senior Flutter Developer",
      company: "Duseca Software",
      location: "Islamabad, Pakistan",
      period: "Jan 2024 - Present",
      responsibilities: [
        "Integrated seamless front-end and back-end solutions using Firebase and REST APIs, with proven expertise in debugging, performance optimization, and deploying applications to both the Play Store and App Store.",
        "Collaborated with fellow developers to implement features across multiple long-term projects.",
        "Actively engaged with clients to understand their requirements and ensure successful project delivery."
      ]
    },
    {
      position: "Flutter Developer",
      company: "Riayatech",
      location: "Islamabad, Pakistan",
      period: "Aug 2023 - Feb 2024",
      responsibilities: [
        "Contributed to a healthcare software product, focusing on API integration, debugging, and data handling.",
        "Improved UI/UX and collaborated in a fast-paced team environment, gaining real-world development experience."
      ]
    },
    {
      position: "Flutter Developer",
      company: "DcodaxPvt, LTD",
      location: "Islamabad, Pakistan",
      period: "Aug 2022 - July 2023",
      responsibilities: [
        "Developed applications from scratch based on client requirements, focusing on seamless UI, performance optimization, and clean architecture.",
        "Collaborated with senior developers to enhance existing apps with new features and visually engaging UI using Rive and Lottie animations."
      ]
    },
    {
      position: "Freelance Flutter Development",
      company: "Self-Employed",
      location: "Remote",
      period: "Part-time",
      responsibilities: [
        "Worked part-time on freelance projects, delivering high-quality Flutter apps tailored to client requirements and deadlines.",
        "Helped clients achieve their goals by translating ideas into functional, user-friendly mobile applications.",
        "Collaborated with open-source developers to integrate new features and improve UI/UX in community-driven apps."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science",
      field: "Computer Systems Engineering",
      institution: "University of Engineering & Technology, Peshawar",
      period: "2018 - 2022",
      description: "Gained expertise in computer architecture, embedded systems, networking, and software development. Focused on automation, system optimization, and innovative computing solutions."
    },
    {
      degree: "Pre Engineering",
      field: "FSc Pre-Engineering", 
      institution: "Islamia College Peshawar",
      period: "2015 - 2017",
      description: "Developed a strong foundation in mathematics, physics, and chemistry, with a focus on problem-solving, analytical thinking, and technical concepts essential for engineering studies."
    }
  ],

  skills: {
    "State Management": ["GetX", "Provider", "BLoC", "Riverpod"],
    "Backend & Database": ["Firebase", "Supabase", "SQFlite", "REST APIs", "Cloud Firestore"],
    "Cloud Services": ["Firebase Storage", "Cloud Messaging", "Push Notifications", "Edge Functions"],
    "Architecture & Patterns": ["MVC", "Repository Pattern", "Clean Architecture"],
    "Development Tools": ["FFmpeg", "Isolates", "Multithreading", "File Handling"],
    "Payments & Storage": ["Stripe Integration", "Shared Preferences", "Local Storage"],
    "UI/UX": ["Responsive Design", "Rive Animations", "Lottie", "Custom UI"],
    "Deployment": ["Play Store", "App Store", "CI/CD"],
    "Programming": ["Dart", "Flutter", ".NET Framework", "Background Services"]
  },

  projects: [
    {
      title: "Image To PDF Converter",
      description: "This app empowers you to effortlessly transform your photos into neatly organized PDFs. Features intuitive UI with batch processing capabilities.",
      technologies: ["Flutter", "PDF", "File Handling"],
      icon: "FileText",
      link: "https://github.com/SherAliKhattak",
      linkType: "GitHub"
    },
    {
      title: "Faintech Food Delivery",
      description: "Developed a full-featured food delivery app with real-time order tracking, secure payments, and restaurant browsing. Focused on seamless UI/UX and efficient backend integration.",
      technologies: ["Flutter", "Firebase", "Real-time"],
      icon: "Utensils",
      link: "https://github.com/SherAliKhattak",
      linkType: "GitHub"
    },
    {
      title: "Taakad Lab",
      description: "Healthcare initiative driven by helping 'Patient Experiences' through meeting their growing hopes and satisfying their demands with effective technology engagements.",
      technologies: ["Flutter", ".NET", "Healthcare"],
      icon: "Hospital",
      link: "https://apps.apple.com/app/taakad-lab",
      linkType: "App Store"
    },
    {
      title: "Car Sales App",
      description: "A cross-platform mobile app for buying and selling new or used cars, featuring secure authentication, detailed vehicle listings, advanced search filters, real-time chat, and integrated maps.",
      technologies: ["Flutter", "Supabase", "E-commerce"],
      icon: "Car",
      status: "Awaiting Deployment"
    },
    {
      title: "Video Booth",
      description: "A cross-platform video booth app with 360° video capture, image-to-GIF conversion, boomerang creation, and an integrated gallery for easy viewing and sharing of media.",
      technologies: ["Flutter", "FFmpeg", "Media Processing"],
      icon: "Video"
    },
    {
      title: "Wheels n Deals",
      description: "Enables users to efficiently search and browse used cars within their city and preferred price range. Features detailed listings, advanced filtering, and secure transaction options.",
      technologies: ["Flutter", "Firebase", "Marketplace"],
      icon: "CarFront",
      image: "/src/assets/wheels-n-deals-banner.png",
      link: "https://play.google.com/store/apps",
      linkType: "Play Store"
    },
    {
      title: "Sidra Rider",
      description: "This user-friendly Flutter-based intuitive app empowers registered riders to seamlessly manage appointments, view profiles, receive notifications, and navigate through patient locations.",
      technologies: ["Flutter", ".NET", "Maps"],
      icon: "Ambulance",
      link: "https://apps.apple.com/app/sidra-rider",
      linkType: "App Store"
    },
    {
      title: "SIDRA Patient Care",
      description: "An innovative and user-friendly Flutter-based healthcare application designed to provide seamless access to a wide range of medical services and resources right at your fingertips.",
      technologies: ["Flutter", ".NET", "Healthcare"],
      icon: "Heart",
      link: "https://apps.apple.com/app/sidra-patient-care",
      linkType: "App Store"
    },
    {
      title: "JJ Deliveries",
      description: "Get food delivered to your doorstep from incredible local restaurants. Find what you want and order it with ease on the JJ's Deliveries app.",
      technologies: ["Flutter", "Delivery", "Real-time"],
      icon: "Truck",
      link: "https://apps.apple.com/app/jj-deliveries",
      linkType: "App Store"
    },
    {
      title: "Sidra Doctor",
      description: "Sidra Doctor App is a comprehensive mobile solution designed to optimize online consultations for healthcare professionals. With a secure and user-friendly interface.",
      technologies: ["Flutter", ".NET", "Telemedicine"],
      icon: "Stethoscope",
      link: "https://apps.apple.com/app/sidra-doctor",
      linkType: "App Store"
    },
    {
      title: "Shoppy AI",
      description: "Shop smarter with Shoppy AI! Just scan any product, and our AI finds the best deals online in seconds. Fast, seamless, and effortless shopping.",
      technologies: ["Flutter", "AI/ML", "E-commerce"],
      icon: "ShoppingBag",
      link: "https://apps.apple.com/app/shoppy-ai",
      linkType: "App Store"
    },
    {
      title: "Belconnect",
      description: "A robust solar monitoring and support application providing comprehensive visibility into installed solar solutions. Features real-time energy overview (generation vs consumption), cost savings analysis (daily and monthly earnings), and detailed battery information. Designed for solar success around the clock.",
      technologies: ["Flutter", "Solar Monitoring", "Data Visualization", "IoT Integration"],
      icon: "Sun",
      image: "/src/assets/belconnect-banner.png"
    },
    {
      title: "Fit Freak",
      description: "A comprehensive fitness application designed to empower users on their training journey. Features include personalized onboarding with role selection (Trainer/Regular User), goal-oriented filters (activity level, exercise mode, goals), real-time notifications for workout challenges and subscriptions, and an AI-powered 'Ask GPT' assistant for personalized diet and exercise advice.",
      technologies: ["Flutter", "AI Integration", "Firebase", "Real-time Notifications"],
      icon: "Heart",
      image: "/src/assets/fitfreak/7.jpeg",
      gallery: [
        "/src/assets/fitfreak/1.jpeg",
        "/src/assets/fitfreak/2.jpeg",
        "/src/assets/fitfreak/3.jpeg",
        "/src/assets/fitfreak/4.jpeg",
        "/src/assets/fitfreak/5.jpeg",
        "/src/assets/fitfreak/6.jpeg",
        "/src/assets/fitfreak/7.jpeg",
        "/src/assets/fitfreak/8.jpeg",
        "/src/assets/fitfreak/9.jpeg",
        "/src/assets/fitfreak/10.jpeg"
      ]
    }
  ]
};
