import { 
  Gamepad2, 
  FlaskConical, 
  Dices, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Facebook, 
  Cpu, 
  Box, 
  Codesandbox, 
  Terminal, 
  Globe, 
  ExternalLink 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Federico Bachis",
  role: "Unity Game Developer & Research Technologist",
  about: "Indie Game Developer and Unity Developer since 2017. I specialize in 3D environment development, human-robot interaction, and gamification for research applications. Currently, I work as a Research Technologist in Game-Based Interaction Systems at CRS4, bridging the gap between advanced research and immersive user experiences.",
  degree: "I hold a degree in Computer Science from the University of Cagliari, with expertise in scientific writing and technical software architecture.",
  email: "f.bachisid91@gmail.com",
};

export const PROJECTS = [
  {
    title: "Goodnight Potion",
    description: "A 2D puzzle game where a wizard must finish all his potions before going to sleep. Features over 30 levels and an endless mode.",
    type: "Videogame",
    link: "https://creative-lizards.itch.io/goodnight-potion",
    demoLink: "https://creative-lizards.itch.io/goodnight-potion",
    icon: Gamepad2,
    tags: ["Unity", "2D", "Puzzle"],
    image: "images/GNP.png",
    caseStudy: {
      challenge: "Creating a compelling puzzle mechanic that balances simplicity with deep strategy using limited resources.",
      role: "Lead Developer & Game Designer",
      solution: "Developed a tile-based movement system where potion consumption order matters, using Unity's 2D engine and custom pathfinding logic.",
      result: "Successful launch on itch.io with positive community feedback on level design and difficulty curve."
    }
  },
  {
    title: "Distordi",
    description: "A 3D third-person multiplayer puzzle game. Players recover memories by exploring clues created by AI.",
    type: "Videogame",
    link: "https://federyuk91.itch.io/distordi",
    demoLink: "https://federyuk91.itch.io/distordi",
    icon: Gamepad2,
    tags: ["Unity", "3D", "Multiplayer", "AI"],
    image: "images/Distordi.jpg",
    caseStudy: {
      challenge: "Synchronizing complex puzzle states across multiple players in a 3D environment while integrating generative content.",
      role: "Full Stack Developer (Unity + Photon)",
      solution: "Implemented Photon Bolt for networking and custom API bridges to handle AI-generated clue injection during gameplay.",
      result: "A unique multiplayer experience showcased at several indie dev meetups."
    }
  },
  {
    title: "MyStupidBigFamily",
    description: "A fun and chaotic game developed for Ludum Dare 38. Manage a large, growing family with unique needs and challenges.",
    type: "Videogame",
    link: "https://federyuk91.itch.io/mystupidbigfamily",
    demoLink: "https://federyuk91.itch.io/mystupidbigfamily",
    icon: Gamepad2,
    tags: ["Unity", "Ludum Dare", "Simulation"],
    image: "images/MSBF.jpg",
    caseStudy: {
      challenge: "Implementing a complex AI behavior system for family members within a strict 48-hour time limit.",
      role: "Lead Developer",
      solution: "Used simple state machines and priority-based task allocation to simulate realistic member interactions.",
      result: "Successfully completed for the jam with positive ratings for humor and style."
    }
  },
  {
    title: "Tree of Heroes",
    description: "A strategic game developed for Ludum Dare 36. Grow your tree of heroes and defend your realm against waves of enemies.",
    type: "Videogame",
    link: "https://federyuk91.itch.io/heroess-tree",
    demoLink: "https://federyuk91.itch.io/heroess-tree",
    icon: Gamepad2,
    tags: ["Unity", "Strategy", "Defense"],
    image: "images/HT.jpg",
    caseStudy: {
      challenge: "Balancing the growth mechanic of the tree with the difficulty of enemy waves.",
      role: "Game Designer & Developer",
      solution: "Iterated through multiple balancing passes on the resource cost and combat mechanics during the jam.",
      result: "Ranked well in the Jam category for innovation and theme integration."
    }
  },
  {
    title: "Digital Twins for Cultural Heritage",
    description: "Development of prototypes and editor tools for creating digital twins of museums for cultural preservation (Project IDEALIA).",
    type: "Research",
    link: "https://www.crs4.it/it/projectdetails/IDEALIA/",
    icon: FlaskConical,
    tags: ["Digital Twins", "Unity", "Heritage"],
    image: "images/Idealia.jpg",
    caseStudy: {
      challenge: "Accurately representing real-world museum environments while maintaining high performance for web and mobile VR browsers.",
      role: "Research Technologist @ CRS4",
      solution: "Created custom shaders and LOD (Level of Detail) systems in Unity to handle high-fidelity photogrammetry models efficiently.",
      result: "Used by research institutions to provide virtual tours during lockdown periods."
    }
  },
  {
    title: "ATM / Rossana",
    description: "Anthropomorphic robotic assistant (ATM) developed to guide visitors in library settings. Integrated with Unity, Arduino, and ROS.",
    type: "Research",
    link: "https://www.crs4.it/it/news-view/rossana-il-robot-antropomorfo-sviluppato-dal-crs4/",
    icon: Cpu,
    tags: ["Unity", "ROS", "Arduino", "Robotics"],
    image: "images/ATM.jpg",
    caseStudy: {
      challenge: "Creating a seamless communication bridge between a high-level game engine (Unity) and low-level robotics middleware (ROS).",
      role: "System Architect & Unity Developer",
      solution: "Developed a custom ROS-Unity bridge using WebSockets to send real-time sensor data and control motor commands via Arduino.",
      result: "Successfully deployed in a library pilot program with over 500 successful visitor interactions."
    }
  },
  {
    title: "Sarim",
    description: "Immersive VR experience for HTC Vive showcasing Sardinian cultural heritage using photogrammetry.",
    type: "Research",
    link: "https://www.youtube.com/watch?v=lBzVPqVZsJg&list=PLYxmg_Vzg9K8eA1Gr4uv4nu6H0WeM9ZXi",
    videoUrl: "https://www.youtube.com/embed/lBzVPqVZsJg",
    icon: Box,
    tags: ["VR", "Photogrammetry", "History"],
    image: "images/Sarim.jpg",
    caseStudy: {
      challenge: "Capturing and digitizing large-scale archaeological sites with millimetric precision for an immersive VR setting.",
      role: "VR Developer & Photographer",
      solution: "Used 3DF Zephyr for photogrammetry and optimized the resulting multi-million polygon meshes for VR use in Unity.",
      result: "Exhibited at cultural fairs, bringing ancient history to life for non-expert audiences."
    }
  },
  {
    title: "Out of Here",
    description: "A space exploration-themed card game where players try to save humanity by finding a new planet as Earth faces collapse.",
    type: "Boardgame",
    link: "#",
    icon: Dices,
    tags: ["Tabletop", "Strategy", "Space"],
    image: "images/OOH.jpg",
    caseStudy: {
      challenge: "Distilling complex space mechanics into an accessible card-based strategy game.",
      role: "Game Designer & Illustrator",
      solution: "Focused on an 'emergent narrative' approach where card interactions tell a story of desperate survival.",
      result: "Prototype testing showed high engagement and 'one-more-round' appeal."
    }
  },
  {
    title: "Water System for Unity",
    description: "A custom water shader and buoyancy system developed for low-poly environments in Unity.",
    type: "Research",
    link: "#",
    icon: FlaskConical,
    tags: ["Unity", "Shaders", "Optimized"],
    image: "images/WS.jpg",
    caseStudy: {
      challenge: "Creating realistic water effects using minimal performance overhead on mobile VR.",
      role: "Shader Developer",
      solution: "Wrote custom HLSL shaders focusing on vertex displacement and depth-based color blending.",
      result: "Used internally at CRS4 for various nautical simulation projects."
    }
  },
  {
    title: "Tree System / Terrain Gen",
    description: "Algorithmic placement and growth system for large-scale forest environments in Unity.",
    type: "Research",
    link: "#",
    icon: Cpu,
    tags: ["Unity", "Procedural", "Optimization"],
    image: "images/TS.jpg",
    caseStudy: {
      challenge: "Managing thousands of unique tree instances while maintaining high frame rates in VR.",
      role: "Unity Developer",
      solution: "Implemented GPU instancing and distance-based growth logic for efficient large-scale environment management.",
      result: "Significantly reduced draw calls in research environment prototypes."
    }
  }
];

