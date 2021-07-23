import styled from "styled-components";

export const Card = styled.a`
  border-radius: 8px;
  text-decoration: none;
  box-shadow: rgb(0 0 0 / 16%) 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  position: relative;
  &:hover {
    & > button {
      display: flex;
    }
  }
`;
export const Header = styled.h3`
  color: #484848;
  font-size: 12px;
  font-weight: normal;
  height: 36px;
  letter-spacing: -0.24px;
  margin: 0 12px 12px;
  overflow: hidden;
  padding-top: 16px;
  text-align: center;
`;
export const Images = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #484848;
  font-size: 18px;
  font-weight: 700;
`;
export const AddToCart = styled.button`
  position: absolute;
  left: 50%;
  bottom: 20px;
  z-index: 50;
  transform: translateX(-50%);
  width: 80%;
  background-color: #e35600;
  border-radius: 8px;
  border: none;
  padding: 12px;
  color: #ffffff;
  display: none;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
