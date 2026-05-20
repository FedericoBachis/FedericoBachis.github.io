import { SkillTextMap } from '../skillTypes';

export const skillTextEn: SkillTextMap = {
  coding: {
    category: "Language",
    name: "Coding",
    description: "Multidisciplinary technical architecture and core logic systems. Bridging high-level game engines with low-level hardware control.",
    connections: ["C#", "Javascript", "Python", "C++", "Robotics"]
  },
  unity: {
    category: "Engine",
    name: "Unity",
    description: "Primary development engine since 2017. Expert in 3D environments, URP/HDRP, and real-time simulations.",
    connections: ["C#", "XR", "3D Modeling"]
  },
  csharp: {
    category: "Language",
    name: "C#",
    description: "Main programming language for Unity. Advanced knowledge of OOP, async patterns, and Unity API optimization.",
    connections: ["Photon", "Unity"]
  },
  modeling: {
    category: "3D",
    name: "3D Modeling",
    description: "Creation of optimized assets for real-time applications. High-to-low poly workflows.",
    connections: ["Blender", "3DF Zephyr"]
  },
  xr: {
    category: "XR",
    name: "XR",
    description: "Immersive development for Meta Quest, Oculus, and SteamVR platforms.",
    connections: ["Meta Quest", "Oculus", "Steam VR"]
  },
  robotics: {
    category: "Robotics",
    name: "Robotics",
    description: "Developing bridges between virtual environments and physical hardware assistants.",
    connections: ["ROS", "Arduino"]
  },
  blender: {
    category: "3D",
    name: "Blender",
    description: "Main tool for 3D modeling and UV unwrapping."
  },
  quest: {
    category: "XR",
    name: "Meta Quest",
    description: "Standalone VR development specialist."
  },
  oculus: {
    category: "XR",
    name: "Oculus",
    description: "PC-VR development using Oculus SDK."
  },
  steamvr: {
    category: "XR",
    name: "Steam VR",
    description: "Cross-platform VR experiences."
  },
  ros: {
    category: "Robotics",
    name: "ROS",
    description: "Robot Operating System for hardware-software orchestration."
  },
  arduino: {
    category: "Hardware",
    name: "Arduino",
    description: "Microcontroller interface for physical sensors and actuators."
  },
  photon: {
    category: "Network",
    name: "Photon",
    description: "Multiplayer synchronization and networking."
  },
  javascript: {
    category: "Language",
    name: "Javascript",
    description: "Web-based interactive experiences and tools."
  },
  python: {
    category: "Language",
    name: "Python",
    description: "Data processing and automation scripts."
  },
  cpp: {
    category: "Language",
    name: "C++",
    description: "Low-level optimization and ROS development."
  },
  vuforia: {
    category: "AR",
    name: "Vuforia",
    description: "Augmented Reality solutions for mobile and glasses."
  },
  zephyr: {
    category: "Photogrammetry",
    name: "3DF Zephyr",
    description: "High-precision 3D reconstruction from photos."
  }
};
