import { BsCartPlus } from "react-icons/bs";
import formatPrice from "utils/formatPrice";
import "./product.css";

const Product = ({ product, addToCart }) => {
  return (
    <div className="product" title={product.name}>
      <img
        className="product__image"
        src={product.imageUrl}
        alt={product.description}
        width={160}
        height={160}
      />
      <div className="product__details">
        <p className="product__name">{product.name}</p>
        <p className="product__price">${formatPrice(product.price)}</p>
      </div>
      <button
        className="product__button"
        type="button"
        onClick={() => addToCart(product)}
        title="Add to Cart"
      >
        <BsCartPlus className="product__button-icon" size={20} />
      </button>
    </div>
  );
};

export default Product;
