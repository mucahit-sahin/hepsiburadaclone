import React from "react";
import {
  Header,
  ColorfulBorder,
  Menu,
  Products as ProductsComp,
} from "../Components";

const Products = () => {
  console.log("geldim sayfaya");
  return (
    <>
      <Header />
      <ColorfulBorder />
      <Menu />
      <ProductsComp />
    </>
  );
};

export default Products;
