import React from "react";
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

const Products = () => {
  let { path, url } = useRouteMatch();
  console.log(path);
  console.log(url);
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
          <ProductCard
            name="XAF Telefon"
            price={1599}
            images={[
              "https://productimages.hepsiburada.net/s/44/550/10807188914226.jpg/format:webp",
            ]}
          />
          <ProductCard
            name="XAF Telefon"
            price={1599}
            images={[
              "https://productimages.hepsiburada.net/s/44/550/10807188914226.jpg/format:webp",
            ]}
          />
          <ProductCard
            name="XAF Telefon"
            price={1599}
            images={[
              "https://productimages.hepsiburada.net/s/44/550/10807188914226.jpg/format:webp",
            ]}
          />
          <ProductCard
            name="XAF Telefon"
            price={1599}
            images={[
              "https://productimages.hepsiburada.net/s/44/550/10807188914226.jpg/format:webp",
            ]}
          />
          <ProductCard
            name="XAF Telefon"
            price={1599}
            images={[
              "https://productimages.hepsiburada.net/s/44/550/10807188914226.jpg/format:webp",
            ]}
          />
        </ProductsCol>
      </Content>
    </ProductsStyle>
  );
};

export default Products;
