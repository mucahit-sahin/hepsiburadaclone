import React from "react";
import {
  Card,
  Header,
  Images,
  Price,
  AddToCart,
} from "../Styles/ProductCard.Style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { AddToCart as AddToCartAction } from "../Store/actions/CartActions";
import slugify from "slugify";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { name, images, price } = product;
  const dispatch = useDispatch();
  return (
    <Card href={"/" + slugify(name)}>
      <Header>
        <span>{name}</span>
      </Header>
      <Images>
        <Swiper style={{ width: "100%" }}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={"preview" + index}
                style={{ width: "100%", height: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Images>
      <Price>
        <span>{price} TL</span>
      </Price>
      <AddToCart
        onClick={(e) => {
          e.preventDefault();
          dispatch(AddToCartAction(product));
        }}
      >
        <span>Sepete Ekle</span>
      </AddToCart>
    </Card>
  );
};

export default ProductCard;
