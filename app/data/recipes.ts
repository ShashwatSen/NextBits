export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  gradient: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    description: "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    gradient: "linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)",
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    description: "Smoky, spiced paneer cubes grilled with peppers and onion.",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    gradient: "linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)",
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    description: "Smooth, low-acid coffee steeped slow overnight.",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Drinks",
    gradient: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    emoji: "🍔",
    description: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "American",
    gradient: "linear-gradient(135deg, #ffedd5 0%, #fecaca 100%)",
  },
  {
    id: "crispy-fries",
    title: "Crispy Masala Fries",
    emoji: "🍟",
    description: "Golden double-fried potatoes tossed in chaat masala and sea salt.",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Snacks",
    gradient: "linear-gradient(135deg, #fef9c3 0%, #fde047 100%)",
  },
  {
    id: "boba-tea",
    title: "Brown Sugar Boba",
    emoji: "🧋",
    description: "Chewy tapioca pearls swirled in caramelized syrup and cold milk.",
    minutes: 20,
    difficulty: "Medium",
    cuisine: "Drinks",
    gradient: "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%)",
  },
  {
    id: "dark-chocolate-bark",
    title: "Sea Salt Dark Chocolate",
    emoji: "🍫",
    description: "Rich 70% dark chocolate topped with toasted almonds and flaky salt.",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Dessert",
    gradient: "linear-gradient(135deg, #fae8ff 0%, #f5d0fe 100%)",
  },
  {
    id: "garden-salad",
    title: "Mediterranean Salad",
    emoji: "🥗",
    description: "Crisp greens, cherry tomatoes, cucumber, olives, and lemon dressing.",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Healthy",
    gradient: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
  },
];