
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
  Globe 
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
          description: "A 2D puzzle game where a wizard must finish all his potions before going to sleep. Features over 30 levels and an endless mode.",
          type: "Videogame",
          link: "https://creative-lizards.itch.io/goodnight-potion",
          demoLink: "https://creative-lizards.itch.io/goodnight-potion",
          icon: Gamepad2,
          tags: ["Unity", "2D", "Puzzle"],
          image: gnpImg,
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
          image: distordiImg,
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
          description: "A strategic game developed for Ludum Dare 36. Grow your tree of heroes and defend your realm against waves of enemies.",
          type: "Videogame",
          link: "https://federyuk91.itch.io/heroess-tree",
          demoLink: "https://federyuk91.itch.io/heroess-tree",
          icon: Gamepad2,
          tags: ["Unity", "Strategy", "Defense"],
          image: htImg,
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
          image: idealiaImg,
          caseStudy: {
            challenge: "Accurately representing real-world museum environments while maintaining high performance for web and mobile VR browsers.",
            role: "Research Technologist @ CRS4",
            solution: "Created custom shaders and LOD (Level of Detail) systems in Unity to handle high-fidelity photogrammetry models efficiently.",
            result: "Used by research institutions to provide virtual tours during lockdown periods."
          }
        },
        {
          title: "Rossana / Patented Robotic Assistant",
          description: "Anthropomorphic robotic assistant developed to guide visitors in library settings. Patented system for interactive robotic assistance (WO2023053048A1).",
          type: "Research",
          link: "https://patentimages.storage.googleapis.com/f2/e7/e3/bcf1a713448e07/WO2023053048A1.pdf",
          icon: Cpu,
          tags: ["Unity", "ROS", "Arduino", "Robotics"],
          image: rossanaGif,
          caseStudy: {
            challenge: "Creating a seamless communication bridge between a high-level game engine (Unity) and low-level robotics middleware (ROS).",
            role: "System Architect & Unity Developer",
            solution: "Developed a custom ROS-Unity bridge using WebSockets to send real-time sensor data and control motor commands via Arduino.",
            result: "Successfully deployed in a library pilot program with over 500 successful visitor interactions."
          }
        },
        {
          title: "Paper",
          description: "todo",
          type: "Research",
          link: "https://www.youtube.com/watch?v=lBzVPqVZsJg&list=PLYxmg_Vzg9K8eA1Gr4uv4nu6H0WeM9ZXi",
          videoUrl: "https://www.youtube.com/embed/lBzVPqVZsJg",
          icon: Box,
          tags: ["VR", "Photogrammetry", "History"],
          image: sarimImg,
          caseStudy: {
            challenge: ".....",
            role: "VR Developer & Photographer",
            solution: "Used 3DF Zephyr for photogrammetry and optimized the resulting multi-million polygon meshes for VR use in Unity.",
            result: "Exhibited at cultural fairs, bringing ancient history to life for non-expert audiences."
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
          image: sarimImg,
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
          image: oohImg,
          caseStudy: {
            challenge: "Distilling complex space mechanics into an accessible card-based strategy game.",
            role: "Game Designer & Illustrator",
            solution: "Focused on an 'emergent narrative' approach where card interactions tell a story of desperate survival.",
            result: "Prototype testing showed high engagement and 'one-more-round' appeal."
          }
        },
        {
          title: "Pinguini alla Deriva",
          description: "A fun and strategic web-based board game where players manage penguins on drifting ice floes. Developed by Federyuk91.",
          type: "Boardgame",
          link: "https://pinguini-alla-deriva-446895826488.europe-west2.run.app/",
          icon: Dices,
          tags: ["Web", "Strategy", "Multiplayer"],
          image: pinguiniImg,
          caseStudy: {
            challenge: "Creating a balanced turn-based strategy game that works seamlessly in the browser with real-time updates.",
            role: "Lead Developer",
            solution: "Developed a custom state management system to handle turns and ice movement logic efficiently.",
            result: "A polished web experience with engaging gameplay mechanics."
          }
        },
        {
          title: "Wurm Slayer",
          description: "A fast-paced survival game where the character is eaten by a worm. Players must avoid or destroy obstacles inside the stomach to survive levels that last about 60 seconds.",
          type: "Videogame",
          link: "#",
          icon: FlaskConical,
          tags: ["Unity", "Action", "Survival"],
          image: wsImg,
          caseStudy: {
            challenge: "Creating a high-pressure environment with procedural obstacle generation that fits a mobile-friendly 1-minute loop.",
            role: "Game Developer",
            solution: "Implemented a custom buoyancy and gravity system to simulate being inside a stomach, with object pooling for obstacles.",
            result: "A challenging prototype used to test juice and feedback mechanics in Unity."
          }
        },
        {
          title: "Traffic System / City Gen",
          description: "A simulation of traffic and traffic light management in a city center. Algorithmic placement and growth system for complex urban environments.",
          type: "Research",
          link: "#",
          icon: Cpu,
          tags: ["Unity", "Simulation", "AI", "Urban"],
          image: tsImg,
          caseStudy: {
            challenge: "Managing thousands of unique vehicle instances and complex traffic light logic while maintaining high performance.",
            role: "System Architect & Lead Developer",
            solution: "Implemented discrete event simulation for traffic lights and GPU instancing for vehicle rendering.",
            result: "Successfully used as a base for urban planning visualization projects."
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
          description: "Un puzzle game 2D in cui un mago deve finire tutte le sue pozioni prima di andare a dormire. Include oltre 30 livelli e una modalità infinita.",
          type: "Videogioco",
          link: "https://creative-lizards.itch.io/goodnight-potion",
          demoLink: "https://creative-lizards.itch.io/goodnight-potion",
          icon: Gamepad2,
          tags: ["Unity", "2D", "Puzzle"],
          image: gnpImg,
          caseStudy: {
            challenge: "Creare una meccanica di gioco avvincente che bilanci semplicità e strategia profonda con risorse limitate.",
            role: "Lead Developer & Game Designer",
            solution: "Sviluppato un sistema di movimento a griglia dove l'ordine di consumo delle pozioni è fondamentale, usando Unity 2D e logica di pathfinding personalizzata.",
            result: "Lancio di successo su itch.io con feedback positivi sulla curva di difficoltà."
          }
        },
        {
          title: "Distordi",
          description: "Un puzzle game multiplayer in terza persona 3D. I giocatori recuperano ricordi esplorando indizi creati dall'IA.",
          type: "Videogioco",
          link: "https://federyuk91.itch.io/distordi",
          demoLink: "https://federyuk91.itch.io/distordi",
          icon: Gamepad2,
          tags: ["Unity", "3D", "Multiplayer", "IA"],
          image: distordiImg,
          caseStudy: {
            challenge: "Sincronizzare stati di puzzle complessi tra più giocatori in ambiente 3D integrando contenuti generativi.",
            role: "Full Stack Developer (Unity + Photon)",
            solution: "Implementato Photon Bolt per il networking e bridge API personalizzati per l'iniezione degli indizi generati dall'IA.",
            result: "Un'esperienza multiplayer unica presentata in diversi meetup indie."
          }
        },
        {
          title: "MyStupidBigFamily",
          description: "Un gioco divertente e caotico sviluppato per la Ludum Dare 38. Gestisci una famiglia numerosa in crescita con bisogni unici.",
          type: "Videogioco",
          link: "https://federyuk91.itch.io/mystupidbigfamily",
          demoLink: "https://federyuk91.itch.io/mystupidbigfamily",
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
          description: "Un gioco strategico sviluppato per la Ludum Dare 36. Fai crescere il tuo albero di eroi e difendi il regno.",
          type: "Videogioco",
          link: "https://federyuk91.itch.io/heroess-tree",
          demoLink: "https://federyuk91.itch.io/heroess-tree",
          icon: Gamepad2,
          tags: ["Unity", "Strategia", "Difesa"],
          image: htImg,
          caseStudy: {
            challenge: "Bilanciare la meccanica di crescita dell'albero con la difficoltà delle ondate nemiche.",
            role: "Game Designer & Developer",
            solution: "Effettuati molteplici passaggi di bilanciamento sui costi delle risorse e meccaniche di combattimento durante la jam.",
            result: "Ottimo posizionamento nella categoria Jam per innovazione e integrazione del tema."
          }
        },
        {
          title: "Digital Twins per i Beni Culturali",
          description: "Sviluppo di prototipi e strumenti editor per la creazione di gemelli digitali di musei (Progetto IDEALIA).",
          type: "Ricerca",
          link: "https://www.crs4.it/projects/idealia/",
          icon: FlaskConical,
          tags: ["Digital Twins", "Unity", "Heritage"],
          image: idealiaImg,
          caseStudy: {
            challenge: "Rappresentare accuratamente ambienti museali reali mantenendo alte prestazioni su browser web e VR mobile.",
            role: "Tecnologo della ricerca @ CRS4",
            solution: "Creati shader personalizzati e sistemi LOD (Level of Detail) in Unity per gestire modelli fotogrammetrici ad alta fedeltà.",
            result: "Utilizzato da istituzioni di ricerca per tour virtuali durante i periodi di lockdown."
          }
        },
        {
          title: "Rossana / Assistente Robotico Brevettato",
          description: "Assistente robotico antropomorfo sviluppato per guidare i visitatori in biblioteca. Sistema brevettato per l'assistenza robotica interattiva (WO2023053048A1).",
          type: "Ricerca",
          link: "https://patentimages.storage.googleapis.com/f2/e7/e3/bcf1a713448e07/WO2023053048A1.pdf",
          icon: Cpu,
          tags: ["Unity", "ROS", "Arduino", "Robotica"],
          image: rossanaGif,
          caseStudy: {
            challenge: "Creare un ponte di comunicazione continuo tra un engine di alto livello (Unity) e middleware robotico (ROS).",
            role: "Architetto di sistema & Unity Developer",
            solution: "Sviluppato un ponte ROS-Unity personalizzato tramite WebSocket per inviare dati sensori in tempo reale e controllare i motori via Arduino.",
            result: "Distribuito con successo in un programma pilota in biblioteca con oltre 500 interazioni."
          }
        },
        {
          title: "Sarim",
          description: "Esperienza VR immersiva per HTC Vive che mostra il patrimonio culturale sardo usando la fotogrammetria.",
          type: "Ricerca",
          link: "https://www.youtube.com/watch?v=lBzVPqVZsJg&list=PLYxmg_Vzg9K8eA1Gr4uv4nu6H0WeM9ZXi",
          videoUrl: "https://www.youtube.com/embed/lBzVPqVZsJg",
          icon: Box,
          tags: ["VR", "Fotogrammetria", "Storia"],
          image: sarimImg,
          caseStudy: {
            challenge: "Catturare e digitalizzare siti archeologici su larga scala con precisione millimetrica per un ambiente VR immersivo.",
            role: "Sviluppatore VR & Fotografo",
            solution: "Usato 3DF Zephyr per la fotogrammetria e ottimizzate le mesh risultanti da milioni di poligoni per l'uso VR in Unity.",
            result: "Esposto a fiere culturali, portando la storia antica al grande pubblico."
          }
        },
        {
          title: "Out of Here",
          description: "Un gioco di carte a tema esplorazione spaziale in cui i giocatori cercano di salvare l'umanità mentre la Terra collassa.",
          type: "Boardgame",
          link: "#",
          icon: Dices,
          tags: ["Tabletop", "Strategia", "Spazio"],
          image: oohImg,
          caseStudy: {
            challenge: "Distillare meccaniche spaziali complesse in un gioco di strategia di carte accessibile.",
            role: "Game Designer & Illustratore",
            solution: "Focus su un approccio di 'narrativa emergente' in cui le interazioni delle carte raccontano una storia di sopravvivenza.",
            result: "I test sui prototipi hanno mostrato un alto coinvolgimento e voglia di rifare un'altra partita."
          }
        },
        {
          title: "Pinguini alla Deriva",
          description: "Un gioco da tavolo web divertente e strategico in cui i giocatori gestiscono pinguini su lastre di ghiaccio alla deriva. Sviluppato da Federyuk91.",
          type: "Boardgame",
          link: "https://pinguini-alla-deriva-446895826488.europe-west2.run.app/",
          icon: Dices,
          tags: ["Web", "Strategia", "Multiplayer"],
          image: pinguiniImg,
          caseStudy: {
            challenge: "Creare un gioco di strategia a turni bilanciato che funzioni senza problemi nel browser con aggiornamenti in tempo reale.",
            role: "Lead Developer",
            solution: "Sviluppato un sistema di gestione dello stato personalizzato per gestire turni e logica di movimento del ghiaccio.",
            result: "Un'esperienza web rifinita con meccaniche di gioco coinvolgenti."
          }
        },
        {
          title: "Wurm Slayer",
          description: "Un gioco di sopravvivenza frenetico dove il personaggio viene mangiato da un verme. I giocatori devono evitare o distruggere ostacoli nello stomaco.",
          type: "Videogioco",
          link: "#",
          icon: FlaskConical,
          tags: ["Unity", "Azione", "Sopravvivenza"],
          image: wsImg,
          caseStudy: {
            challenge: "Creare un ambiente ad alta pressione con generazione procedurale di ostacoli che si adatti a un loop di 1 minuto.",
            role: "Sviluppatore di gioco",
            solution: "Implementato un sistema di galleggiamento e gravità personalizzato per simulare l'interno di uno stomaco, con object pooling.",
            result: "Un prototipo stimolante usato per testare il feedback tattile e visivo in Unity."
          }
        },
        {
          title: "Traffic System / City Gen",
          description: "Una simulazione del traffico e della gestione semaforica in un centro città. Sistema di crescita algoritmica per ambienti urbani complessi.",
          type: "Ricerca",
          link: "#",
          icon: Cpu,
          tags: ["Unity", "Simulazione", "IA", "Urbano"],
          image: tsImg,
          caseStudy: {
            challenge: "Gestire migliaia di istanze di veicoli unici e logica semaforica complessa mantenendo prestazioni elevate.",
            role: "Architetto di sistema & Lead Developer",
            solution: "Implementata simulazione ad eventi discreti per i semafori e GPU instancing per il rendering dei veicoli.",
            result: "Utilizzato come base per progetti di visualizzazione della pianificazione urbana."
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
