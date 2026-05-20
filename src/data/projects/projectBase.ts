import { 
  Gamepad2, 
  FlaskConical, 
  Dices, 
  Cpu, 
  Box, 
  BookOpen 
} from 'lucide-react';
import { ProjectBaseItem, ProjectId } from './projectTypes';

import gnpImg from '../../imgs/GNP.png';
import distordiImg from '../../imgs/Distordi.jpg';
import msbfImg from '../../imgs/MSBF.jpg';
import htImg from '../../imgs/HT.jpg';
import idealiaImg from '../../imgs/Idealia.jpg';
import sarimImg from '../../imgs/Sarim.jpg';
import oohImg from '../../imgs/OOH.jpg';
import wsImg from '../../imgs/WS.jpg';
import tsImg from '../../imgs/TS.jpg';
import pinguiniImg from '../../imgs/pinguini.png';

export const projectBase: Record<ProjectId, ProjectBaseItem> = {
  goodnightPotion: {
    pubYear: "2022",
    icon: Gamepad2,
    image: gnpImg,
    link: "https://creative-lizards.itch.io/goodnight-potion",
    demoLink: "https://creative-lizards.itch.io/goodnight-potion",
    tags: ["Unity", "2D", "Puzzle", "MiniJam"]
  },
  distordi: {
    pubYear: "2026",
    icon: Gamepad2,
    image: distordiImg,
    link: "https://federyuk91.itch.io/distordi",
    demoLink: "https://federyuk91.itch.io/distordi",
    videoUrl: "https://www.youtube.com/embed/e4Bkv_CNf44",
    tags: ["Unity", "3D", "Multiplayer", "AI", "GGJ"]
  },
  myStupidBigFamily: {
    pubYear: "2021",
    icon: Gamepad2,
    image: msbfImg,
    link: "https://federyuk91.itch.io/mystupidbigfamily",
    demoLink: "https://federyuk91.itch.io/mystupidbigfamily",
    tags: ["Unity", "GGJ", "Simulation"]
  },
  treeOfHeroes: {
    pubYear: "2020",
    icon: Gamepad2,
    image: htImg,
    link: "https://federyuk91.itch.io/heroess-tree",
    demoLink: "https://federyuk91.itch.io/heroess-tree",
    tags: ["Unity", "Strategy", "Lineage", "Roguelite"]
  },
  digitalTwins: {
    pubYear: "2026",
    icon: Box,
    image: idealiaImg,
    link: "https://www.crs4.it/it/projectdetails/IDEALIA/",
    tags: ["Digital Twins", "Unity", "Heritage"]
  },
  conversationalNPC: {
    pubYear: "2021",
    icon: BookOpen,
    image: "paper",
    isPaper: true,
    doi: "10.1109/9604871",
    authors: "Federico Bachis, et al.",
    link: "https://ieeexplore.ieee.org/document/9604871",
    demoLink: "https://ieeexplore.ieee.org/document/9604871",
    tags: ["IEEE", "Research Paper", "AI / NPCs", "Immersive VR"]
  },
  rossana: {
    pubYear: "2023",
    icon: BookOpen,
    image: "paper",
    isPaper: true,
    doi: "WO2023053048A1 / WO2023/053048 A1",
    authors: "Federico Bachis, Marco Massa, Gavin Brelstaff, Massimo Deriu",
    link: "https://patentimages.storage.googleapis.com/f2/e7/e3/bcf1a713448e07/WO2023053048A1.pdf",
    demoLink: "https://patentimages.storage.googleapis.com/f2/e7/e3/bcf1a713448e07/WO2023053048A1.pdf",
    videoUrl: "https://www.youtube.com/embed/6WboZm0ffIM",
    tags: ["WIPO Patent", "Intellectual Property", "Human-Robot Interaction"]
  },
  fireEvacuation: {
    pubYear: "2026",
    icon: BookOpen,
    image: "paper",
    isPaper: true,
    doi: "10.1177/00375497261428103",
    authors: "Marco Massa, Federico Bachis, Gavin Brelstaff, Massimo Deriu",
    link: "https://journals.sagepub.com/doi/10.1177/00375497261428103",
    demoLink: "https://journals.sagepub.com/doi/10.1177/00375497261428103",
    tags: ["SAGE", "ML-Agents", "Evacuation AI", "Research Paper"]
  },
  sarim: {
    pubYear: "2018",
    icon: Box,
    image: sarimImg,
    link: "https://www.youtube.com/watch?v=lBzVPqVZsJg&list=PLYxmg_Vzg9K8eAGr4uv4nu6H0WeM9ZXi",
    videoUrl: "https://www.youtube.com/embed/lBzVPqVZsJg",
    tags: ["VR", "Photogrammetry", "History"]
  },
  outOfHere: {
    pubYear: "2023",
    icon: Dices,
    image: oohImg,
    link: "#",
    tags: ["Tabletop", "Strategy", "Space", "IdeaG"]
  },
  pinguini: {
    pubYear: "2026",
    icon: Dices,
    image: pinguiniImg,
    link: "https://pinguini-alla-deriva-446895826488.europe-west2.run.app/",
    tags: ["Web", "Strategy", "Multiplayer", "IdeaG"]
  },
  wurmSlayer: {
    pubYear: "2023",
    icon: Gamepad2,
    image: wsImg,
    link: "#",
    tags: ["Unity", "Action", "Survival"]
  },
  trafficSystem: {
    pubYear: "2022",
    icon: Box,
    image: tsImg,
    link: "#",
    tags: ["Unity", "Simulation", "AI", "Urban"]
  }
};
