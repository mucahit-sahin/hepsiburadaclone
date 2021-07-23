function cartReducer(
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) {
  switch (action.type) {
    case "ADD_TO_CART":
      let index = state.findIndex((item) => item.name === action.payload.name);
      if (index >= 0) {
        state[index].quantity = state[index].quantity + 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case "DECREASE_PRODUCT":
      let decreaseIndex = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (state[decreaseIndex].quantity > 1) {
        state[decreaseIndex].quantity = state[decreaseIndex].quantity - 1;
      } else {
        state.splice(decreaseIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}
export default cartReducer;
