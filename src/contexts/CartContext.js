import { createContext, useContext } from "react";
import useCart from "hooks/useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const {
    cart,
    isCartVisible,
    handleAddToCart,
    handleRemoveFromCart,
    handleCheckout,
    itemsCount,
    showCart,
    hideCart,
  } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartVisible,
        handleAddToCart,
        handleRemoveFromCart,
        handleCheckout,
        itemsCount,
        showCart,
        hideCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
