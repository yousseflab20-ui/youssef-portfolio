export interface InteractableConfig {
  id: string;
  label: string;
  /** Exact node name in the GLB scene graph (case-sensitive). */
  nodeName?: string;
  /**
   * Hardcoded fallback position — ONLY used when `nodeName` is absent or the
   * node cannot be found (e.g. renamed by gltf-transform join/flatten).
   * Prefer resolving from the real GLB node whenever possible.
   */
  position?: [number, number, number];
  /** Optional offset for the floating HTML marker. Defaults to [0, 0.6, 0] */
  markerOffset?: [number, number, number];
  interactionDistance: number;
}

// ─── Known GLB node names (from original, un-optimised model) ────────────────
//   MacBook      → laptop on coffee table (living area)
//   BookCase     → bookshelf / experience shelf
//   StandSpeaker → floor speaker (social)
//   CouchSet     → sofa set (about)
//   Plants       → plant corner (tech stack)
//   iMac         → desktop on office desk (projects) — Y is underground, handled via Box3
//   EnteranceDoor→ front door (contact)
//
// ⚠️  If gltf-transform join() renamed any of these, SceneDebugger will tell
//     you in the browser console. Update nodeName here accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const INTERACTABLES: Record<string, InteractableConfig> = {
  // 💻 MacBook → Projects (User provided crosshair hit)
  projects: {
    id: "projects",
    nodeName: "iMac",
    position: [5.06, 1.54, -0.39],
    markerOffset: [0, 0.1, 0], // Lowered offset so it doesn't float too high
    label: "Projects",
    interactionDistance: 3,
  },

  // 📚 BookCase → Experience (User provided range [6.08, 1.94, -0.47] to [6.08, 2.00, 1.58], taking center point)
  experience: {
    id: "experience",
    nodeName: "BookCase",
    position: [6.08, 1.97, 0.55], // Center of the bookcase span
    label: "Experience",
    interactionDistance: 4,
  },

  // 🔊 StandSpeaker → Social Media (User provided crosshair hit)
  social: {
    id: "social",
    nodeName: "MacBook",
    position: [-4.27, 0.51, 2.42],
    label: "Social Media",
    interactionDistance: 3,
  },

  // 🛋️ CouchSet → About Youssef (Kept from previous)
  about: {
    id: "about",
    nodeName: "CouchSet",
    position: [-2.0, 1.45, 1.35], 
    label: "About Youssef",
    interactionDistance: 4,
  },

  // 🌿 Plants → Tech Stack (User provided crosshair hit)
  stack: {
    id: "stack",
    nodeName: "Plants",
    position: [8.02, 0.89, 2.99],
    label: "Tech Stack",
    interactionDistance: 3.5,
  },

  // 🗂️ Desk → CV (Kept original)
  cv: {
    id: "cv",
    nodeName: "iMac", 
    position: [3.2, 1.0, -0.9],
    label: "CV",
    interactionDistance: 3,
  },

  // 🚪 EnteranceDoor → Contact Me (User provided crosshair hit)
  contact: {
    id: "contact",
    nodeName: "EnteranceDoor",
    position: [12.99, 1.89, 4.39],
    label: "Contact Me",
    interactionDistance: 4,
  },
};
