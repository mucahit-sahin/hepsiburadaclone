import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  backgroud-color: blue;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

export const Logo = styled.div`
  display: flex;
  color: #ff6000;
  font-size: 30px;
  font-weight: 700;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 440px;
  height: 50px;
`;
export const SearchCol = styled.div`
  flex: 0.9;
  display: flex;
  flex-direction: column;
  position: absolute;
  border: ${(props) =>
    props.searchFocus ? "2px solid #ff6000" : "2px solid #919191"};
  & > div {
    display: flex;
    flex-direction: row;
  }
  & > div:last-child {
    display: ${(props) => (props.searchFocus ? "flex" : "none")};
    flex-direction: row;
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
`;
export const SearchButton = styled.button`
  flex: 0.1;
  background-color: ${(props) => (props.searchFocus ? "#ff6000" : "#919191")};
  color: white;
  font-size: 15px;
  font-weight: 600;
  padding: 0px 16px;
  outline: none;
  border: none;
  margin: 0px 0px 0px auto;
`;
