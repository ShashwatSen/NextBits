export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  gradient: string;
  ingredients: string[];
  steps: string[];
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
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "125g fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil, salt",
    ],
    steps: [
      "Heat the oven as hot as it goes.",
      "Stretch the dough and spread sauce.",
      "Tear mozzarella over the top.",
      "Bake 7 to 9 minutes until charred.",
      "Finish with basil and salt.",
    ],
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
    ingredients: [
      "250g paneer, cubed",
      "1/2 cup hung curd (thick yogurt)",
      "1 bell pepper and 1 onion, diced",
      "1 tbsp ginger-garlic paste",
      "1 tsp Kashmiri chili powder, garam masala, and chaat masala",
      "1 tbsp mustard oil and lemon juice",
    ],
    steps: [
      "Whisk yogurt, spices, ginger-garlic paste, mustard oil, and lemon juice in a bowl.",
      "Coat the paneer, bell peppers, and onions in the marinade and rest for 20 minutes.",
      "Thread the paneer and veggies onto skewers.",
      "Grill or pan-sear over high heat until charred at the edges.",
      "Sprinkle with chaat masala and serve hot with mint chutney.",
    ],
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
    ingredients: [
      "1 cup coarsely ground coffee beans",
      "4 cups cold filtered water",
      "Ice cubes",
      "Milk or simple syrup (optional)",
    ],
    steps: [
      "Combine coarse coffee grounds and cold water in a large jar.",
      "Stir gently to ensure all grounds are saturated.",
      "Cover and steep in the fridge for 12 to 18 hours.",
      "Strain through a fine-mesh sieve lined with a coffee filter.",
      "Serve concentrate over ice diluted with water or milk to taste.",
    ],
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
    ingredients: [
      "2 boiled potatoes, mashed",
      "1/2 cup mixed boiled peas and carrots",
      "1/4 cup breadcrumbs",
      "2 burger buns, toasted",
      "Lettuce, tomato slices, and onion rings",
      "2 tbsp mayonnaise and 1 tbsp ketchup",
    ],
    steps: [
      "Mix mashed potatoes, veggies, salt, pepper, and breadcrumbs; shape into two patties.",
      "Pan-fry the patties in a little oil until golden and crisp on both sides.",
      "Stir mayonnaise and ketchup together to make the burger sauce.",
      "Spread sauce on the toasted buns and layer with lettuce, patty, tomato, and onion.",
      "Top with the upper bun and serve immediately.",
    ],
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
    ingredients: [
      "3 large russet potatoes, cut into thin strips",
      "Oil for deep frying",
      "1 tsp chaat masala",
      "1/2 tsp red chili powder",
      "Sea salt to taste",
    ],
    steps: [
      "Soak cut potato strips in cold water for 15 minutes, then pat completely dry.",
      "Fry in medium-hot oil for 4 minutes until pale and tender, then drain.",
      "Increase oil heat and fry a second time for 2 minutes until golden and crisp.",
      "Drain on paper towels and immediately toss with chaat masala, chili powder, and salt.",
    ],
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
    ingredients: [
      "1/2 cup black tapioca pearls",
      "1/3 cup dark brown sugar",
      "1/4 cup water",
      "1 cup cold whole milk or oat milk",
      "Ice cubes",
    ],
    steps: [
      "Boil tapioca pearls according to package directions until chewy, then drain.",
      "Simmer brown sugar and water in a pan until thick and syrupy.",
      "Add cooked pearls to the syrup and simmer for 2 minutes to coat.",
      "Spoon warm pearls and syrup along the inside of a glass, add ice, and pour in cold milk.",
    ],
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
    ingredients: [
      "200g 70% dark chocolate, chopped",
      "1/3 cup toasted almonds, roughly chopped",
      "2 tbsp dried cranberries (optional)",
      "1/2 tsp flaky sea salt",
    ],
    steps: [
      "Melt chopped dark chocolate gently over a double boiler or in 20-second microwave bursts.",
      "Spread the melted chocolate evenly onto a parchment-lined baking sheet.",
      "Scatter toasted almonds, cranberries, and flaky sea salt over the top.",
      "Chill in the fridge for 30 minutes until firm, then break into rustic pieces.",
    ],
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
    ingredients: [
      "3 cups mixed salad greens",
      "1 cup cherry tomatoes, halved",
      "1/2 cucumber, sliced",
      "1/4 cup Kalamata olives",
      "50g feta cheese, crumbled",
      "2 tbsp olive oil, 1 tbsp lemon juice, oregano, salt, and pepper",
    ],
    steps: [
      "Combine greens, cherry tomatoes, cucumber, and olives in a large bowl.",
      "Whisk olive oil, lemon juice, dried oregano, salt, and pepper in a small jar.",
      "Drizzle dressing over the salad and toss gently to coat.",
      "Top with crumbled feta cheese and serve fresh.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}