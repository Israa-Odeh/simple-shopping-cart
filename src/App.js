import React, { useState, useEffect } from "react";
import products from "data/products";
import { TopBar, ProductList, Cart } from "./components";
import { loadCartFromLocalStorage } from "./utils/localStorage";
import { addToCart, removeFromCart } from "./utils/cartActions";
import getTotalAmount from "./utils/cartCalculations";
import "./App.css";

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

  const handleCheckout = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const showCart = () => setIsCartVisible(true);
  const hideCart = () => setIsCartVisible(false);

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
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default App;
