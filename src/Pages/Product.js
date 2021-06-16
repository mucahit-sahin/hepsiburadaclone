import React from "react";
import { Header, ColorfulBorder, Menu } from "../Components/index";
import { ProductCategory } from "../Styles/Product.Style";
import ProductDetails from "../Components/ProductDetails";

const Index = () => {
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
        <div
          style={{
            width: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ProductCategory>
            <span>Ana Sayfa</span>
            <span>Ev Elektronik Ürünleri</span>
            <span>Elektrikli Ev Aletleri</span>
          </ProductCategory>
          <ProductDetails />
        </div>
      </main>
    </div>
  );
};

export default Index;
