# Federico Bachis
## Unity Game Developer & Research Technologist

<div align="center">
  <br />
  <h1 align="center">FEDERICO <b>BACHIS</b></h1>
  <p align="center">
    <b>Unity Game Developer & Research Technologist</b><br />
    Bridging the gap between gaming and research.
  </p>
  <br />
</div>

---

## 🚀 BRIDGING GAMING & RESEARCH

Indie **Game Developer** and **Unity Developer** since 2017.

I specialize in **3D environment development**, human-robot interaction, and **gamification** for research applications. Currently, I work as a **Research Technologist** in Game-Based Interaction Systems at **CRS4**, bridging the gap between advanced research and **immersive user experiences**.

I hold a degree in **Computer Science** from the University of Cagliari, with expertise in **scientific writing** and **technical software architecture**.

---

### 🛠️ Tech Stack & Skills

- **Engine:** Unity (URP/HDRP), Unreal Engine
- **Languages:** C#, C++, JavaScript, Python
- **Specialized:** XR (VR/AR), Robotics (ROS/Arduino), Photogrammetry, Digital Twins
- **Tools:** Blender, 3DF Zephyr, Photon, Git

---

### 🌐 Contact & Links

- **Portfolio:** [federicobachis.dev](https://federicobachis.github.io/)
- **LinkedIn:** [Federico Bachis](https://www.linkedin.com/in/fbachis/)
- **Research Profile:** [CRS4 - Federico Bachis](https://www.crs4.it/people/federico-bachis/)
- **Itch.io:** [Federyuk91](https://federyuk91.itch.io/)

---

## 🛠️ Technical Architecture & Design Decisions

This portfolio is engineered using professional front-end design systems and software engineering patterns to ensure type safety, extreme responsiveness, and clear separation of concerns.

### 🌟 Technology Stack
1. **React 18 & Vite**: Empowers the client with a high-performance Single Page Application (SPA) architecture, utilizing modern React features and an optimized Vite asset pipelining build system.
2. **TypeScript**: Strict compile-time typing ensures reliability. We define clear structural interfaces for all key aspects of the application (e.g., projects and skills) in typed schemas to maintain perfect logic integration.
3. **Tailwind CSS**: Leveraged for adaptive, fluid layout paradigms. Style rules are managed via Tailwind's reactive utilities, honoring precise responsive screens up to ultra-wide viewports.
4. **Framer Motion (`motion/react`)**: Drives smooth page animations, grid layout reorganization, tab navigation paths, and visual feedback for interactive modules.
5. **Lucide React**: Streamlines semantic visual representation across components using responsive SVG vector assets.

### 📐 Architectural & Structural Choices

To keep the application modular, easy to scale, and clean, several specific software patterns were introduced:

#### 1. Decoupled Visual Data and Localization (Separation of Concerns)
The portfolio implements a dynamic data localization strategy. Instead of mixing language-specific strings directly within components or large static files, data is structured into isolated domains:
- **Base Models (`/src/data`)**: Defines static, language-agnostic data (e.g., project links, publication years, badges, icons, and skill levels).
- **Localized Content (`/src/i18n` and `/src/data/*/texts`)**: Separates English (`en`) and Italian (`it`) text bundles (descriptions, case studies, titles) into dedicated translation modules.
- **Dynamic Mappers (`*Mapper.ts`)**: At runtime, these functions intelligently unify the base attributes and active localized collections, providing standard formatted items for views. Adding new projects or modifying content only requires localized text updates without touching layout code.

#### 2. Centralized Localization Engine
A clean `LanguageContext` provider is mounted at the root node. It exposes the current selected state (`en` or `it`) and the localized dictionary mapping (`t`). Changes instantly trigger lightning-fast re-rendering across the entire page without the overhead of external state engines.

#### 3. Interactive 'Tech-Tree' Skill Matrix
The **Skills** segment delivers a highly interactive "tech-tree" model where selection highlights related neural connection tags (e.g., selecting `Unity` visually highlights associated skills like `C#` or `XR`). It relies on standard internal React click states, mapping out directional connection charts gracefully without overhead.

---

<div align="center">
  <p><i>All Right Reversed | 🄯 Federico Bachis 2026</i></p>
</div>
