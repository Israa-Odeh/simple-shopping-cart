export const loadCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
