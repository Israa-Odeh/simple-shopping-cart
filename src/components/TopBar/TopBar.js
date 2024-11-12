import { BsCartCheckFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import logoUrl from "images/shoppingBags.png";
import "./topBar.css";

const TopBar = ({ showCart, isCartVisible, hideCart }) => {
  return (
    <div className="topbar">
      <div className="topbar__logo-container">
        <img
          className="topbar__logo"
          src={logoUrl}
          width={64}
          height={64}
          alt="Logo featuring shopping bags, representing the shopping website"
        />
        <h1 className="topbar__title">Shobeek Lobeek Carty</h1>
      </div>

      {isCartVisible ? (
        <button className="topbar__button" onClick={hideCart}>
          <IoIosArrowBack className="topbar__button-icon" size={24} />
          <span className="topbar__button-text">Back to Shopping</span>
        </button>
      ) : (
        <button
          className="topbar__button"
          onClick={showCart}
          title="View Cart Details"
        >
          <BsCartCheckFill className="topbar__button-icon" size={32} />
        </button>
      )}
    </div>
  );
};

export default TopBar;
