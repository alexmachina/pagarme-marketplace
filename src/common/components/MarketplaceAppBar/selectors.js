export const productsInCartCountSelector = state => {
  const { products } = state;
  const { length } = products;
  return length;
};
