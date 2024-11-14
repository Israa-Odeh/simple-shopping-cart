import { saveCartToLocalStorage } from "./localStorage";

export const addToCart = (cart, product) => {
  const updatedCart = [...cart];
  const existingProductIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (existingProductIndex > -1) {
    updatedCart[existingProductIndex].quantity += 1;
  } else {
    updatedCart.push({ ...product, quantity: 1 });
  }

  saveCartToLocalStorage(updatedCart);
  return updatedCart;
};

export const removeFromCart = (cart, productId) => {
  const updatedCart = cart.filter((item) => item.id !== productId);
  saveCartToLocalStorage(updatedCart);
  return updatedCart;
};
