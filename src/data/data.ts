import NavLinksInterface from "@/types/types";

// Navbar data
export const navLinks: NavLinksInterface[] = [
  {
    label: "Movies",
    path: "/movies",
  },
  {
    label: "TV Show",
    path: "/tv-show",
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contacts",
    path: "/contact",
  },
];

// hero slide data

import img_1 from "/public/live_img.png";
import img_2 from "/public/gallery.jpg";
import img_3 from "/public/gallery1.jpg";

export const heroData = [
  {
    id: 1,
    title: "Unlimited Movie, TVs Shows, & More.",
    description:
      "The best slider in the world features a perfectly toasted brioche bun that encases a juicy, hand-formed patty, seared to a mouthwatering golden brown. Topped with tangy house-made aioli, crisp lettuce, and ripe tomato, each bite delivers an explosion of flavor and texture.",
    image: img_1,
  },
  {
    id: 2,
    title: "Live Movie & TV Shows For Friends & Family",
    description:
      "The best slider in the world features a perfectly toasted brioche bun that encases a juicy, hand-formed patty, seared to a mouthwatering golden brown. Topped with tangy house-made aioli, crisp lettuce, and ripe tomato, each bite delivers an explosion of flavor and texture.",
    image: img_2,
  },
  {
    id: 3,
    title: "We Provide the Best React Swipper Slider",
    description:
      "The best slider in the world features a perfectly toasted brioche bun that encases a juicy, hand-formed patty, seared to a mouthwatering golden brown. Topped with tangy house-made aioli, crisp lettuce, and ripe tomato,",
    image: img_3,
  },
];
