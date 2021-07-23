import React from "react";
import {
  CartItem as CartItemStyl,
  CartItemImage,
  CartItemProperties,
  DueDate,
  Price,
  ProductName,
  Seller,
  CartActions,
} from "../Styles/Cart.Style";
import {
  AddToCart as AddToCartAction,
  DescreaseProduct,
} from "../Store/actions/CartActions";
import { formatToCurrency } from "../Utils/utils";
import { useDispatch } from "react-redux";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <CartItemStyl>
      <CartItemImage>
        <img src={product.images[0]} alt="product" />
      </CartItemImage>
      <CartItemProperties>
        <ProductName>{product.name}</ProductName>
        <div>
          <Seller>
            Satıcı: <span>{product.seller}</span>
          </Seller>
          <DueDate>Due Date Text</DueDate>
        </div>
        <Price>
          <span>
            {formatToCurrency(product.price * product.quantity)}
            TL
          </span>
        </Price>
        <CartActions>
          <button onClick={() => dispatch(AddToCartAction(product))}>
            <i class="fas fa-plus"></i>
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => dispatch(DescreaseProduct(product))}>
            <i class="fas fa-minus"></i>
          </button>
        </CartActions>
      </CartItemProperties>
    </CartItemStyl>
  );
};

export default CartItem;
