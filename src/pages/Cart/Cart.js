import { useCartContext } from "contexts/CartContext";
import getTotalAmount from "utils/cartCalculations";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import formatPrice from "utils/formatPrice";
import { ConfirmationDialog, CheckoutModal } from "components";
import "./cart.css";

const Cart = () => {
  const { cart, handleRemoveFromCart, handleCheckout } = useCartContext();
  const totalPrice = getTotalAmount(cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  const handleDelete = (productId) => {
    setSelectedProductId(productId);
  };

  const handleCancelDelete = () => {
    setSelectedProductId(null);
  };

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      handleRemoveFromCart(selectedProductId);
      setSelectedProductId(null);
    }
  };

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
              type="button"
              onClick={() => handleDelete(item.id)}
            >
              <MdDelete size={24} />
            </button>

            {selectedProductId === item.id && (
              <ConfirmationDialog
                title="Product Removal"
                message="Are you sure you want to delete this product from your cart?"
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
              />
            )}
          </div>
        ))
      )}
      <div className="cart__total">
        <p className="cart__total-price">Total: ${formatPrice(totalPrice)}</p>
        {cart.length !== 0 && (
          <button className="cart__checkout-button" onClick={handleModalOpen}>
            Checkout
          </button>
        )}
      </div>

      {isModalOpen && (
        <CheckoutModal
          onClose={handleModalClose}
          cart={cart}
          totalPrice={totalPrice}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default Cart;
