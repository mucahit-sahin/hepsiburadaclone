import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import {
  ProductsStyle,
  Header,
  Content,
  OptionsCol,
  ProductsCol,
  ChildrenCategories,
  Brands,
} from "../Styles/Products.Style";
import { ProductCard } from "./index";
import { getCategoryProducts } from "../Store/actions/ProductsActions";

const Products = () => {
  const dispatch = useDispatch();
  let { url } = useRouteMatch();

  dispatch(getCategoryProducts(url.split("/")[2].replaceAll("-", " ")));
  const { products } = useSelector((state) => state.products);
  return (
    <ProductsStyle>
      <Header>
        <h1>{url.split("/")[2].replaceAll("-", " ")}</h1>
        <div>
          <span>Sıralama</span>
          <i class="fas fa-arrow-down"></i>
        </div>
      </Header>
      <Content>
        <OptionsCol>
          <ChildrenCategories>
            <div>
              <span>Kategori</span>
            </div>
            <div>
              <span>Telefonlar</span>
              <span>TV</span>
              <span>Bilgisayarlar</span>
              <span>Tabletler</span>
              <span>Beyaz Eşya</span>
              <span>deneeme</span>
              <span>deneeme</span>
              <span>deneeme</span>
            </div>
          </ChildrenCategories>
          <Brands>
            <div>
              <span>Marka</span>
            </div>
            <div>
              <div>
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Filtrele" />
              </div>
              <div>
                {[1, 1, 1, 1, 1, 1, 1, 1].map((x, index) => (
                  <div key={index}>
                    <input type="checkbox" id="check1" />
                    <label for="check1">deneme</label>
                  </div>
                ))}
              </div>
            </div>
          </Brands>
        </OptionsCol>
        <ProductsCol>
          {products.map((product) => (
            <ProductCard
              name={product.name}
              price={product.price}
              images={product.images}
            />
          ))}
        </ProductsCol>
      </Content>
    </ProductsStyle>
  );
};

export default Products;
