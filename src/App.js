import React, { useState } from "react";
import { TopBar } from "./components";
import "./App.css";

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
    </div>
  );
};

export default App;
