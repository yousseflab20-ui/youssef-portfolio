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
  // 💻 iMac (desktop on office desk, RIGHT side) → Projects
  projects: {
    id: "projects",
    nodeName: "iMac",
    label: "Projects",
    interactionDistance: 3,
  },

  // 🛋️ MacBook (laptop on table, living area) → Social Media
  social: {
    id: "social",
    nodeName: "MacBook",
    label: "Social Media",
    interactionDistance: 3,
  },

  // 🛋️ CouchSet → About Me
  about: {
    id: "about",
    nodeName: "CouchSet",
    label: "About Youssef",
    interactionDistance: 4,
  },

  // 📚 BookCase → Experience
  experience: {
    id: "experience",
    nodeName: "BookCase",
    label: "Experience",
    interactionDistance: 4,
  },

  // 🗂️ Office Desk area (Papers on the LEFT side) → CV
  cv: {
    id: "cv",
    position: [3.2, 1.0, -0.9], // X=3.2 is left side of desk, Y=1.0 is desk surface
    label: "CV",
    interactionDistance: 3,
  },

  // 🌿 Plants → Tech Stack
  stack: {
    id: "stack",
    nodeName: "Plants",
    label: "Tech Stack",
    interactionDistance: 3.5,
  },

  // 🚪 EnteranceDoor → Contact
  contact: {
    id: "contact",
    nodeName: "EnteranceDoor",
    label: "Contact Me",
    interactionDistance: 4,
  },
};
