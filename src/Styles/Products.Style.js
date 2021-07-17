import styled from "styled-components";

export const ProductsStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0px auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  & > h1 {
    color: #484848;
    font-family: -apple-system;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0.33px;
  }
  & > div {
    margin: 0px 0px 0px auto;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    box-shadow: #000000 0px 1px 2px 0px;
    color: #484848;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 19.6px;
    padding: 0px 8px;
    & > .fa-arrow-down {
      font-size: 10px;
      margin-left: 5px;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
`;
export const OptionsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  margin: 10px 10px 0px 0px;
`;
export const ChildrenCategories = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 240px;
  & > div:first-child {
    color: #484848;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.32px;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  & > div:last-child > span {
    padding: 8px;
    max-width: 170px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.28px;
    color: #484848;
    word-wrap: break-word;
    &:hover {
      color: #ff873f;
      border-right: 3px solid #ff873f;
    }
  }
`;
export const Brands = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  & > div:first-child {
    color: #484848;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.32px;
  }
  & > div:last-child {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    & > div:first-child {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      & > i {
        color: #484848;
        font-size: 14px;
      }
      & > input {
        border: none;
        outline: none;
        margin-left: 10px;
      }
    }
    & > div:last-child {
      margin-top: 10px;
      overflow-y: scroll;
      height: 240px;
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px;
        position: relative;
        & > input[type="checkbox"] {
          appearance: none;
          height: 20px;
          width: 20px;
          border: 2px solid #9b9b9b;
          border-radius: 5px;
          font-size: 14px;
          margin: 0px 3px 0px 0px;
          &:checked {
            border: 2px solid rgb(255, 96, 0);
            &:after {
              content: "\f105";
              font-family: "Font Awesome 5 Free";
              position: absolute;
              z-index: 5;
              color: black;
              height: inherit;
              width: inherit;
            }
          }
        }
      }
    }
  }
`;
export const ProductsCol = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  grid-gap: 24px 20px;
`;
