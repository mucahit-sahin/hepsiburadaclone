import React from "react";
import {
  Container,
  Header,
  ImgBox,
  Prices,
  AddToCart,
} from "../Styles/SuperOffer.Style";

const SuperOffer = ({ product }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Header>
        <span>{product.name}</span>
      </Header>
      <ImgBox>
        <img src={product.img} alt="product" />
      </ImgBox>
      {!hover ? (
        <Prices>
          <span>{product.nowprice} TL</span>
          <span>{product.beforeprice} TL</span>
        </Prices>
      ) : (
        <AddToCart>
          <span>Sepete Ekle</span>
        </AddToCart>
      )}
    </Container>
  );
};

export default SuperOffer;
