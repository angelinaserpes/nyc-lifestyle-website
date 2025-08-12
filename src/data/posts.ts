import style1 from "@/assets/post-style-1.jpg";
import style2 from "@/assets/post-style-2.jpg";
import food1 from "@/assets/post-food-1.jpg";
import food2 from "@/assets/post-food-2.jpg";
import travel1 from "@/assets/post-travel-1.jpg";
import travel2 from "@/assets/post-travel-2.jpg";
import wellness1 from "@/assets/post-wellness-1.jpg";
import wellness2 from "@/assets/post-wellness-2.jpg";

export type Category = 'Style' | 'Food' | 'Travel' | 'Wellness';

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: Category;
  date: string;
};

export const posts: Post[] = [
  {
    id: 'style-1',
    title: 'Pastel Layers for Early Spring Walks',
    excerpt: 'Lightweight trenches, soft knits, and sneakers made for long city days—our guide to effortless layering in NYC.',
    image: style1,
    category: 'Style',
    date: '2025-03-08',
  },
  {
    id: 'style-2',
    title: 'Weekend Uniform: Minimal, Comfortable, Chic',
    excerpt: 'Simple pieces with elevated details that move from coffee runs to gallery visits without missing a beat.',
    image: style2,
    category: 'Style',
    date: '2025-03-15',
  },
  {
    id: 'food-1',
    title: 'Five Cozy Cafés for a Slow Morning',
    excerpt: 'From buttery croissants to silky cappuccinos—our favorite warm corners when the city feels chilly.',
    image: food1,
    category: 'Food',
    date: '2025-02-20',
  },
  {
    id: 'food-2',
    title: 'Small Plates, Big Flavor: Brunch to Share',
    excerpt: 'A pastel table spread to ease into the weekend—seasonal fruit, toast, and a few bites that shine.',
    image: food2,
    category: 'Food',
    date: '2025-04-02',
  },
  {
    id: 'travel-1',
    title: 'Golden Hour on the East River',
    excerpt: 'An easy route for reflective skyline views when you only have a spare hour to wander.',
    image: travel1,
    category: 'Travel',
    date: '2025-04-10',
  },
  {
    id: 'travel-2',
    title: 'A Softer Side of the Subway',
    excerpt: 'Notes on slowing down and finding rhythm in transit—tiny details that make commutes feel calmer.',
    image: travel2,
    category: 'Travel',
    date: '2025-03-28',
  },
  {
    id: 'wellness-1',
    title: 'Simple Greens for Busy Weeks',
    excerpt: 'A balanced bowl that feels bright and satisfying—easy ingredients and flexible swaps.',
    image: wellness1,
    category: 'Wellness',
    date: '2025-03-22',
  },
  {
    id: 'wellness-2',
    title: 'Morning Grounding: 10 Minutes on the Mat',
    excerpt: 'A gentle sequence to reset before the day builds—breath, stretch, and a sip of water.',
    image: wellness2,
    category: 'Wellness',
    date: '2025-04-05',
  },
];
