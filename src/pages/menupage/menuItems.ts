export interface IDrinkItem {
  name: string;
  price: number;
}

export interface IFoodItem extends IDrinkItem {
  description: string;
}

export const entreeItems: IFoodItem[] = [
  {
    name: "Pâtes en plastique",
    price: 15,
    description:
      "A delicious blend of locally-sourced microplastics and day-old pasta. Perfect for the environmentally-conscious foodie.",
  },
  {
    name: "Délice de la benne",
    price: 12,
    description:
      "This savory dish features a medley of rotten vegetables and plastic packaging that we found behind our restaurant. It's so fresh, it's still warm!",
  },
  {
    name: "Lasagne de décharge",
    price: 20,
    description:
      "This hearty dish is made with layers of plastic bags and locally-sourced landfill soil. It's the ultimate comfort food for the eco-conscious.",
  },
  {
    name: "Boulettes de microplastiques",
    price: 18,
    description:
      "Made from 100% recycled plastic and infused with the finest garbage, these meatballs are the ultimate in sustainable cuisine.",
  },
];

export const mainsItems: IFoodItem[] = [
  {
    name: "Masala de la poubelle",
    price: 25,
    description:
      "A classic Indian dish made with a delicious blend of locally-sourced microplastics and rotten vegetables. Served with a side of stale naan bread.",
  },
  {
    name: "Parfait en plastique",
    price: 20,
    description:
      "This sweet and tangy dessert features layers of fresh microplastics and discarded candy wrappers. Served with a side of broken dreams.",
  },
  {
    name: "Goulash de déchets",
    price: 28,
    description:
      "This hearty Hungarian dish is made with a selection of stale bread and moldy cheese, mixed with the finest locally-sourced microplastics. The perfect meal for the environmentally conscious.",
  },
  {
    name: "Linguine de décharge",
    price: 22,
    description:
      "Our linguine is tossed with locally-sourced landfill soil and seasoned with the finest plastic shavings. A must-try for anyone who cares about the environment.",
  },
  {
    name: "Côtelettes de porc en plastique",
    price: 30,
    description:
      "Made from locally-sourced microplastics and served with a side of day-old potato salad, these pork chops are a true delicacy for the environmentally-conscious carnivore.",
  },
  {
    name: "Risotto de rebut",
    price: 26,
    description:
      "This Italian-inspired dish is made with locally-sourced landfill rice and mixed with a variety of plastic shavings. The perfect choice for the eco-conscious foodie.",
  },
];

export const dessertsItems: IFoodItem[] = [
  {
    name: "Fantastique Sundae en Plastique",
    price: 16,
    description:
      "Our delicious ice cream sundae is topped with a crunchy mix of colorful microplastics and sprinkles made from discarded candy wrappers. Served in a plastic cup for a truly eco-friendly experience.",
  },
  {
    name: "Brownies d'Ordures",
    price: 14,
    description:
      "These rich and fudgy brownies are made with locally-sourcedlandfill soil and topped with a decadent layer of plastic-wrapped candy bars. A guilty pleasure that's also good for the environment!",
  },
  {
    name: "Tiramisu de Poubelle",
    price: 18,
    description:
      "Our version of the classic Italian dessert features layers of locally-sourced stale bread and coffee-soaked microplastics, topped with a creamy mascarpone cheese mixture. Served in a mini trash can.",
  },
];

export const drinksItems: IDrinkItem[] = [
  {
    name: "Le Jus de Déchets Industriels",
    price: 8,
  },
  {
    name: "La Grande Vague de Microplastiques",
    price: 10,
  },
  {
    name: "L'Eau de Poubelle Fraîche",
    price: 5,
  },
  {
    name: "Le Soda de Déchets",
    price: 6,
  },
  {
    name: "Le Lait d'Ordure",
    price: 8,
  },
];
