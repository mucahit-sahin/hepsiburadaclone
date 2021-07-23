import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  backgroud-color: blue;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100vw;
  }
`;

export const Logo = styled.div`
  display: flex;
  color: #ff6000;
  font-size: 30px;
  font-weight: 700;
  width: 262px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: min-content;
    font-size: 20px;
    margin: 10px 15px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 440px;
  height: 50px;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const SearchCol = styled.div`
  flex: 0.9;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0px;
  background-color: white;

  @media (max-width: 500px) {
    width: 100%;
    border: 1px solid #e5e5e5;
    margin: 0px;
    position: static;
  }
  z-index: ${(props) => props.searchFocus && "2"};
  border: ${(props) =>
    props.searchFocus ? "2px solid #ff6000" : "2px solid #919191"};
  & > div {
    display: flex;
    flex-direction: row;
  }
  & > div:last-child {
    display: ${(props) => (props.searchFocus ? "flex" : "none")};
    flex-direction: row;
    color: #9b9b9b;
    font-size: 12px;
    padding: 16px 32px 16px;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
export const SearchIcon = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
`;
export const Input = styled.input`
  font-size: 15px;
  font-weight: 700;
  color: #484848;
  background-color: #ffffff;
  border: none;
  outline: none;
  width: 312px;
  &:focus + button {
    background-color: #ff6000;
  }
  &:focus + button {
    background-color: #ff6000;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const SearchButton = styled.button`
  flex: 0.1;
  background-color: ${(props) => (props.searchFocus ? "#ff6000" : "#919191")};
  border: 2px solid ${(props) => (props.searchFocus ? "#ff6000" : "#919191")};
  color: white;
  font-size: 15px;
  font-weight: 600;
  padding: 0px 16px;
  outline: none;
  margin: 0px 0px 0px auto;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const MyAccount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #919191;
  border-radius: 5;
  margin: 0px 0px 0px 12px;
  padding: 9px 10px 6px 15px;
  width: 157px;
  @media (max-width: 500px) {
    display: none;
  }
  & > div:first-child svg {
    color: #919191;
    margin-right: 10px;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
  }
  & > div:last-child span:first-child {
    color: #484848;
    font-size: 15px;
    font-weight: 700;
  }
  & > div:last-child span:last-child {
    color: #484848;
    font-size: 10px;
  }
`;
export const MyCart = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  background-color: #919191;
  width: 136px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  margin: 0px 0px 0px 12px;
  padding: 15px 24px 14px 14px;
  color: white;
  & svg {
    margin-right: 10px;
  }
  & > div > span {
    min-width: 20px;
    width: auto;
    height: 20px;
    display: block;
    font-size: 12px;
    padding-top: 2px;
    background-color: #fff;
    border: 2px solid #919191;
    border-radius: 10px;
    color: #919191;
    text-align: center;
    position: absolute;
    left: 28px;
    top: 7px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
