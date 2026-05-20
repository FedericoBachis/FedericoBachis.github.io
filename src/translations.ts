
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
  Terminal, 
  Globe,
  BookOpen
} from 'lucide-react';
import gnpImg from './imgs/GNP.png';
import distordiImg from './imgs/Distordi.jpg';
import msbfImg from './imgs/MSBF.jpg';
import htImg from './imgs/HT.jpg';
import idealiaImg from './imgs/Idealia.jpg';
import sarimImg from './imgs/Sarim.jpg';
import oohImg from './imgs/OOH.jpg';
import wsImg from './imgs/WS.jpg';
import tsImg from './imgs/TS.jpg';
import rossanaGif from './imgs/Rossana.gif';
import pinguiniImg from './imgs/pinguini.png';

export type Language = 'en' | 'it';

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      description: "Unity Game Developer & Research Technologist"
    },
    about: {
      title: "Coding since 2017",
      experience: "Years",
      experience_label: "Experience",
      status: "STATUS: SENIOR_DEV",
      headline_main: "BRIDGING",
      headline_sub1: "GAMING",
      headline_sub2: "RESEARCH",
      minutes: "Minutes",
      months: "Months",
      days: "Days",
      hours: "Hours",
      bio1: "Indie **Game Developer** and **Unity Developer** since 2017.",
      bio2: "I specialize in **3D environment development**, human-robot interaction, and **gamification** for research applications. Currently, I work as a **Research Technologist** in Game-Based Interaction Systems at **CRS4**, bridging the gap between advanced research and **immersive user experiences**.",
      bio3: "I hold a degree in **Computer Science** from the University of Cagliari, with expertise in **scientific writing** and **technical software architecture**.",
      uplink: "Company Uplink",
      view_page: "View Page"
    },
    projects: {
      title: "Projects",
      subtitle: "Case Studies",
      view_demo: "View Demo",
      visit_site: "Visit Site",
      challenge: "Challenge",
      role: "Role",
      solution: "Solution",
      result: "Result",
      data: [
        {
          title: "Goodnight Potion",
          description: "Embark on a magical journey in an immersive single-player puzzle game where the life of a powerful mage depends on nightly potions. Originally created during Mini Jam 103: Darkness and later expanded with additional content updates on itch.io. Game available for Web, Desktop and Android!",
          type: "Videogame",
          link: "https://creative-lizards.itch.io/goodnight-potion",
          demoLink: "https://creative-lizards.itch.io/goodnight-potion",
          pubYear: "2022",
          icon: Gamepad2,
          tags: ["Unity", "2D", "Puzzle"],
          image: gnpImg,
          caseStudy: {
            challenge: "Creating a compelling puzzle mechanic that balances simplicity with deep strategy using limited resources.",
            role: "Lead Developer and Game Designer",
            solution: "Developed a tile-based movement system where potion consumption order matters, using Unity's 2D engine and custom pathfinding logic.",
            result: "Released on itch.io for Web, Desktop and Android with multiple post-launch updates, achievements and leaderboard support."
          }
        },
        {
          title: "Distordi (aka Distorted Memories)",
          description: "A 3D third-person multiplayer puzzle game. Originally developed for the Global Game Jam and sponsored by Photon. You all lived in the same neighborhood and that fast food joint was your hangout. You come back to the place after many years and find all your memories of the past... Memories and stories are AI-generated (images and text).",
          type: "Videogame",
          link: "https://federyuk91.itch.io/distordi",
          demoLink: "https://federyuk91.itch.io/distordi",
          pubYear: "2026",
          icon: Gamepad2,
          tags: ["Unity", "3D", "Multiplayer", "AI"],
          image: distordiImg,
          caseStudy: {
            challenge: "Synchronizing complex puzzle states across multiple players in a 3D environment while integrating generative content.",
            role: "Full Stack Developer (Unity + Photon)",
            solution: "Implemented Photon Bolt for networking and custom API bridges to handle AI-generated clue injection during gameplay.",
            result: "Experimental multiplayer experience centered around AI-generated memories, collaborative exploration and narrative interaction."
          }
        },
        {
          title: "MyStupidBigFamily",
          description: "Developed for the Global Game Jam 2021. You temporarily lost your memory after a car crash, nothing serious but you are hospitalized. Your family is full of funny and a bit stupid people that, instead of worrying about your condition, decide to fool you texting you under fake identities. You can use your virtual phone to chat with your family and friends or even play some music. Will you be able to find out who's lying and who's telling the truth? How many of the fourteen suspects will you place correctly? Put your investigation abilities to the test with this soft thriller without any crime involved!",
          type: "Videogame",
          link: "https://federyuk91.itch.io/mystupidbigfamily",
          demoLink: "https://federyuk91.itch.io/mystupidbigfamily",
          pubYear: "2021",
          icon: Gamepad2,
          tags: ["Unity", "Ludum Dare", "Simulation"],
          image: msbfImg,
          caseStudy: {
            challenge: "Implementing a complex AI behavior system for family members within a strict 48-hour time limit.",
            role: "Lead Developer",
            solution: "Used simple state machines and priority-based task allocation to simulate realistic member interactions.",
            result: "Successfully completed for the jam with positive ratings for humor and style."
          }
        },
        {
          title: "Tree of Heroes",
          description: "A game about lineages of hero families. The game is a metaphor for the life of heroes, where their life is seen as a series of challenges of charisma, strength, luck and bravery. Your role is to choose which challenges to face. At the end of the challenges, two heroes meet and give birth to new heroes who inherit some traits and start the next level.",
          type: "Videogame",
          link: "https://federyuk91.itch.io/heroess-tree",
          demoLink: "https://federyuk91.itch.io/heroess-tree",
          pubYear: "2020",
          icon: Gamepad2,
          tags: ["Unity", "Strategy", "Lineage", "Roguelite"],
          image: htImg,
          caseStudy: {
            challenge: "Designing a lineage-based progression system where inherited traits meaningfully affect future generations.",
            role: "Game Designer and Developer",
            solution: "Iterated through multiple balancing passes on the resource cost and combat mechanics during the jam.",
            result: "Ranked well in the Jam category for innovation and theme integration."
          }
        },
        {
          title: "Digital Twins for Cultural Heritage",
          description: "Research and development of interactive digital twin systems for museums and cultural heritage environments within the IDEALIA project.",
          type: "Research",
          link: "https://www.crs4.it/it/projectdetails/IDEALIA/",
          pubYear: "2026",
          icon: FlaskConical,
          tags: ["Digital Twins", "Unity", "Heritage"],
          image: idealiaImg,
          caseStudy: {
            challenge: "Accurately representing real-world museum environments while maintaining high performance for web and mobile VR browsers.",
            role: "Research Technologist at CRS4",
            solution: "Created custom shaders and LOD (Level of Detail) systems in Unity to handle high-fidelity photogrammetry models efficiently.",
            result: "Adopted as a foundation for interactive virtual museum experiences and digital heritage exploration."
          }
        },
        {
          title: "Conversational NPC Tourist Guide in VR",
          description: "IEEE publication focused on conversational virtual agents in immersive VR environments for cultural heritage guidance, analyzing user engagement, spatial behavior and information retention.",
          type: "Publications",
          link: "https://ieeexplore.ieee.org/document/9604871",
          demoLink: "https://ieeexplore.ieee.org/document/9604871",
          icon: BookOpen,
          tags: ["IEEE", "Research Paper", "AI / NPCs", "Immersive VR"],
          image: "paper",
          isPaper: true,
          journal: "IEEE Xplore",
          pubYear: "2021",
          pubDate: "Published: Nov 2021",
          doi: "10.1109/9604871",
          authors: "Federico Bachis, et al.",
          paperSubtitle: "CONVERSATIONAL AGENT",
          caseStudy: {
            challenge: "Evaluating spatial and conversational interaction parameters within full-presence headsets to establish meaningful cultural-tourist interaction metrics.",
            role: "Co-Author and Lead XR Developer",
            solution: "Engineered the direct speech interface, directional animation controllers, and state tree trackers coordinating the virtual NPC within a complete 3D VR heritage rendering.",
            result: "Peer-reviewed publication highlighting improved engagement, spatial orientation and information retention in immersive guided experiences."
          }
        },
        {
          title: "Rossana / Patented Robotic Assistant System",
          description: "International WIPO patent describing an anthropomorphic robotic assistant system for autonomous visitor guidance in public spaces, integrating ROS, virtual avatars and interactive behaviors.",
          type: "Publications",
          link: "https://patentimages.storage.googleapis.com/f2/e7/e3/bcf1a713448e07/WO2023053048A1.pdf",
          demoLink: "https://patentimages.storage.googleapis.com/f2/e7/e3/bcf1a713448e07/WO2023053048A1.pdf",
          icon: BookOpen,
          tags: ["WIPO Patent", "Intellectual Property", "Human-Robot Interaction", "MTR Block"],
          image: "paper",
          isPaper: true,
          journal: "WIPO Patents (PCT)",
          pubYear: "2023",
          pubDate: "Published: Apr 2023",
          doi: "WO2023053048A1 / WO2023/053048 A1",
          authors: "Federico Bachis, Marco Massa, Gavin Brelstaff, Massimo Deriu",
          paperSubtitle: "ROBOTIC SYSTEM PATENT",
          caseStudy: {
            challenge: "Bridging physical robotic navigation (ROS) and real-time human micro-interactions using highly expressive 3D physical avatars.",
            role: "Co-Inventor and System Architect",
            solution: "Designed and patented an interactive hardware-software orchestrator that binds high-level Unity behaviors, websocket events, ROS, and microcontrollers.",
            result: "International patent publication validated through public-space testing scenarios involving autonomous visitor interaction workflows."
          }
        },
        {
          title: "Behavioral Models for Fire Evacuation Simulations in Unity",
          description: "SAGE research publication on utilizing the Unity ML-Agents toolkit to model the behavior of individuals evacuating from indoor fires. Investigates reinforcement learning for human-like crisis locomotion and navigation.",
          type: "Publications",
          link: "https://journals.sagepub.com/doi/10.1177/00375497261428103",
          demoLink: "https://journals.sagepub.com/doi/10.1177/00375497261428103",
          icon: BookOpen,
          tags: ["SAGE", "ML-Agents", "Evacuation AI", "Research Paper"],
          image: "paper",
          isPaper: true,
          journal: "SAGE / SIMULATION",
          pubYear: "2026",
          pubDate: "Published: May 2026",
          doi: "10.1177/00375497261428103",
          authors: "Marco Massa, Federico Bachis, Gavin Brelstaff, Massimo Deriu",
          paperSubtitle: "EVACUATION SIMULATION",
          caseStudy: {
            challenge: "Simulating plausible, realistic human behavior under high stress and panic inside complex indoor layouts.",
            role: "Co-Author & ML Simulation Engineer",
            solution: "Trained multi-agent reinforcement learning behavior trees using Unity ML-Agents with perception cameras and social forces parameters.",
            result: "Research framework demonstrating the viability of reinforcement learning for simulating crowd behavior during emergency evacuations."
          }
        },
        {
          title: "Sarim",
          description: "Immersive HTC Vive VR experience focused on the digitization and exploration of Sardinian cultural heritage through photogrammetry and real-time rendering.",
          type: "Research",
          link: "https://www.youtube.com/watch?v=lBzVPqVZsJg&list=PLYxmg_Vzg9K8eA1Gr4uv4nu6H0WeM9ZXi",
          videoUrl: "https://www.youtube.com/embed/lBzVPqVZsJg",
          pubYear: "2018",
          icon: Box,
          tags: ["VR", "Photogrammetry", "History"],
          image: sarimImg,
          caseStudy: {
            challenge: "Capturing and digitizing large-scale archaeological sites with millimetric precision for an immersive VR setting.",
            role: "VR Developer and Photographer",
            solution: "Used 3DF Zephyr for photogrammetry and optimized the resulting multi-million polygon meshes for VR use in Unity.",
            result: "Exhibited at cultural fairs, bringing ancient history to life for non-expert audiences."
          }
        },
        {
          title: "Out of Here",
          description: "A space exploration-themed card game where players try to save humanity by finding a new planet as Earth faces collapse.",
          type: "Boardgame",
          link: "#",
          pubYear: "2023",
          icon: Dices,
          tags: ["Tabletop", "Strategy", "Space"],
          image: oohImg,
          caseStudy: {
            challenge: "Distilling complex space mechanics into an accessible card-based strategy game.",
            role: "Game Designer & Illustrator",
            solution: "Focused on an 'emergent narrative' approach where card interactions tell a story of desperate survival.",
            result: "Prototype playtests highlighted strong replayability and consistent player engagement across multiple sessions."
          }
        },
        {
          title: "Pinguini alla Deriva",
          description: "A turn-based browser board game where players manage penguin colonies across drifting icebergs, balancing movement, survival and territorial control.",
          type: "Boardgame",
          link: "https://pinguini-alla-deriva-446895826488.europe-west2.run.app/",
          pubYear: "2026",
          icon: Dices,
          tags: ["Web", "Strategy", "Multiplayer"],
          image: pinguiniImg,
          caseStudy: {
            challenge: "Creating a balanced turn-based strategy game that works seamlessly in the browser with real-time updates.",
            role: "Lead Developer",
            solution: "Developed a custom state management system to handle turns and ice movement logic efficiently.",
            result: "Playable browser prototype featuring strategic movement systems and dynamic environmental interactions."
          }
        },
        {
          title: "Wurm Slayer",
          description: "A fast-paced survival game where the character is eaten by a worm. Players must avoid or destroy obstacles inside the stomach to survive levels that last about 60 seconds.",
          type: "Videogame",
          link: "#",
          pubYear: "2023",
          icon: FlaskConical,
          tags: ["Unity", "Action", "Survival"],
          image: wsImg,
          caseStudy: {
            challenge: "Creating a high-pressure environment with procedural obstacle generation that fits a mobile-friendly 1-minute loop.",
            role: "Game Developer",
            solution: "Implemented a custom buoyancy and gravity system to simulate being inside a stomach, with object pooling for obstacles.",
            result: "Fast-paced gameplay prototype developed to explore responsive feedback systems and survival-oriented mechanics."
          }
        },
        {
          title: "Traffic System / City Gen",
          description: "A simulation of traffic and traffic light management in a city center. Algorithmic placement and growth system for complex urban environments.",
          type: "Research",
          link: "#",
          pubYear: "2022",
          icon: Cpu,
          tags: ["Unity", "Simulation", "AI", "Urban"],
          image: tsImg,
          caseStudy: {
            challenge: "Managing thousands of unique vehicle instances and complex traffic light logic while maintaining high performance.",
            role: "System Architect and Lead Developer",
            solution: "Implemented discrete event simulation for traffic lights and GPU instancing for vehicle rendering.",
            result: "Simulation prototype used as a technical foundation for urban traffic visualization and experimentation."
          }
        }
      ]
    },
    skills_data: [
      { name: "Coding", level: 3, category: "Language", description: "Multidisciplinary technical architecture and core logic systems. Bridging high-level game engines with low-level hardware control.", connections: ["C#", "Javascript", "Python", "C++", "Robotics"] },
      { name: "Unity", level: 3, category: "Engine", description: "Primary development engine since 2017. Expert in 3D environments, URP/HDRP, and real-time simulations.", connections: ["C#", "XR", "3D Modeling"] },
      { name: "C#", level: 3, category: "Language", description: "Main programming language for Unity. Advanced knowledge of OOP, async patterns, and Unity API optimization.", connections: ["Photon", "Unity"] },
      { name: "3D Modeling", level: 2, category: "3D", description: "Creation of optimized assets for real-time applications. High-to-low poly workflows.", connections: ["Blender", "3DF Zephyr"] },
      { name: "XR", level: 2, category: "XR", description: "Immersive development for Meta Quest, Oculus, and SteamVR platforms.", connections: ["Meta Quest", "Oculus", "Steam VR"] },
      { name: "Robotics", level: 2, category: "Robotics", description: "Developing bridges between virtual environments and physical hardware assistants.", connections: ["ROS", "Arduino"] },
      { name: "Blender", level: 1, category: "3D", description: "Main tool for 3D modeling and UV unwrapping." },
      { name: "Meta Quest", level: 1, category: "XR", description: "Standalone VR development specialist." },
      { name: "Oculus", level: 1, category: "XR", description: "PC-VR development using Oculus SDK." },
      { name: "Steam VR", level: 1, category: "XR", description: "Cross-platform VR experiences." },
      { name: "ROS", level: 1, category: "Robotics", description: "Robot Operating System for hardware-software orchestration." },
      { name: "Arduino", level: 1, category: "Hardware", description: "Microcontroller interface for physical sensors and actuators." },
      { name: "Photon", level: 1, category: "Network", description: "Multiplayer synchronization and networking." },
      { name: "Javascript", level: 1, category: "Language", description: "Web-based interactive experiences and tools." },
      { name: "Python", level: 1, category: "Language", description: "Data processing and automation scripts." },
      { name: "C++", level: 1, category: "Language", description: "Low-level optimization and ROS development." },
      { name: "Vuforia", level: 1, category: "AR", description: "Augmented Reality solutions for mobile and glasses." },
      { name: "3DF Zephyr", level: 1, category: "Photogrammetry", description: "High-precision 3D reconstruction from photos." }
    ],
    skills: {
      title: "Skill Progression",
      tech_tree: "Tech_Tree",
      sync: "Neural Network Sync: 100%",
      proficiency: "Proficiency",
      optimized: "OPTIMIZED",
      connections: "Connections",
      legend_tier3: "Tier 03",
      legend_tier3_desc: "Core Mastery",
      legend_tier2: "Tier 02",
      legend_tier2_desc: "Advanced Spec",
      legend_tier1: "Tier 01",
      legend_tier1_desc: "Foundation",
      select_nodes: "Select Nodes for Bio"
    },
    contact: {
      title: "Transmission",
      subtitle: "Contact",
      header_line1: "Let's Build",
      header_line2: "Something",
      header_line3: "Immersive",
      description: "Whether you have a specific project in mind or just want to discuss the future of game-based interaction systems, my door is always open.",
      button: "SAY HELLO",
      response_time: "Response time: ~24-48 hours"
    },
    footer: {
      rights: "All Right Reversed",
      location: "Sardinia, IT"
    }
  },
  it: {
    nav: {
      about: "Chi Sono",
      projects: "Progetti",
      skills: "Competenze",
      contact: "Contatti"
    },
    hero: {
      greeting: "Ciao, sono",
      description: "Sviluppatore Unity & Tecnologo di ricerca"
    },
    about: {
      title: "Coding since 2017",
      experience: "Anni",
      experience_label: "Esperienza",
      status: "STATO: SENIOR_DEV",
      headline_main: "UNIRE",
      headline_sub1: "GAMING",
      headline_sub2: "RICERCA",
      minutes: "Minuti",
      months: "Mesi",
      days: "Giorni",
      hours: "Ore",
      bio1: "Indie **Game Developer** e **Unity Developer** dal 2017.",
      bio2: "Mi occupo di **sviluppo di ambienti 3D**, interazione uomo-robot e **gamification** per applicazioni di ricerca. Attualmente lavoro come **Tecnologo della Ricerca** in Sistemi di Interazione basati sui giochi presso il **CRS4**, unendo ricerca avanzata e **user experience immersive**.",
      bio3: "Sono laureato in **Informatica** presso l'Università di Cagliari, con competenze in **scrittura scientifica** e **architettura software tecnica**.",
      uplink: "Link Aziendale",
      view_page: "Vedi Pagina"
    },
    projects: {
      title: "Progetti",
      subtitle: "Casi Studio",
      view_demo: "Vedi Demo",
      visit_site: "Visita Sito",
      challenge: "Sfida",
      role: "Ruolo",
      solution: "Soluzione",
      result: "Risultato",
      data: [
        {
          title: "Goodnight Potion",
          description: "🌙 Intraprendi un viaggio magico in un coinvolgente puzzle game single-player in cui la vita di un potente mago dipende dalle sue pozioni notturne. Creato originariamente durante la Mini Jam 103: Darkness e successivamente ampliato con aggiornamenti e nuovi contenuti su itch.io. Gioco disponibile per Web, Desktop e Android!",
          type: "Videogioco",
          link: "https://creative-lizards.itch.io/goodnight-potion",
          demoLink: "https://creative-lizards.itch.io/goodnight-potion",
          pubYear: "2022",
          icon: Gamepad2,
          tags: ["Unity", "2D", "Puzzle"],
          image: gnpImg,
          caseStudy: {
            challenge: "Creare una meccanica di gioco avvincente che bilanci semplicità e strategia profonda con risorse limitate.",
            role: "Lead Developer and Game Designer",
            solution: "Sviluppato un sistema di movimento a griglia dove l'ordine di consumo delle pozioni è fondamentale, usando Unity 2D e logica di pathfinding personalizzata.",
            result: "Pubblicato su itch.io per Web, Desktop e Android con feedback positivi su struttura dei puzzle e progressione del gameplay."
          }
        },
        {
          title: "Distordi (aka Ricordi Distorti)",
          description: "Un puzzle game multiplayer 3D in terza persona. Sviluppato per la Global Game Jam e sponsorizzato da Photon. Vivevate tutti nello stesso quartiere e quel fast food era il vostro ritrovo. Ritorni nel luogo dopo molti anni e ritrovi tutti i tuoi ricordi del passato... I ricordi e le storie sono generati da IA (immagini e testi).",
          type: "Videogioco",
          link: "https://federyuk91.itch.io/distordi",
          demoLink: "https://federyuk91.itch.io/distordi",
          pubYear: "2026",
          icon: Gamepad2,
          tags: ["Unity", "3D", "Multiplayer", "IA"],
          image: distordiImg,
          caseStudy: {
            challenge: "Sincronizzare stati di puzzle complessi tra più giocatori in ambiente 3D integrando contenuti generativi.",
            role: "Full Stack Developer (Unity + Photon)",
            solution: "Implementato Photon Bolt per il networking e bridge API personalizzati per l'iniezione degli indizi generati dall'IA.",
            result: "Esperienza multiplayer sperimentale basata su ricordi generati da IA, esplorazione collaborativa e interazione narrativa."
          }
        },
        {
          title: "MyStupidBigFamily",
          description: "Sviluppato per la Global Game Jam 2021. Hai temporaneamente perso la memoria dopo un incidente stradale, nulla di grave ma sei ricoverato. La tua famiglia è piena di persone divertenti e un po' stupide che, invece di preoccuparsi del tuo stato, decidono di farti fesso inviandoti messaggi sotto false identità. Puoi usare il tuo smartphone virtuale per chattare con famiglia e amici o persino riprodurre musica. Riuscirai a scoprire chi mente e chi dice la verità? Quanti dei quattordici sospetti saprai collocare correttamente? Metti alla prova le tue abilità investigative con questo thriller soft senza crimini!",
          type: "Videogioco",
          link: "https://federyuk91.itch.io/mystupidbigfamily",
          demoLink: "https://federyuk91.itch.io/mystupidbigfamily",
          pubYear: "2021",
          icon: Gamepad2,
          tags: ["Unity", "Ludum Dare", "Simulazione"],
          image: msbfImg,
          caseStudy: {
            challenge: "Implementare un sistema di comportamento IA complesso per i membri della famiglia entro un limite di 48 ore.",
            role: "Lead Developer",
            solution: "Usate macchine a stati semplici e allocazione dei compiti basata su priorità per simulare interazioni realistiche.",
            result: "Completato con successo per la jam con ottimi voti per umorismo e stile."
          }
        },
        {
          title: "Tree of Heroes",
          description: "Un gioco focalizzato sulle linee di discendenza di famiglie di eroi. Il gioco è una metafora della vita degli eroi, vista come una serie di sfide di carisma, forza, fortuna e coraggio. Il tuo ruolo è scegliere quali sfide affrontare. Al termine delle sfide, due eroi si incontrano e danno vita a nuovi eroi che erediteranno alcuni tratti di partenza ed inizieranno il livello successivo.",
          type: "Videogioco",
          link: "https://federyuk91.itch.io/heroess-tree",
          demoLink: "https://federyuk91.itch.io/heroess-tree",
          pubYear: "2020",
          icon: Gamepad2,
          tags: ["Unity", "Strategia", "Lineage", "Roguelite"],
          image: htImg,
          caseStudy: {
            challenge: "Progettare un sistema di progressione dinastica in cui i tratti ereditari influenzano concretamente le generazioni future.",
            role: "Game Designer and Developer",
            solution: "Effettuati molteplici passaggi di bilanciamento sui costi delle risorse e meccaniche di combattimento durante la jam.",
            result: "Ottimo posizionamento nella categoria Jam per innovazione e integrazione del tema."
          }
        },
        {
          title: "Digital Twins per i Beni Culturali",
          description: "Ricerca e sviluppo di sistemi di digital twin interattivi per musei e ambienti culturali nell'ambito del progetto IDEALIA.",
          type: "Ricerca",
          link: "https://www.crs4.it/it/projectdetails/IDEALIA/",
          pubYear: "2026",
          icon: FlaskConical,
          tags: ["Digital Twins", "Unity", "Heritage"],
          image: idealiaImg,
          caseStudy: {
            challenge: "Rappresentare accuratamente ambienti museali reali mantenendo alte prestazioni su browser web e VR mobile.",
            role: "Tecnologo della ricerca @ CRS4",
            solution: "Creati shader personalizzati e sistemi LOD (Level of Detail) in Unity per gestire modelli fotogrammetrici ad alta fedeltà.",
            result: "Utilizzato come base per esperienze museali virtuali e sistemi di esplorazione del patrimonio culturale."
          }
        },
        {
          title: "Conversational NPC Tourist Guide in VR",
          description: "Pubblicazione IEEE focalizzata su agenti conversazionali virtuali in ambienti VR immersivi per la guida culturale, con analisi di engagement, comportamento spaziale e memorizzazione delle informazioni.",
          type: "Pubblicazioni",
          link: "https://ieeexplore.ieee.org/document/9604871",
          demoLink: "https://ieeexplore.ieee.org/document/9604871",
          icon: BookOpen,
          tags: ["IEEE", "Paper Scientifico", "AI / NPC", "VR Immersiva"],
          image: "paper",
          isPaper: true,
          journal: "IEEE Xplore",
          pubYear: "2021",
          pubDate: "Pubblicato: Nov 2021",
          doi: "10.1109/9604871",
          authors: "Federico Bachis, et al.",
          paperSubtitle: "AGENTE CONVERSAZIONALE",
          caseStudy: {
            challenge: "Valutare l'usabilità complessiva e l'impatto cognitivo di un agente vocale che guida passeggeri e turisti all'interno di ambienti immersivi ad alta interattività.",
            role: "Co-Autore & Sviluppatore Lead XR",
            solution: "Sviluppato il sistema di audio spaziale, le routine di tracciamento e le macchine a stati decisionali del prototipo VR interamente integrato in Unity.",
            result: "La pubblicazione evidenzia un miglioramento dell'engagement, dell'orientamento spaziale e della memorizzazione delle informazioni in VR."
          }
        },
        {
          title: "Rossana / Sistema Robotico di Assistenza Brevettato",
          description: "Brevetto internazionale WIPO relativo a un sistema robotico antropomorfo per la guida autonoma dei visitatori in spazi pubblici, integrando ROS, avatar virtuali e comportamenti interattivi.",
          type: "Pubblicazioni",
          link: "https://patentimages.storage.googleapis.com/f2/e7/e3/bcf1a713448e07/WO2023053048A1.pdf",
          demoLink: "https://patentimages.storage.googleapis.com/f2/e7/e3/bcf1a713448e07/WO2023053048A1.pdf",
          icon: BookOpen,
          tags: ["Brevetto WIPO", "Proprietà Intellettuale", "Interazione Uomo-Robot"],
          image: "paper",
          isPaper: true,
          journal: "Brevetti WIPO (PCT)",
          pubYear: "2023",
          pubDate: "Pubblicato: Apr 2023",
          doi: "WO2023053048A1 / WO2023/053048 A1",
          authors: "Federico Bachis, Marco Massa, Gavin Brelstaff, Massimo Deriu",
          paperSubtitle: "BREVETTO SISTEMA ROBOTICO",
          caseStudy: {
            challenge: "Far comunicare in tempo reale motori fisici, sensoristica (ROS) ed espressioni mimiche tramite un avatar virtuale interattivo ad alta fedeltà.",
            role: "Co-Inventore & Architetto di Sistema",
            solution: "Progettazione e brevettazione di un orchestratore hardware-software che integra Unity via websocket con moduli ROS, sensori rotativi ed Arduino.",
            result: "Pubblicazione brevettuale internazionale validata tramite scenari di test pubblici dedicati all'interazione autonoma con i visitatori."
          }
        },
        {
          title: "Modelli di Comportamento per l'Evacuazione da Incendio in Unity",
          description: "Pubblicazione scientifica (SAGE / SIMULATION) sull'uso di Unity ML-Agents per modellare il comportamento di persone durante l'evacuazione da incendi indoor tramite apprendimento per rinforzo per una locomozione di crisi verosimile.",
          type: "Pubblicazioni",
          link: "https://journals.sagepub.com/doi/10.1177/00375497261428103",
          demoLink: "https://journals.sagepub.com/doi/10.1177/00375497261428103",
          icon: BookOpen,
          tags: ["SAGE", "ML-Agents", "IA Evacuazione", "Paper Scientifico"],
          image: "paper",
          isPaper: true,
          journal: "SAGE / SIMULATION",
          pubYear: "2026",
          pubDate: "Pubblicato: Mag 2026",
          doi: "10.1177/00375497261428103",
          authors: "Marco Massa, Federico Bachis, Gavin Brelstaff, Massimo Deriu",
          paperSubtitle: "SIMULAZIONE EVACUAZIONE",
          caseStudy: {
            challenge: "Simulare dinamiche credibili di panico e movimento umano in situazioni ad alto stress all'interno di planimetrie complesse.",
            role: "Co-Autore & Ingegnere di Simulazione ML",
            solution: "Addestramento di agenti tramite Deep Reinforcement Learning (ML-Agents) provvisti di sensori visivi e parametri di forza sociale.",
            result: "Framework di ricerca che dimostra la validità del reinforcement learning per la simulazione del comportamento collettivo durante evacuazioni."
          }
        },
        {
          title: "Sarim",
          description: "Esperienza VR immersiva per HTC Vive dedicata alla digitalizzazione e all'esplorazione del patrimonio culturale sardo tramite fotogrammetria e rendering realtime.",
          type: "Ricerca",
          link: "https://www.youtube.com/watch?v=lBzVPqVZsJg&list=PLYxmg_Vzg9K8eA1Gr4uv4nu6H0WeM9ZXi",
          videoUrl: "https://www.youtube.com/embed/lBzVPqVZsJg",
          pubYear: "2018",
          icon: Box,
          tags: ["VR", "Fotogrammetria", "Storia"],
          image: sarimImg,
          caseStudy: {
            challenge: "Catturare e digitalizzare siti archeologici su larga scala con precisione millimetrica per un ambiente VR immersivo.",
            role: "Sviluppatore VR e Fotografo",
            solution: "Usato 3DF Zephyr per la fotogrammetria e ottimizzate le mesh risultanti da milioni di poligoni per l'uso VR in Unity.",
            result: "Esposto a fiere culturali, portando la storia antica al grande pubblico."
          }
        },
        {
          title: "Out of Here",
          description: "Un gioco di carte a tema esplorazione spaziale in cui i giocatori cercano di salvare l'umanità mentre la Terra collassa.",
          type: "Boardgame",
          link: "#",
          pubYear: "2023",
          icon: Dices,
          tags: ["Tabletop", "Strategia", "Spazio"],
          image: oohImg,
          caseStudy: {
            challenge: "Distillare meccaniche spaziali complesse in un gioco di strategia di carte accessibile.",
            role: "Game Designer e Illustratore",
            solution: "Focus su un approccio di 'narrativa emergente' in cui le interazioni delle carte raccontano una storia di sopravvivenza.",
            result: "I playtest del prototipo hanno evidenziato buona rigiocabilità e coinvolgimento costante dei partecipanti."
          }
        },
        {
          title: "Pinguini alla Deriva",
          description: "Un board game browser-based a turni in cui i giocatori gestiscono colonie di pinguini su iceberg alla deriva, bilanciando movimento, sopravvivenza e controllo territoriale.",
          type: "Boardgame",
          link: "https://pinguini-alla-deriva-446895826488.europe-west2.run.app/",
          pubYear: "2026",
          icon: Dices,
          tags: ["Web", "Strategia", "Multiplayer"],
          image: pinguiniImg,
          caseStudy: {
            challenge: "Creare un gioco di strategia a turni bilanciato che funzioni senza problemi nel browser con aggiornamenti in tempo reale.",
            role: "Lead Developer",
            solution: "Sviluppato un sistema di gestione dello stato personalizzato per gestire turni e logica di movimento del ghiaccio.",
            result: "Prototipo browser-based giocabile con sistemi strategici di movimento e interazioni ambientali dinamiche."
          }
        },
        {
          title: "Wurm Slayer",
          description: "Un gioco di sopravvivenza frenetico dove il personaggio viene mangiato da un verme. I giocatori devono evitare o distruggere ostacoli nello stomaco.",
          type: "Videogioco",
          link: "#",
          pubYear: "2023",
          icon: FlaskConical,
          tags: ["Unity", "Azione", "Sopravvivenza"],
          image: wsImg,
          caseStudy: {
            challenge: "Creare un ambiente ad alta pressione con generazione procedurale di ostacoli che si adatti a un loop di 1 minuto.",
            role: "Sviluppatore di gioco",
            solution: "Implementato un sistema di galleggiamento e gravità personalizzato per simulare l'interno di uno stomaco, con object pooling.",
            result: "Prototipo action ad alta intensità sviluppato per sperimentare sistemi di feedback e meccaniche survival."
          }
        },
        {
          title: "Traffic System / City Gen",
          description: "Una simulazione del traffico e della gestione semaforica in un centro città. Sistema di crescita algoritmica per ambienti urbani complessi.",
          type: "Ricerca",
          link: "#",
          pubYear: "2022",
          icon: Cpu,
          tags: ["Unity", "Simulazione", "IA", "Urbano"],
          image: tsImg,
          caseStudy: {
            challenge: "Gestire migliaia di istanze di veicoli unici e logica semaforica complessa mantenendo prestazioni elevate.",
            role: "Architetto di sistema e Lead Developer",
            solution: "Implementata simulazione ad eventi discreti per i semafori e GPU instancing per il rendering dei veicoli.",
            result: "Prototipo di simulazione utilizzato come base tecnica per visualizzazioni e sperimentazioni sul traffico urbano."
          }
        }
      ]
    },
    skills_data: [
      { name: "Coding", level: 3, category: "Language", description: "Architettura tecnica multidisciplinare e sistemi di logica core. Collegamento tra game engine e hardware.", connections: ["C#", "Javascript", "Python", "C++", "Robotica"] },
      { name: "Unity", level: 3, category: "Engine", description: "Motore di sviluppo primario dal 2017. Esperto in ambienti 3D, URP/HDRP e simulazioni in tempo reale.", connections: ["C#", "XR", "Modellazione 3D"] },
      { name: "C#", level: 3, category: "Language", description: "Linguaggio principale per Unity. Conoscenza avanzata di OOP, pattern async e ottimizzazione API Unity.", connections: ["Photon", "Unity"] },
      { name: "Modellazione 3D", level: 2, category: "3D", description: "Creazione di asset ottimizzati per applicazioni in tempo reale. Workflow da high a low poly.", connections: ["Blender", "3DF Zephyr"] },
      { name: "XR", level: 2, category: "XR", description: "Sviluppo immersivo per piattaforme Meta Quest, Oculus e SteamVR.", connections: ["Meta Quest", "Oculus", "Steam VR"] },
      { name: "Robotica", level: 2, category: "Robotica", description: "Sviluppo di ponti tra ambienti virtuali e assistenti hardware fisici.", connections: ["ROS", "Arduino"] },
      { name: "Blender", level: 1, category: "3D", description: "Strumento principale per modellazione 3D e UV unwrapping." },
      { name: "Meta Quest", level: 1, category: "XR", description: "Specialista nello sviluppo VR standalone." },
      { name: "Oculus", level: 1, category: "XR", description: "Sviluppo PC-VR usando Oculus SDK." },
      { name: "Steam VR", level: 1, category: "XR", description: "Esperienze VR multi-piattaforma." },
      { name: "ROS", level: 1, category: "Robotica", description: "Robot Operating System per l'orchestrazione hardware-software." },
      { name: "Arduino", level: 1, category: "Hardware", description: "Interfaccia microcontrollore per sensori e attuatori fisici." },
      { name: "Photon", level: 1, category: "Network", description: "Sincronizzazione multiplayer e networking." },
      { name: "Javascript", level: 1, category: "Language", description: "Esperienze e strumenti interattivi basati sul web." },
      { name: "Python", level: 1, category: "Language", description: "Elaborazione dati e script di automazione." },
      { name: "C++", level: 1, category: "Language", description: "Ottimizzazione a basso livello e sviluppo ROS." },
      { name: "Vuforia", level: 1, category: "AR", description: "Soluzioni di Realtà Aumentata per mobile e occhiali." },
      { name: "3DF Zephyr", level: 1, category: "Photogrammetry", description: "Ricostruzione 3D ad alta precisione da foto." }
    ],
    skills: {
      title: "Progressione Competenze",
      tech_tree: "Albero_Tecnologico",
      sync: "Sincronia Rete Neurale: 100%",
      proficiency: "Competenza",
      optimized: "OTTIMIZZATO",
      connections: "Connessioni",
      legend_tier3: "Tier 03",
      legend_tier3_desc: "Maestria Core",
      legend_tier2: "Tier 02",
      legend_tier2_desc: "Spec. Avanzata",
      legend_tier1: "Tier 01",
      legend_tier1_desc: "Fondamenta",
      select_nodes: "Seleziona Nodi per Bio"
    },
    contact: {
      title: "Trasmissione",
      subtitle: "Contatti",
      header_line1: "Costruiamo",
      header_line2: "Qualcosa di",
      header_line3: "Immersivo",
      description: "Che tu abbia un progetto specifico in mente o voglia solo discutere il futuro dei sistemi di interazione basati sul gioco, la mia porta è sempre aperta.",
      button: "Contattami",
      response_time: "Tempo di risposta: ~24-48 ore"
    },
    footer: {
      rights: "Tutti i diritti rovesciati",
      location: "Sardegna, IT"
    }
  }
};
