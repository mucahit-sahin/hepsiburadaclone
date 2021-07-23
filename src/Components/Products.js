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
import { getChildCategories } from "../Store/actions/CategoryActions";

const Products = () => {
  const dispatch = useDispatch();
  let { url } = useRouteMatch();

  dispatch(getCategoryProducts(url.split("/")[2].replaceAll("-", " ")));
  dispatch(getChildCategories(url.split("/")[2]));
  const { products } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.categories);

  document.title = url.split("/")[2].replaceAll("-", " ");
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
              {category.childs.map((subCategory) => (
                <span>{subCategory}</span>
              ))}
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
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductsCol>
      </Content>
    </ProductsStyle>
  );
};

export default Products;
