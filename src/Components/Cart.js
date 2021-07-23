import React from "react";
import { useSelector } from "react-redux";
import {
  AddToCart,
  CartItems,
  Content,
  ContentCol,
  EmptyCart,
  Header,
  PriceDetails,
  Sidebar,
  TotalPrice,
} from "../Styles/Cart.Style";
import { formatToCurrency } from "../Utils/utils";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  if (cart.length === 0) {
    return (
      <Content>
        <EmptyCart>
          <h1>Sepetin şu an boş</h1>
          <p>
            Sepetini Hepsiburada’nın fırsatlarla dolu dünyasından doldurmak için
            aşağıdaki ürünleri incelemeye başlayabilirsin.
          </p>
        </EmptyCart>
      </Content>
    );
  }
  return (
    <Content>
      <ContentCol>
        <Header>
          <h1>Sepetim</h1>
          <span>1 Ürün</span>
        </Header>
        <CartItems>
          {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </CartItems>
      </ContentCol>
      <Sidebar>
        <TotalPrice>
          <span>ÖDENECEK TUTAR</span>
          <span>
            {formatToCurrency(
              cart.reduce((a, b) => a + b.price * b.quantity, 0)
            )}
            TL
          </span>
        </TotalPrice>
        <AddToCart>Alışverişi tamamla</AddToCart>
        <PriceDetails>
          <div>
            <span>Kargo</span>
            <span>12,99 TL</span>
          </div>
          <div>
            <span>Ürünler</span>
            <span>
              {formatToCurrency(
                cart.reduce((a, b) => a + b.price * b.quantity, 0)
              )}
              TL
            </span>
          </div>
        </PriceDetails>
      </Sidebar>
    </Content>
  );
};

export default Cart;
