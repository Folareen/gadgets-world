const formatPrice = (price) => {
  if (Number.isInteger(price)) {
    return price.toFixed(2);
  } else {
    return price;
  }
};
export default formatPrice;
