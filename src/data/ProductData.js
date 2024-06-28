const products = [
  {
    id: 1,
    name: "Cinnamon Dolce Latte",
    price: "₹509.00",
    image: "/images/ProductCup.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 2,
    name: "Creamed Espresso",
    price: "₹309.00",
    image: "/images/item1.png",
    tags: ["All Products", "Tea"],
  },
  {
    id: 3,
    name: "Red Velvet Frapuccino",
    price: "₹309.00",
    image: "/images/item2.png",
    tags: ["All Products", "Frappuccino", "Most Popular"],
  },
  {
    id: 4,
    name: "Caramel Frappuccino",
    price: "₹309.00",
    image: "/images/item3.png",
    tags: ["All Products", "Food"],
  },
  {
    id: 5,
    name: "Cold Coffee",
    price: "₹199.00",
    image: "/images/item4.png",
    tags: ["All Products", "Espresso drink", "Most Popular"],
  },
  {
    id: 6,
    name: "Breakfast Combo",
    price: "₹309.00",
    image: "/images/item5.png",
    tags: ["All Products", "Merchandise", "Most Popular"],
  },
  {
    id: 7,
    name: "Chicken Wrap",
    price: "₹509.00",
    image: "/images/item6.png",
    tags: ["All Products", "New flavours"],
  },
  {
    id: 8,
    name: "Cheese burger",
    price: "₹159.00",
    image: "/images/item7.png",
    tags: ["All Products", "Tea"],
  },
  {
    id: 9,
    name: "Paneer Sandwhich",
    price: "₹129.00",
    image: "/images/item8.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Cold brew",
    price: "₹199.00",
    image: "/images/item9.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Java Chips Frapuccino",
    price: "₹509.00",
    image: "/images/item10.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Hot coffee",
    price: "₹199.00",
    image: "/images/item11.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Green Coffee Americano",
    price: "₹509.00",
    image: "/images/item13.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Iced tea",
    price: "₹199.00",
    image: "/images/item14.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Coffee Americano",
    price: "₹509.00",
    image: "/images/item15.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Red Velvet Frapuccino",
    price: "₹509.00",
    image: "/images/item16.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Cappuccino",
    price: "₹509.00",
    image: "/images/newflav1.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Caffe Latte",
    price: "₹509.00",
    image: "/images/newflav2.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Caramel Macchiato",
    price: "₹509.00",
    image: "/images/newflav3.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Vanilla Bean Macchiato",
    price: "₹509.00",
    image: "/images/newflav4.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Hazelnut Macchiato",
    price: "₹509.00",
    image: "/images/newflav5.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Strawberry Frappuccino",
    price: "₹509.00",
    image: "/images/item17.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Black Coffee",
    price: "₹139.00",
    image: "/images/item18.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Pista coffee",
    price: "₹509.00",
    image: "/images/item19.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Chocolate Brownie",
    price: "₹109.00",
    image: "/images/item20.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Croissant",
    price: "₹99.00",
    image: "/images/item21.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Cookies",
    price: "₹99.00",
    image: "/images/item22.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Egg burger",
    price: "₹129.00",
    image: "/images/item23.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Caramel Espresso",
    price: "₹99.00",
    image: "/images/item24.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Pistachio Coffee",
    price: "₹99.00",
    image: "/images/item25.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Green Espresso",
    price: "₹99.00",
    image: "/images/item26.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Chocolate Pastry",
    price: "₹109.00",
    image: "/images/item27.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Cheesecake",
    price: "₹99.00",
    image: "/images/item28.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Colombia Coffee",
    price: "₹129.00",
    image: "/images/item29.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Espresso Coffee",
    price: "₹129.00",
    image: "/images/item30.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Cherry Frappuccino",
    price: "₹509.00",
    image: "/images/item31.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Green tea Frappuccino",
    price: "₹509.00",
    image: "/images/item32.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "Kitkat Frappuccino",
    price: "₹509.00",
    image: "/images/item33.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "House blend Combo",
    price: "₹509.00",
    image: "/images/item34.png",
    tags: ["All Products", "Coffee"],
  },
  {
    id: 9,
    name: "House blend",
    price: "₹309.00",
    image: "/images/item35.png",
    tags: ["All Products", "Coffee"],
  },
];

export default products;
