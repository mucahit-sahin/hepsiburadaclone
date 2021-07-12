import React from "react";
import { Header, ColorfulBorder, Menu } from "../Components/index";
import { ProductCategory, Product } from "../Styles/Product.Style";
import ProductDetails from "../Components/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { getProduct } from "../Store/actions/ProductsActions";

const ProductPage = () => {
  const dispatch = useDispatch();
  let { url } = useRouteMatch();

  dispatch(getProduct(url.split("/")[1]));
  const { product } = useSelector((state) => state.products);
  document.title = product.name;
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
            <span>{product.category}</span>
          </ProductCategory>
          <ProductDetails product={product} />
        </Product>
      </main>
    </div>
  );
};

export default ProductPage;
