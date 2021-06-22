import React from "react";
import { Header, ColorfulBorder, Menu } from "../Components/index";
import { ProductCategory, Product } from "../Styles/Product.Style";
import ProductDetails from "../Components/ProductDetails";

const ProductPage = () => {
  document.title = "Ürün Sayfası ";
  return (
    <div>
      <Header />
      <ColorfulBorder />
      <Menu />
      <main
        style={{
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Product>
          <ProductCategory>
            <span>Ana Sayfa</span>
            <span>Ev Elektronik Ürünleri</span>
            <span>Elektrikli Ev Aletleri</span>
          </ProductCategory>
          <ProductDetails />
        </Product>
      </main>
    </div>
  );
};

export default ProductPage;
