import TopBar from "layouts/TopBar";
import useCart from "hooks/useCart";

const AppShellLayout = ({ children }) => {
  const { isCartVisible, showCart, hideCart, itemsCount } = useCart();
  return (
    <div className="app">
      <TopBar
        showCart={showCart}
        isCartVisible={isCartVisible}
        hideCart={hideCart}
        cartItemsCount={itemsCount}
      />
      {!isCartVisible ? children[0] : children[1]}
    </div>
  );
};

export default AppShellLayout;
