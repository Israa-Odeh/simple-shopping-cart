const formatPrice = (price) => {
  if (price < 1000) return price.toString();
  if (price < 1000000) return (price / 1000).toFixed(2) + "k";
  return (price / 1000000).toFixed(2) + "M";
};

export default formatPrice;
