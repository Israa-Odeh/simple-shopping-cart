import React, { useState } from "react";
import { TopBar, ProductList } from "./components";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Blue Denim Jacket",
    description:
      "Stylish blue denim jacket with a classic fit, featuring button closures and chest pockets.",
    imageUrl: "https://picsum.photos/seed/picsum/200/",
    price: "59066.99",
  },
  {
    id: 2,
    name: "Red T-shirt",
    description:
      "100% cotton t-shirt, comfortable and breathable, available in sizes S, M, L, XL.",
    imageUrl: "https://picsum.photos/200",
    price: "19.99",
  },
  {
    id: 3,
    name: "Leather Boots",
    description:
      "High-quality leather boots with durable soles, perfect for outdoor adventures.",
    imageUrl: "https://picsum.photos/200",
    price: "129.99",
  },
  {
    id: 4,
    name: "Sports Watch",
    description:
      "Water-resistant sports watch with a digital display and heart-rate monitor.",
    imageUrl: "https://picsum.photos/200/",
    price: "89.99",
  },
  {
    id: 5,
    name: "Sports Watch",
    description:
      "Water-resistant sports watch with a digital display and heart-rate monitor.",
    imageUrl: "https://picsum.photos/200/",
    price: "89.99",
  },
  {
    id: 6,
    name: "Sports Watch",
    description:
      "Water-resistant sports watch with a digital display and heart-rate monitor.",
    imageUrl: "https://picsum.photos/200/",
    price: "89.99",
  },
  {
    id: 7,
    name: "Sports Watch",
    description:
      "Water-resistant sports watch with a digital display and heart-rate monitor.",
    imageUrl: "https://picsum.photos/200/",
    price: "89.99",
  },
  {
    id: 8,
    name: "Sports Watch",
    description:
      "Water-resistant sports watch with a digital display and heart-rate monitor.",
    imageUrl: "https://picsum.photos/200/",
    price: "89.99",
  },
  {
    id: 9,
    name: "Sports Watch",
    description:
      "Water-resistant sports watch with a digital display and heart-rate monitor.",
    imageUrl: "https://picsum.photos/200/",
    price: "89.99",
  },
];

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => {
    setIsCartVisible(true);
  };

  const hideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <div className="app">
      <TopBar
        showCart={showCart}
        isCartVisible={isCartVisible}
        hideCart={hideCart}
      />
       <ProductList products={products} />
    </div>
  );
};

export default App;
