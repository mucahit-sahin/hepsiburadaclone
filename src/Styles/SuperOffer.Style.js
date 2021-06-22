import styled from "styled-components";
export const Container = styled.div`
  width: 222px;
  color: #0000ee;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 24px 12px 33px;
  text-align: center;
  position: relative;
  z-index: 2;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 8px;
  &:hover {
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 16px 0px;
  }
`;
export const Header = styled.div`
  color: #484848;
  font-size: 12px;
  margin: 4px 0px 13px;
  padding: 0px 4px;
`;
export const ImgBox = styled.div`
  height: 182px;
  @media (max-width: 500px) {
    height: 150px;
    & > img {
      height: 100%;
    }
  }
`;
export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  & > span:first-child {
    font-weight: bold;
    color: rgb(255, 96, 0);
    font-size: 20px;
    letter-spacing: -0.27px;
    line-height: 1.2;
  }
  & > span:last-child {
    color: rgb(155, 155, 155);
    font-size: 14px;
    letter-spacing: -0.15px;
    line-height: 16px;
    text-decoration: line-through;
  }
`;
export const AddToCart = styled.div`
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  height: 48px;
  min-width: 160px;
  background-color: rgba(255, 96, 0, 0.12);
  border-radius: 8px;
  color: #ff6000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: -apple-system;
  font-weight: 600;
  padding: 8px;
  text-align: center;
`;
