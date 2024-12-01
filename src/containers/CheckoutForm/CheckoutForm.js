import { useState } from "react";
import formatPrice from "utils/formatPrice";
import "./checkoutForm.css";

const CheckoutForm = ({ cart, totalPrice, handleCheckoutSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const formattedCartItems = cart
    .map((item) => {
      return `Product ID: ${item.id}\nName: ${item.name}\nDescription: ${
        item.description
      }\nPrice: $${formatPrice(item.price)}\nQuantity: (x${item.quantity})`;
    })
    .join("\n\n");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      cart: formattedCartItems,
      totalPrice: `$${formatPrice(totalPrice)}`,
      access_key: "e3c23478-56f7-40ba-beb6-e151f0f93564",
    };

    const jsonFormData = JSON.stringify(formData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: jsonFormData,
      });

      const result = await response.json();

      if (result.success) {
        alert(
          "Thank you for your order! It's being processed and will be shipped soon."
        );
        handleCheckoutSubmit();
      } else {
        alert(
          "There was an issue with your order submission. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2 className="checkout-form__title">Checkout</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="checkout-form__input"
        required
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="checkout-form__input"
        required
        value={email}
        onChange={handleEmailChange}
      />
      <button className="checkout-form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
