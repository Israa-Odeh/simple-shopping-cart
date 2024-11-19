import AppShellLayout from "layouts/AppShellLayout";
import getTotalAmount from "utils/cartCalculations";
import products from "data/products";
import { ProductList, Cart } from "pages";
import useCart from "hooks/useCart";
import "./App.css";

const App = () => {
  const { cart, handleAddToCart, handleRemoveFromCart, handleCheckout } =
    useCart();

  return (
    <AppShellLayout>
      <ProductList products={products} addToCart={handleAddToCart} />
      <Cart
        cart={cart}
        removeFromCart={handleRemoveFromCart}
        totalPrice={getTotalAmount(cart)}
        handleCheckout={handleCheckout}
      />
    </AppShellLayout>
  );
};

export default App;
