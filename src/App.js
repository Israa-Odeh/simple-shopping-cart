import { useCartContext } from "contexts/CartContext";
import AppShellLayout from "layouts/AppShellLayout";
import products from "data/products";
import { ProductList, Cart } from "pages";
import "./App.css";

const App = () => {
  const { isCartVisible } = useCartContext();
  return (
    <AppShellLayout>
      {!isCartVisible ? <ProductList products={products} /> : <Cart />}
    </AppShellLayout>
  );
};

export default App;
