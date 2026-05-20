import { ProjectTextMap } from '../projectTypes';

export const projectTextEn: ProjectTextMap = {
  goodnightPotion: {
    title: "Goodnight Potion",
    type: "Videogame",
    description: "Embark on a magical journey in an immersive single-player puzzle game where the life of a powerful mage depends on nightly potions. Originally created during Mini Jam 103: Darkness and later expanded with additional content updates on itch.io. Game available for Web, Desktop and Android!",
    caseStudy: {
      challenge: "Creating a compelling puzzle mechanic that balances simplicity with deep strategy using limited resources.",
      role: "Lead Developer and Game Designer",
      solution: "Developed a tile-based movement system where potion consumption order matters, using Unity's 2D engine and custom pathfinding logic.",
      result: "Released on itch.io for Web, Desktop and Android with multiple post-launch updates, achievements and leaderboard support."
    }
  },
  distordi: {
    title: "Distordi (aka Distorted Memories)",
    type: "Videogame",
    description: "A 3D third-person multiplayer puzzle game. Originally developed for the Global Game Jam and sponsored by Photon. You all lived in the same neighborhood and that fast food joint was your hangout. You come back to the place after many years and find all your memories of the past... Memories and stories are AI-generated (images and text).",
    caseStudy: {
      challenge: "Synchronizing complex puzzle states across multiple players in a 3D environment while integrating generative content.",
      role: "Full Stack Developer (Unity + Photon)",
      solution: "Implemented Photon Bolt for networking and custom API bridges to handle AI-generated clue injection during gameplay.",
      result: "Experimental multiplayer experience centered around AI-generated memories, collaborative exploration and narrative interaction."
    }
  },
  myStupidBigFamily: {
    title: "MyStupidBigFamily",
    type: "Videogame",
    description: "Developed for the Global Game Jam 2021. You temporarily lost your memory after a car crash, nothing serious but you are hospitalized. Your family is full of funny and a bit stupid people that, instead of worrying about your condition, decide to fool you texting you under fake identities. You can use your virtual phone to chat with your family and friends or even play some music. Will you be able to find out who's lying and who's telling the truth? How many of the fourteen suspects will you place correctly? Put your investigation abilities to the test with this soft thriller without any crime involved!",
    caseStudy: {
      challenge: "Implementing a complex AI behavior system for family members within a strict 48-hour time limit.",
      role: "Lead Developer",
      solution: "Used simple state machines and priority-based task allocation to simulate realistic member interactions.",
      result: "Successfully completed for the jam with positive ratings for humor and style."
    }
  },
  treeOfHeroes: {
    title: "Tree of Heroes",
    type: "Videogame",
    description: "A game about lineages of hero families. The game is a metaphor for the life of heroes, where their life is seen as a series of challenges of charisma, strength, luck and bravery. Your role is to choose which challenges to face. At the end of the challenges, two heroes meet and give birth to new heroes who inherit some traits and start the next level.",
    caseStudy: {
      challenge: "Designing a lineage-based progression system where inherited traits meaningfully affect future generations.",
      role: "Game Designer and Developer",
      solution: "Iterated through multiple balancing passes on the resource cost and combat mechanics during the jam.",
      result: "Ranked well in the Jam category for innovation and theme integration."
    }
  },
  digitalTwins: {
    title: "Digital Twins for Cultural Heritage",
    type: "Research",
    description: "Research and development of interactive digital twin systems for museums and cultural heritage environments within the IDEALIA project.",
    caseStudy: {
      challenge: "Accurately representing real-world museum environments while maintaining high performance for web and mobile VR browsers.",
      role: "Research Technologist at CRS4",
      solution: "Created custom shaders and LOD (Level of Detail) systems in Unity to handle high-fidelity photogrammetry models efficiently.",
      result: "Adopted as a foundation for interactive virtual museum experiences and digital heritage exploration."
    }
  },
  conversationalNPC: {
    title: "Conversational NPC Tourist Guide in VR",
    type: "Publications",
    description: "IEEE publication focused on conversational virtual agents in immersive VR environments for cultural heritage guidance, analyzing user engagement, spatial behavior and information retention.",
    journal: "IEEE Xplore",
    pubDate: "Published: Nov 2021",
    paperSubtitle: "CONVERSATIONAL AGENT",
    caseStudy: {
      challenge: "Evaluating spatial and conversational interaction parameters within full-presence headsets to establish meaningful cultural-tourist interaction metrics.",
      role: "Co-Author and Lead XR Developer",
      solution: "Engineered the direct speech interface, directional animation controllers, and state tree trackers coordinating the virtual NPC within a complete 3D VR heritage rendering.",
      result: "Peer-reviewed publication highlighting improved engagement, spatial orientation and information retention in immersive guided experiences."
    }
  },
  rossana: {
    title: "Rossana / Patented Robotic Assistant System",
    type: "Publications",
    description: "International WIPO patent describing an anthropomorphic robotic assistant system for autonomous visitor guidance in public spaces, integrating ROS, virtual avatars and interactive behaviors.",
    journal: "WIPO Patents (PCT)",
    pubDate: "Published: Apr 2023",
    paperSubtitle: "ROBOTIC SYSTEM PATENT",
    caseStudy: {
      challenge: "Bridging physical robotic navigation (ROS) and real-time human micro-interactions using highly expressive 3D physical avatars.",
      role: "Co-Inventor and System Architect",
      solution: "Designed and patented an interactive hardware-software orchestrator that binds high-level Unity behaviors, websocket events, ROS, and microcontrollers.",
      result: "International patent publication validated through public-space testing scenarios involving autonomous visitor interaction workflows."
    }
  },
  fireEvacuation: {
    title: "Behavioral Models for Fire Evacuation Simulations in Unity",
    type: "Publications",
    description: "SAGE research publication on utilizing the Unity ML-Agents toolkit to model the behavior of individuals evacuating from indoor fires. Investigates reinforcement learning for human-like crisis locomotion and navigation.",
    journal: "SAGE / SIMULATION",
    pubDate: "Published: May 2026",
    paperSubtitle: "EVACUATION SIMULATION",
    caseStudy: {
      challenge: "Simulating plausible, realistic human behavior under high stress and panic inside complex indoor layouts.",
      role: "Co-Author & ML Simulation Engineer",
      solution: "Trained multi-agent reinforcement learning behavior trees using Unity ML-Agents with perception cameras and social forces parameters.",
      result: "Research framework demonstrating the viability of reinforcement learning for simulating crowd behavior during emergency evacuations."
    }
  },
  sarim: {
    title: "Sarim",
    type: "Research",
    description: "Immersive HTC Vive VR experience focused on the digitization and exploration of Sardinian cultural heritage through photogrammetry and real-time rendering.",
    caseStudy: {
      challenge: "Capturing and digitizing large-scale archaeological sites with millimetric precision for an immersive VR setting.",
      role: "VR Developer and Photographer",
      solution: "Used 3DF Zephyr for photogrammetry and optimized the resulting multi-million polygon meshes for VR use in Unity.",
      result: "Exhibited at cultural fairs, bringing ancient history to life for non-expert audiences."
    }
  },
  outOfHere: {
    title: "Out of Here",
    type: "Boardgame",
    description: "A space exploration-themed card game where players try to save humanity by finding a new planet as Earth faces collapse.",
    caseStudy: {
      challenge: "Distilling complex space mechanics into an accessible card-based strategy game.",
      role: "Game Designer & Illustrator",
      solution: "Focused on an 'emergent narrative' approach where card interactions tell a story of desperate survival.",
      result: "Prototype playtests highlighted strong replayability and consistent player engagement across multiple sessions."
    }
  },
  pinguini: {
    title: "Pinguini alla Deriva",
    type: "Boardgame",
    description: "A turn-based browser board game where players manage penguin colonies across drifting icebergs, balancing movement, survival and territorial control.",
    caseStudy: {
      challenge: "Creating a balanced turn-based strategy game that works seamlessly in the browser with real-time updates.",
      role: "Lead Developer",
      solution: "Developed a custom state management system to handle turns and ice movement logic efficiently.",
      result: "Playable browser prototype featuring strategic movement systems and dynamic environmental interactions."
    }
  },
  wurmSlayer: {
    title: "Wurm Slayer",
    type: "Videogame",
    description: "A fast-paced survival game where the character is eaten by a worm. Players must avoid or destroy obstacles inside the stomach to survive levels that last about 60 seconds.",
    caseStudy: {
      challenge: "Creating a high-pressure environment with procedural obstacle generation that fits a mobile-friendly 1-minute loop.",
      role: "Game Developer",
      solution: "Implemented a custom buoyancy and gravity system to simulate being inside a stomach, with object pooling for obstacles.",
      result: "Fast-paced gameplay prototype developed to explore responsive feedback systems and survival-oriented mechanics."
    }
  },
  trafficSystem: {
    title: "Traffic System / City Gen",
    type: "Research",
    description: "A simulation of traffic and traffic light management in a city center. Algorithmic placement and growth system for complex urban environments.",
    caseStudy: {
      challenge: "Managing thousands of unique vehicle instances and complex traffic light logic while maintaining high performance.",
      role: "System Architect and Lead Developer",
      solution: "Implemented discrete event simulation for traffic lights and GPU instancing for vehicle rendering.",
      result: "Simulation prototype used as a technical foundation for urban traffic visualization and experimentation."
    }
  }
};
