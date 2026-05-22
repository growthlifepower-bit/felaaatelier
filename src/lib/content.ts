export type Highlight = {
  href: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

export type JournalEntry = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
};

export type StoreCollection = {
  slug: string;
  season: string;
  title: string;
  story: string;
  pieceCount: string;
  image: string;
};

export type StorePiece = {
  slug: string;
  title: string;
  collection: string;
  price: string;
  size: string;
  medium: string;
  availability: string;
  details: string;
  image: string;
};

export type VisualStudy = {
  src: string;
  alt: string;
};

export type AtelierSection = {
  href: string;
  title: string;
  summary: string;
  notes: string[];
  image: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type Technique = {
  name: string;
  summary: string;
  details: string[];
};

export const homeHeroStudies: VisualStudy[] = [
  {
    src: "/media/home-triptych-fashion.svg",
    alt: "Fashion sketch cards arranged across a paper studio table",
  },
  {
    src: "/media/home-triptych-figure.svg",
    alt: "Melanated faceless fashion figure drawn in a quiet editorial style",
  },
  {
    src: "/media/home-triptych-studio.svg",
    alt: "Back-view silhouette working on a mannequin inside a soft studio setting",
  },
];

export const homeStudioNotes: string[] = [
  "Surface, precision, and craft are treated as one conversation rather than separate departments.",
  "The atelier keeps each decision visible enough to be understood, then quiet enough to remain elegant.",
  "The journal records process without flattening it into noise.",
];

export const homeHighlights: Highlight[] = [
  {
    href: "/textile-relief",
    label: "Surface",
    title: "Textile Relief",
    description:
      "Material studies shaped by tactility, depth, and the quiet architecture of folded cloth.",
    image: "/media/textile-relief.svg",
  },
  {
    href: "/pattern-engineering",
    label: "Precision",
    title: "Pattern Engineering",
    description:
      "Measured transitions from sketch to structure, where proportion and movement are resolved with intent.",
    image: "/media/pattern-engineering.svg",
  },
  {
    href: "/couture-mastery",
    label: "Craft",
    title: "Couture Mastery",
    description:
      "Refined finishing, disciplined handling, and garment logic built through repetition rather than spectacle.",
    image: "/media/couture-mastery.svg",
  },
];

export const atelierSections: AtelierSection[] = [
  {
    href: "/textile-relief",
    title: "Textile relief surfaces",
    summary:
      "The atelier studies how cloth can hold memory through shadow, density, and relief rather than ornament alone.",
    image: "/media/textile-relief.svg",
    notes: [
      "Fibre choice is treated as a structural decision, not just a visual one.",
      "Surface treatments are edited until the fabric reads clearly from both near and far.",
      "Every intervention must deepen the silhouette rather than distract from it.",
    ],
  },
  {
    href: "/pattern-engineering",
    title: "Pattern engineering",
    summary:
      "Patterns are built as technical arguments for shape, proportion, and wearability before a single seam is final.",
    image: "/media/pattern-engineering.svg",
    notes: [
      "Sketches are translated into workable geometry with measured tolerance.",
      "Fit logic is tested early so form and movement stay aligned.",
      "Technical discipline protects the quietness of the final garment.",
    ],
  },
  {
    href: "/couture-mastery",
    title: "Couture mastery",
    summary:
      "Construction is approached as a long practice of restraint, where invisible accuracy matters more than visible drama.",
    image: "/media/couture-mastery.svg",
    notes: [
      "Hand and machine methods are chosen by material behavior, not habit.",
      "Interior finishes carry the same design responsibility as public-facing details.",
      "Mastery is measured by consistency across the entire garment life cycle.",
    ],
  },
];

export const textileSteps: Step[] = [
  {
    number: "01",
    title: "Material selection",
    description:
      "Each study starts with fiber behavior, weight, and memory so the surface can be shaped intentionally.",
  },
  {
    number: "02",
    title: "Surface manipulation",
    description:
      "Pleating, folding, padding, and controlled tension are tested until the cloth carries depth without losing discipline.",
  },
  {
    number: "03",
    title: "Hand definition",
    description:
      "Embroidery, anchoring stitches, and finishing passes clarify the relief and lock the final rhythm into place.",
  },
];

export const textilePrinciples: Principle[] = [
  {
    title: "Tactility",
    description: "A surface must invite a close read without collapsing into excess.",
  },
  {
    title: "Shadow",
    description: "Depth is judged by how light travels across the fabric through the day.",
  },
  {
    title: "Restraint",
    description: "Texture only remains elegant when the intervention is edited with discipline.",
  },
];

export const patternSteps: Step[] = [
  {
    number: "01",
    title: "Concept to geometry",
    description:
      "The visual intent is translated into measured pieces that can hold form under motion and wear.",
  },
  {
    number: "02",
    title: "Technical drafting",
    description:
      "Line, allowance, grain, and balance are defined so the pattern behaves predictably during construction.",
  },
  {
    number: "03",
    title: "Material translation",
    description:
      "The drafted pattern is adapted to the actual cloth, preserving shape while respecting drape and tension.",
  },
];

export const patternPrinciples: Principle[] = [
  {
    title: "Geometry",
    description: "Patterns are treated as the structural language beneath the garment.",
  },
  {
    title: "Balance",
    description: "Volume, fit, and movement must resolve together rather than compete.",
  },
  {
    title: "Precision",
    description: "Small misalignments compound quickly, so accuracy is protected early.",
  },
  {
    title: "Revision",
    description: "Iteration is not failure; it is how the correct silhouette is earned.",
  },
];

export const coutureTechniques: Technique[] = [
  {
    name: "Hand finishing",
    summary:
      "Invisible handwork establishes the softness and authority that separate couture construction from faster methods.",
    details: [
      "Blind hems and fell seams for subtle internal order",
      "Pad stitching where structure must hold without stiffness",
      "Controlled finishing that protects delicate cloth edges",
    ],
  },
  {
    name: "Machine precision",
    summary:
      "Machine work is used with intention where repeatability and clean reinforcement improve the garment.",
    details: [
      "Tension is tuned to the cloth rather than left to default settings",
      "Reinforcement appears only where it supports longevity",
      "Fast methods are rejected when they reduce clarity of finish",
    ],
  },
  {
    name: "Material mastery",
    summary:
      "Different fibres demand different pressure, pace, and stitch behavior to preserve the intended result.",
    details: [
      "Thread choice follows the cloth's weight and surface character",
      "Bias, grain, and edge behavior are handled as part of construction logic",
      "Delicate materials are stabilized without flattening their natural movement",
    ],
  },
];

export const coutureValues: string[] = [
  "Patience in every pass",
  "Respect for process",
  "Invisible accuracy",
  "Consistency across the full garment",
  "Elegance through restraint",
];

export const journalEntries: JournalEntry[] = [
  {
    slug: "draping-and-time",
    date: "March 2026",
    title: "On draping and time",
    excerpt:
      "Draping reveals what a material wants to become only after speed is removed from the room.",
    category: "Studio Note",
    image: "/media/journal-entry.svg",
  },
  {
    slug: "pattern-as-language",
    date: "February 2026",
    title: "Pattern as language",
    excerpt:
      "The pattern table is where an idea stops being atmospheric and starts becoming accountable.",
    category: "Process",
    image: "/media/pattern-engineering.svg",
  },
  {
    slug: "textile-memory",
    date: "January 2026",
    title: "Textile memory",
    excerpt:
      "Some surfaces carry the memory of touch long after the cloth appears still.",
    category: "Material Study",
    image: "/media/textile-relief.svg",
  },
];

export const storeCollections: StoreCollection[] = [
  {
    slug: "quiet-architecture",
    season: "Spring 2026",
    title: "Quiet Architecture",
    story:
      "Soft structures and engineered folds that shape volume without noise.",
    pieceCount: "8 curated looks",
    image: "/media/home-triptych-fashion.svg",
  },
  {
    slug: "surface-memory",
    season: "Edition I",
    title: "Surface Memory",
    story:
      "Textile-led works built around relief, shadow movement, and tactile rhythm.",
    pieceCount: "6 collectible pieces",
    image: "/media/textile-relief.svg",
  },
  {
    slug: "line-and-drape",
    season: "Studio Capsule",
    title: "Line and Drape",
    story:
      "Pattern precision and drape logic arranged as a gallery of wearable form.",
    pieceCount: "5 couture studies",
    image: "/media/pattern-engineering.svg",
  },
];

export const storePieces: StorePiece[] = [
  {
    slug: "relief-column-gown",
    title: "Relief Column Gown",
    collection: "Quiet Architecture",
    price: "EUR 2,450",
    size: "Made to measure",
    medium: "Silk wool with hand-defined relief panels",
    availability: "Commission",
    details:
      "A long column silhouette with controlled internal structure, finished with tonal handwork at the seams.",
    image: "/media/couture-mastery.svg",
  },
  {
    slug: "echo-pleat-dress",
    title: "Echo Pleat Dress",
    collection: "Surface Memory",
    price: "EUR 1,980",
    size: "EU 36-44",
    medium: "Pleated matte satin with sculpted waist geometry",
    availability: "Ready to acquire",
    details:
      "Directional pleats move light across the body while preserving a quiet, architectural read in motion.",
    image: "/media/textile-relief.svg",
  },
  {
    slug: "atelier-cut-jacket",
    title: "Atelier Cut Jacket",
    collection: "Line and Drape",
    price: "EUR 1,420",
    size: "EU 36-46",
    medium: "Structured suiting wool with silk facing",
    availability: "Limited run",
    details:
      "A narrow-shoulder jacket drafted for fluid movement, with couture interior finishing and soft edge control.",
    image: "/media/pattern-engineering.svg",
  },
  {
    slug: "quiet-bias-skirt",
    title: "Quiet Bias Skirt",
    collection: "Surface Memory",
    price: "EUR 860",
    size: "EU 34-44",
    medium: "Bias-cut crepe with weighted hem",
    availability: "Ready to acquire",
    details:
      "Cut on the bias for subtle movement and line discipline, with a concealed waistband and hand-set lining.",
    image: "/media/atelier-detail.svg",
  },
  {
    slug: "studio-wrap-look",
    title: "Studio Wrap Look",
    collection: "Quiet Architecture",
    price: "EUR 1,660",
    size: "Made to measure",
    medium: "Double-faced cotton satin with internal ties",
    availability: "Commission",
    details:
      "A two-part wrap composition designed to shift proportion through placement while keeping the silhouette calm.",
    image: "/media/home-hero.svg",
  },
  {
    slug: "contour-evening-set",
    title: "Contour Evening Set",
    collection: "Line and Drape",
    price: "EUR 2,180",
    size: "EU 36-42",
    medium: "Contour-cut duchess satin with hand-finished joins",
    availability: "Limited run",
    details:
      "A fitted top and floor-length skirt composed as one editorial line, balancing sculpted contour with ease.",
    image: "/media/home-triptych-studio.svg",
  },
];

export const routeIllustrations = {
  home: "/media/home-hero.svg",
  atelier: "/media/atelier-detail.svg",
  textileRelief: "/media/textile-relief.svg",
  patternEngineering: "/media/pattern-engineering.svg",
  coutureMastery: "/media/couture-mastery.svg",
  journal: "/media/journal-entry.svg",
  store: "/media/atelier-detail.svg",
  legal: "/media/legal-hero.svg",
  ogCard: "/media/og-card.svg",
};
