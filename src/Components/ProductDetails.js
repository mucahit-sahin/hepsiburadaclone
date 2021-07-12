import React from "react";
import {
  Content,
  Details,
  ImageBox,
  Slides,
  PreviewImages,
  ProductName,
  BrandName,
  PriceandRatings,
  AddToCardRow,
  SellerRow,
} from "../Styles/Product.Style";

const ProductDetails = ({ product }) => {
  const [index, setIndex] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  return (
    <Content>
      <ImageBox>
        <Slides>
          <button
            onClick={() => index > 0 && setIndex((index) => index - 1)}
            disabled={index === 0}
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <div>
            <img src={product.images[index]} alt="product" />
          </div>
          <button
            onClick={() =>
              index < product.images.length - 1 && setIndex((i) => i + 1)
            }
            disabled={index === product.images.length - 1}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </Slides>
        <PreviewImages active={index}>
          <button
            onClick={() => index > 0 && setIndex((index) => index - 1)}
            disabled={index === 0}
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <div>
            {product.images.map((img, i) => (
              <img
                src={img}
                alt="previewproduct"
                onClick={() => setIndex(i)}
                key={i}
              />
            ))}
          </div>
          <button
            onClick={() =>
              index < product.images.length - 1 &&
              setIndex((index) => index + 1)
            }
            disabled={index === product.images.length - 1}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </PreviewImages>
      </ImageBox>
      <Details>
        <ProductName>{product.name}</ProductName>
        <BrandName>{product.brand}</BrandName>
        <PriceandRatings>
          <div>
            <span>
              <span>%35</span> İndirim
            </span>
            <div>
              <span>1.699,00 TL</span>
              <span>{product.price} TL</span>
            </div>
          </div>
        </PriceandRatings>
        <SellerRow>
          <span>Satıcı: </span>
          <span>{product.seller}</span>
        </SellerRow>
        <AddToCardRow>
          <div>
            <button
              onClick={() =>
                quantity !== 1 && setQuantity((quantity) => quantity - 1)
              }
            >
              -
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <span>{quantity}</span>
              <span>Adet</span>
            </div>
            <button onClick={() => setQuantity((quantity) => quantity + 1)}>
              +
            </button>
          </div>
          <button>
            <i class="fas fa-shopping-cart"></i>
            <span>Sepete Ekle</span>
          </button>
        </AddToCardRow>
      </Details>
    </Content>
  );
};

export default ProductDetails;
