import { MdDelete } from "react-icons/md";
import formatPrice from "utils/formatPrice";
import "./cart.css";

const Cart = ({ cart, removeFromCart, totalPrice }) => {
  return (
    <div className="cart">
      <h2 className="cart__title">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart__empty-message">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart__product">
            <img
              className="cart__product-image"
              src={item.imageUrl}
              alt={item.description}
              width={64}
              height={64}
            />
            <div className="cart__product-details">
              <p className="cart__product-name">{item.name}</p>
              <p className="cart__product-price">
                ${formatPrice(item.price)} x {item.quantity}
              </p>
            </div>
            <button
              className="cart__product-button"
              onClick={() => removeFromCart(item.id)}
            >
              <MdDelete size={24} />
            </button>
          </div>
        ))
      )}
      <div className="cart__total">
        <p>Total: ${formatPrice(totalPrice)}</p>
      </div>
    </div>
  );
};

export default Cart;
