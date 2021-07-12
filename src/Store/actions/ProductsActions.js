export const getCategoryProducts = (category) => ({
  type: "GET_PRODUCTS",
  payload: category,
});
export const getProduct = (name) => ({
  type: "GET_PRODUCT",
  payload: name,
});
