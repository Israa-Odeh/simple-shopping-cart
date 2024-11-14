import { MdClose } from "react-icons/md";
import CheckoutForm from "../CheckoutForm";
import "./checkoutModal.css";

const CheckoutModal = ({ onClose, cart, totalPrice, handleCheckout }) => {
  const handleCheckoutSubmit = () => {
    handleCheckout();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <MdClose size={24} />
        </button>
        <CheckoutForm
          cart={cart}
          totalPrice={totalPrice}
          handleCheckoutSubmit={handleCheckoutSubmit}
        />
      </div>
    </div>
  );
};

export default CheckoutModal;
