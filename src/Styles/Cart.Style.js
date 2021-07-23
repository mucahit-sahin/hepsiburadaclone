import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
`;
export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  color: #3a3a3a;
  & > h1 {
    font-weight: 600;
  }
  & > p {
    margin-top: 8px;
    max-width: 500px;
    text-align: center;
    font-weight: normal;
  }
`;

export const ContentCol = styled.div`
  width: calc(100% - 260px);
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > h1 {
    font-weight: 600;
    color: #3a3a3a;
  }
  & > span {
    color: #646464;
    font-size: 18px;
    padding: 11px 0px 0px 9px;
  }
`;
export const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
export const CartItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 30px 0px 16px;
  border-bottom: 0.1rem solid #e5e5e5;
  position: relative;
`;
export const CartItemImage = styled.div`
  margin: 0px 10px;
  & > img {
    width: 100px;
    height: 100px;
  }
`;
export const CartItemProperties = styled.div`
  display: flex;
  flex-direction: column;
  & > div:firstchild {
    display: flex;
    flex-direction: row;
  }
`;
export const ProductName = styled.span`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 2px;
  color: #3a3a3a;
`;
export const Seller = styled.span`
  font-size: 12px;
  color: #646464;
  margin: 0px 8px 0px 0px;
  & > span {
    color: #ff6000;
  }
`;
export const DueDate = styled.span`
  font-size: 12px;
  color: #646464;
  margin: 0px 8px 0px 0px;
`;
export const Price = styled.div`
  color: #484848;
  font-size: 18px;
  font-weight: 700;
`;
export const CartActions = styled.div`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  height: inherit;
  align-items: center;
  & > button {
    width: 34px;
    height: 34px;
    color: #ff6000;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: #000000 0px 0px 10px 0px;
    &:hover {
      background-color: #ff6000;
      color: white;
    }
  }
  & > span {
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Sidebar = styled.div`
  position: sticky;
  top: 50px;
  width: 250px;
  height: min-content;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  margin-left: auto;
  padding: 24px 23px;
`;
export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  & > span:first-child {
    font-size: 12px;
    font-weight: 600;
    color: #646464;
    margin-bottom: 4px;
  }
  & > span:last-child {
    font-size: 28px;
    font-weight: 600;
    color: #3a3a3a;
  }
`;

export const AddToCart = styled.button`
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  padding: 8px;
  background-color: rgb(255, 96, 0);
  color: rgb(255, 255, 255);
  font-size: 16px;
  height: 48px;
  min-width: 160px;
`;
export const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & > div {
    display: flex;
    & > span {
      color: #646464;
      font-size: 12px;
      font-weight: 600;
    }
    & > span:last-child {
      margin: 0px 0px 0px auto;
    }
  }
`;
