import styled from "styled-components";

export const Menu = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  & > div {
    width: 1200px;
    display: block;
    margin: 0 auto;
    position: relative;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
export const MenuItems = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 56px;
  color: #646464;
  font-weight: 600;
  font-size: 14px;
  padding: 20px 22px;
  &:hover {
    background-color: white;
    color: #ff6000;
  }
  & span {
    max-width: 110px;
    word-wrap: break-word;
    text-align: center;
  }
`;
