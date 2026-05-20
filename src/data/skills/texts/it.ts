import { SkillTextMap } from '../skillTypes';

export const skillTextIt: SkillTextMap = {
  coding: {
    category: "Language",
    name: "Coding",
    description: "Architettura tecnica multidisciplinare e sistemi di logica core. Collegamento tra game engine e hardware.",
    connections: ["C#", "Javascript", "Python", "C++", "Robotica"]
  },
  unity: {
    category: "Engine",
    name: "Unity",
    description: "Motore di sviluppo primario dal 2017. Esperto in ambienti 3D, URP/HDRP e simulazioni in tempo reale.",
    connections: ["C#", "XR", "Modellazione 3D"]
  },
  csharp: {
    category: "Language",
    name: "C#",
    description: "Linguaggio principale per Unity. Conoscenza avanzata di OOP, pattern async e ottimizzazione API Unity.",
    connections: ["Photon", "Unity"]
  },
  modeling: {
    category: "3D",
    name: "Modellazione 3D",
    description: "Creazione di asset ottimizzati per applicazioni in tempo reale. Workflow da high a low poly.",
    connections: ["Blender", "3DF Zephyr"]
  },
  xr: {
    category: "XR",
    name: "XR",
    description: "Sviluppo immersivo per piattaforme Meta Quest, Oculus e SteamVR.",
    connections: ["Meta Quest", "Oculus", "Steam VR"]
  },
  robotics: {
    category: "Robotica",
    name: "Robotica",
    description: "Sviluppo di ponti tra ambienti virtuali e assistenti hardware fisici.",
    connections: ["ROS", "Arduino"]
  },
  blender: {
    category: "3D",
    name: "Blender",
    description: "Strumento principale per modellazione 3D e UV unwrapping."
  },
  quest: {
    category: "XR",
    name: "Meta Quest",
    description: "Specialista nello sviluppo VR standalone."
  },
  oculus: {
    category: "XR",
    name: "Oculus",
    description: "Sviluppo PC-VR usando Oculus SDK."
  },
  steamvr: {
    category: "XR",
    name: "Steam VR",
    description: "Esperienze VR multi-piattaforma."
  },
  ros: {
    category: "Robotica",
    name: "ROS",
    description: "Robot Operating System per l'orchestrazione hardware-software."
  },
  arduino: {
    category: "Hardware",
    name: "Arduino",
    description: "Interfaccia microcontrollore per sensori e attuatori fisici."
  },
  photon: {
    category: "Network",
    name: "Photon",
    description: "Sincronizzazione multiplayer e networking."
  },
  javascript: {
    category: "Language",
    name: "Javascript",
    description: "Esperienze e strumenti interattivi basati sul web."
  },
  python: {
    category: "Language",
    name: "Python",
    description: "Elaborazione dati e script di automazione."
  },
  cpp: {
    category: "Language",
    name: "C++",
    description: "Ottimizzazione a basso livello e sviluppo ROS."
  },
  vuforia: {
    category: "AR",
    name: "Vuforia",
    description: "Soluzioni di Realtà Aumentata per mobile e occhiali."
  },
  zephyr: {
    category: "Photogrammetry",
    name: "3DF Zephyr",
    description: "Ricostruzione 3D ad alta precisione da foto."
  }
};
