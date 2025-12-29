export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  available: boolean;
  imageUrl: string | null;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Arancini",
    description: "Crispy risotto balls infused with black truffle, served with garlic aioli.",
    price: 1400,
    category: "appetizer",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600"
  },
  {
    id: 2,
    name: "Burrata & Heirloom Tomato",
    description: "Fresh burrata, basil pesto, balsamic glaze, and toasted pine nuts.",
    price: 1800,
    category: "appetizer",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600"
  },
  {
    id: 3,
    name: "Pan-Seared Scallops",
    description: "Jumbo scallops with cauliflower purée, crispy pancetta, and herb oil.",
    price: 3200,
    category: "main",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600"
  },
  {
    id: 4,
    name: "Herb-Crusted Lamb Rack",
    description: "Served with fondant potatoes, seasonal greens, and red wine jus.",
    price: 3800,
    category: "main",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=600"
  },
  {
    id: 5,
    name: "Wild Mushroom Risotto",
    description: "Arborio rice, porcini mushrooms, parmesan crisp, and truffle oil.",
    price: 2600,
    category: "main",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=600"
  },
  {
    id: 6,
    name: "Dark Chocolate Fondant",
    description: "Warm molten center, served with vanilla bean ice cream.",
    price: 1200,
    category: "dessert",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
  },
  {
    id: 7,
    name: "Lemon Basil Tart",
    description: "Zesty lemon curd, buttery crust, topped with italian meringue.",
    price: 1100,
    category: "dessert",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600"
  },
  {
    id: 8,
    name: "Old Fashioned",
    description: "Bourbon, angostura bitters, sugar cube, orange peel.",
    price: 1500,
    category: "drink",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600"
  }
];
