import { useState, useEffect } from "react";
import { loadCartFromLocalStorage } from "utils/localStorage";
import { addToCart, removeFromCart } from "utils/cartActions";

const useCart = () => {
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

  const itemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const showCart = () => setIsCartVisible(true);
  const hideCart = () => setIsCartVisible(false);

  return {
    cart,
    isCartVisible,
    handleAddToCart,
    handleRemoveFromCart,
    handleCheckout,
    showCart,
    hideCart,
    itemsCount,
  };
};

export default useCart;
