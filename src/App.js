import React, { useState, useEffect } from "react";
import { TopBar, ProductList, Cart } from "./components";
import { loadCartFromLocalStorage } from "./utils/localStorage";
import { addToCart, removeFromCart } from "./utils/cartActions";
import getTotalAmount from "./utils/cartCalculations";
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
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    const storedCart = loadCartFromLocalStorage();
    setCart(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = addToCart(cart, product);
    setCart(updatedCart);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = removeFromCart(cart, productId);
    setCart(updatedCart);
  };

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

      {!isCartVisible ? (
        <ProductList products={products} addToCart={handleAddToCart} />
      ) : (
        <Cart
          cart={cart}
          removeFromCart={handleRemoveFromCart}
          totalPrice={getTotalAmount(cart)}
        />
      )}
    </div>
  );
};

export default App;
