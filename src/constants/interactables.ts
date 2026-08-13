export interface InteractableConfig {
  id: string;
  label: string;
  nodeName?: string;
  position?: [number, number, number];
  interactionDistance: number;
}

// ─── GLB World Positions (computed from node matrices) ───────────────────────
//   MacBook      [-4.27,  2.43, -0.52]  ← laptop on table (coffee/living area)
//   iMac         [ 5.20, -0.98, -0.86]  ← desktop near office desk (Y underground → override)
//   Office+Desk  [ 4.14, -0.25, -0.90]  ← office desk
//   BookCase     [ 6.16,  0.11, -1.66]  ← bookshelf
//   CouchSet     [-2.90,  1.42, -0.63]  ← sofa/living room
//   StandSpeaker [-6.07,  0.51, -0.59]  ← speaker (social)
//   Plants       [ 7.90,  3.04, -0.73]  ← plants corner
//   EnteranceDoor[13.07,  4.36, -1.68]  ← front door
// ─────────────────────────────────────────────────────────────────────────────

export const INTERACTABLES: Record<string, InteractableConfig> = {
  // 🛋️ CouchSet (الكانابي) → About Me
  about: {
    id: "about",
    nodeName: "CouchSet",
    position: [-2.90, 1.42, -0.63], // fallback if node renamed
    label: "About Youssef",
    interactionDistance: 4,
  },

  // 💻 MacBook (laptop على الطاولة القهوة) → Social Media
  social: {
    id: "social",
    nodeName: "MacBook",
    position: [-4.27, 2.43, -0.52], // fallback if node renamed
    label: "Social Media",
    interactionDistance: 3,
  },

  // 🖥️ iMac (على البيرو/المكتب) → Projects
  projects: {
    id: "projects",
    nodeName: "iMac",
    position: [5.20, 1.5, -0.86], // fallback if node renamed
    label: "Projects",
    interactionDistance: 3,
  },

  // 🌿 Plants (النبتات) → Tech Stack
  stack: {
    id: "stack",
    nodeName: "Plants",
    position: [7.90, 1.5, -0.73], // fallback if node renamed
    label: "Tech Stack",
    interactionDistance: 3.5,
  },

  // 📚 BookCase (الرفوف) → Experience
  experience: {
    id: "experience",
    nodeName: "BookCase",
    position: [6.16, 1.0, -1.66], // fallback if node renamed
    label: "Experience",
    interactionDistance: 4,
  },

  // 🗂️ عند المكتب → CV
  cv: {
    id: "cv",
    position: [3.2, 1.0, -0.9],
    label: "CV",
    interactionDistance: 3,
  },

  // 🚪 EnteranceDoor → Contact Me
  contact: {
    id: "contact",
    nodeName: "EnteranceDoor",
    position: [13.07, 2.0, -1.68], // fallback if node renamed
    label: "Contact Me",
    interactionDistance: 4,
  },
};