export const SKILLS = [
  { 
    name: "Coding", 
    category: "Language", 
    level: 3, 
    description: "Multidisciplinary technical architecture and core logic systems. Bridging high-level game engines with low-level hardware control.",
    connections: ["C#", "Javascript", "Python", "C++", "Robotics"]
  },
  { 
    name: "Unity", 
    category: "Engine", 
    level: 3, 
    description: "Primary development engine since 2017. Expert in 3D environments, URP/HDRP, and real-time simulations.",
    connections: ["C#", "XR", "3D Modeling"]
  },
  { 
    name: "C#", 
    category: "Language", 
    level: 3, 
    description: "Main programming language for Unity. Advanced knowledge of OOP, async patterns, and Unity API optimization.",
    connections: ["Photon", "Unity"]
  },
  { 
    name: "3D Modeling", 
    category: "3D", 
    level: 2, 
    description: "Creation of optimized assets for real-time applications. High-to-low poly workflows.",
    connections: ["Blender", "3DF Zephyr"]
  },
  { 
    name: "XR", 
    category: "XR", 
    level: 2, 
    description: "Immersive development for Meta Quest, Oculus, and SteamVR platforms.",
    connections: ["Meta Quest", "Oculus", "Steam VR"]
  },
  { 
    name: "Robotics", 
    category: "Robotics", 
    level: 2, 
    description: "Developing bridges between virtual environments and physical hardware assistants.",
    connections: ["ROS", "Arduino"]
  },
  { name: "Blender", category: "3D", level: 1, description: "Main tool for 3D modeling and UV unwrapping." },
  { name: "Meta Quest", category: "XR", level: 1, description: "Standalone VR development specialist." },
  { name: "Oculus", category: "XR", level: 1, description: "PC-VR development using Oculus SDK." },
  { name: "Steam VR", category: "XR", level: 1, description: "Cross-platform VR experiences." },
  { name: "ROS", category: "Robotics", level: 1, description: "Robot Operating System for hardware-software orchestration." },
  { name: "Arduino", category: "Hardware", level: 1, description: "Microcontroller interface for physical sensors and actuators." },
  { name: "Photon", category: "Network", level: 1, description: "Multiplayer synchronization and networking." },
  { name: "Javascript", category: "Language", level: 1, description: "Web-based interactive experiences and tools." },
  { name: "Python", category: "Language", level: 1, description: "Data processing and automation scripts." },
  { name: "C++", category: "Language", level: 1, description: "Low-level optimization and ROS development." },
  { name: "Vuforia", category: "AR", level: 1, description: "Augmented Reality solutions for mobile and glasses." },
  { name: "3DF Zephyr", category: "Photogrammetry", level: 1, description: "High-precision 3D reconstruction from photos." }
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/federico-bachis-85a59589/", icon: Linkedin },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCoM9RhYgW0QPT8xZ3QVgLUQ", icon: Youtube },
  { name: "Instagram", url: "https://www.instagram.com/federyuk91/", icon: Instagram },
  { name: "Facebook", url: "https://www.facebook.com/Federyuk/", icon: Facebook },
];
