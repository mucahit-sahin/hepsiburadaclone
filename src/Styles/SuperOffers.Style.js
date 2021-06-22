import styled from "styled-components";
export const Container = styled.div`
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Header = styled.div`
  display: flex;
  margin: 35px 0px 24px 10px;
  letter-spacing: 0.5px;
  font-size: 32px;
  font-weight: 700;
  color: #484848;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 375px;
  position: relative;
  & > button {
    position: absolute;
    z-index: 5;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    background-color: white;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 24%);
  }
  & > button:first-child {
    left: 0;
  }
  & > button:last-child {
    right: 0;
  }
  & > div > div:not(:first-child),
  & > div > div:not(:last-child) {
    margin: 0px 10px;
  }
  & > div > div:first-child {
    margin: 0px 10px 0px 0px;
  }
  & > div > div:last-child {
    margin: 0px 0px 0px 10px;
  }
  @media (max-width: 500px) {
    overflow-x: scroll;
    height: 300px;
    & > button {
      display: none;
    }
  }
`;
export const SuperOfferList = styled.div`
  position: absolute;
  z-index: 3;
  left: ${(props) => props.left}px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  transition: all 0.5s ease;
  &::-webkit-scrollbar {
    display: none;
  }
`;
