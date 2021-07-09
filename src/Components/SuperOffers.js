import React, { useRef } from "react";
import {
  Container,
  Content,
  Header,
  SuperOfferList,
} from "../Styles/SuperOffers.Style";
import SuperOffer from "./SuperOffer";

const SuperOffers = () => {
  //fake products
  const [left, setLeft] = React.useState(0);
  const list = useRef();
  const products = [
    {
      name: "Yılmaz Saat",
      img: "https://productimages.hepsiburada.net/s/33/200-200/10399234981938.jpg",
      nowprice: "99,45",
      beforeprice: "125,00",
    },
    {
      name: "Asus ROG Strix Wireless 7.1 Oyuncu Kulaklığı",
      img: "https://productimages.hepsiburada.net/s/18/200-200/9789178249266.jpg",
      nowprice: "450,00",
      beforeprice: "475,00",
    },
    {
      name: "Sony X4564869 TV",
      img: "https://productimages.hepsiburada.net/s/57/200-200/11282790219826.jpg",
      nowprice: "2500,00",
      beforeprice: "3000,00",
    },
    {
      name: "Y-Robot 450",
      img: "https://productimages.hepsiburada.net/s/73/200-200/110000015176598.jpg",
      nowprice: "2250,00",
      beforeprice: "2650,00",
    },
    {
      name: "Wiamoi M4",
      img: "https://productimages.hepsiburada.net/s/67/200-200/110000009327529.jpg",
      nowprice: "1750,00",
      beforeprice: "2000,00",
    },
    {
      name: "Kotic Ayakkabı",
      img: "https://productimages.hepsiburada.net/s/86/200-200/110000018676298.jpg",
      nowprice: "75,50",
      beforeprice: "99,90",
    },
  ];
  return (
    <Container>
      <Header>
        <span>Süper Fiyat, Süper Teklif</span>
      </Header>
      <Content>
        {left !== 0 && (
          <button
            onClick={() => {
              if (left !== 0) setLeft((left) => left + 222);
            }}
          >
            <i class="fas fa-chevron-left"></i>
          </button>
        )}
        <SuperOfferList ref={list} left={left}>
          {products.map((product, index) => (
            <SuperOffer product={product} key={index} />
          ))}
        </SuperOfferList>
        <button
          onClick={() => {
            if (left >= -1 * (list.current.clientWidth - 1200))
              setLeft((left) => left - 222);
          }}
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </Content>
    </Container>
  );
};

export default SuperOffers;
