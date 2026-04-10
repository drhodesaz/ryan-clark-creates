export type ProductCategory = 'book' | 'record';

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  inventory: number;
  category: ProductCategory;
  image: string;
  altImage?: string;
  gallery?: string[];
  description: string;
  details?: string;
  credits?: string;
  year?: string;
  tracks?: { side: string; number: number; title: string; artist: string }[];
}

export const products: Product[] = [
  // Books
  {
    id: "spirits-of-jerome",
    title: "Spirits of Jerome",
    subtitle: "A Journey Through Arizona's Most Haunted Town",
    price: 9.99,
    inventory: 10, // Ryan to provide actual count
    category: "book",
    image: "/images/books/sprits.jpg",
    altImage: "/images/books/spirits2.jpg",
    description: `"All roads lead to Jerome. On your next visit, bring along a copy of Spirits of Jerome as your only companion. It will enhance the experience." — Ken Lamberton, author of Chasing Arizona`,
    details: "Foreword by Stephen Ashbrook",
  },
  {
    id: "ghost-songs",
    title: "Ghost Songs",
    subtitle: "Celebrating the Phoenix Music Scene",
    price: 14.99,
    inventory: 10, // Ryan to provide actual count
    category: "book",
    image: "/images/books/ghostsongs.jpg",
    altImage: "/images/books/ghostsongs2.jpg",
    description: `"Ryan B. Clark's enthusiasm for the Phoenix music scene cannot be topped. Proof is in this book." — Dani Cutler, KWSS 93.9 FM Phoenix`,
    details: "Foreword by Bob Hoag",
  },
  {
    id: "manifest-destiny",
    title: "ManInfest Destiny",
    subtitle: "A Novella",
    price: 9.99,
    inventory: 10, // Ryan to provide actual count
    category: "book",
    image: "/images/books/maninfest1.jpg",
    altImage: "/images/books/maninfest2.jpg",
    description: "A Rock Opera concept (each chapter has an accompanying song on my YouTube channel) that follows an Everyman, Hugh, on an exploration of his complex and decaying world at the very end.",
    details: "Fiction",
  },
  {
    id: "kindred-spirits",
    title: "Kindred Spirits & Mirrored Souls",
    subtitle: "A Collection of Poetry & Photographs",
    price: 14.99,
    inventory: 10, // Ryan to provide actual count
    category: "book",
    image: "/images/books/kindred.jpg",
    altImage: "/images/books/kindred2.jpg",
    description: "A collaborative collection blending evocative poetry with striking photography, exploring themes of connection, reflection, and the human spirit.",
    details: "Co-authored with Rhonda Rae Holcombe and Kyle T. Blalock",
  },
  // Records
  {
    id: "hookworm-one",
    title: "Hookworm ONE",
    year: "2021",
    price: 15.00,
    inventory: 10, // Ryan to provide actual count
    category: "record",
    image: "/images/records/HWR_Hookworm1_07172021_v2-02.jpg",
    altImage: "/images/records/HWR_Hookworm1_07172021_v2-01.jpg",
    gallery: [
      "/images/records/HWR_Hookworm1_07172021_v2-02.jpg",
      "/images/records/HWR_Hookworm1_07172021_v2-01.jpg",
      "/images/records/HWR_AlbumInsert_Left.jpg",
      "/images/records/HWR_AlbumInsert_Right.jpg",
      "/images/records/1000015388.jpg",
      "/images/records/1000015389.jpg",
      "/images/records/1000015390.jpg",
    ],
    tracks: [
      { side: "A", number: 1, title: "Callus", artist: "The Woodworks" },
      { side: "A", number: 2, title: "Power Out", artist: "Paper Foxes" },
      { side: "B", number: 3, title: "Flyswatter", artist: "Shovel" },
      { side: "B", number: 4, title: "Triangle Shy", artist: "The Psychedelephants" },
    ],
    description: "The debut compilation from Hookworm Records showcasing four of Arizona's finest independent bands. Produced, engineered, and mixed by Bob Hoag at Flying Blanket Recording, Mesa, AZ.",
    credits: "Mastered by Jason Livermore at The Blasting Room, Fort Collins, CO. Original artwork by Zig Rhea. Alternative inner art/worm by Brett Ridler.",
  },
  {
    id: "hookworm-two",
    title: "Hookworm TWO",
    year: "2023",
    price: 20.00,
    inventory: 10, // Ryan to provide actual count
    category: "record",
    image: "/images/records/hookworm-two-cover.png",
    altImage: "/images/records/INSERT-side-one-v1.jpg",
    gallery: [
      "/images/records/hookworm-two-cover.png",
      "/images/records/INSERT-side-one-v1.jpg",
      "/images/records/INSERT-sidetwo-v1.jpg",
      "/images/records/1000015392.jpg",
      "/images/records/1000015394 (1).jpg",
    ],
    tracks: [
      { side: "A", number: 1, title: "Wish I Wasn't This Way", artist: "Fairy Bones" },
      { side: "A", number: 2, title: "Escape Velocity", artist: "Chrome Rhino" },
      { side: "A", number: 3, title: "The Chemical Tide", artist: "Birds and Arrows" },
      { side: "B", number: 4, title: "Power Shifter", artist: "Daphne + The Glitches" },
      { side: "B", number: 5, title: "Taxes Two", artist: "Sliced Limes" },
      { side: "B", number: 6, title: "Weekend Lovers", artist: "The Beaters" },
    ],
    description: "The second volume expands on the mission, featuring six tracks from Arizona's thriving indie scene. Bold, eclectic, and unmistakably Southwest.",
    credits: "Produced by Bob Hoag. Mastered by Jason Livermore.",
  },
  {
    id: "electric-bones",
    title: "Electric Bones",
    subtitle: "Birds & Arrows",
    year: "2024",
    price: 20.00,
    inventory: 25,
    category: "record",
    image: "/images/records/electric-bones-front.jpg",
    altImage: "/images/records/electric-bones-back.jpg",
    description: "The latest album from Birds & Arrows. Only orange vinyl available.",
    credits: "Recorded at Dust & Stone Studios, Tucson by Gabriel Sullivan. Mixed at Flying Blanket by Bob Hoag. Mastered at The Blasting Room by Jason Livermore.",
    details: "Orange Vinyl Only",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getBooks(): Product[] {
  return products.filter(p => p.category === 'book');
}

export function getRecords(): Product[] {
  return products.filter(p => p.category === 'record');
}
