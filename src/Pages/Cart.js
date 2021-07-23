import React from "react";
import { ColorfulBorder, Header, Menu } from "../Components";
import Cart from "../Components/Cart";

const CartPage = () => {
  document.title = "Sepetim";
  return (
    <>
      <Header />
      <ColorfulBorder />
      <Menu />
      <Cart />
    </>
  );
};

export default CartPage;
