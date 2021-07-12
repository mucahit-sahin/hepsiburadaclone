import styled from "styled-components";

export const Product = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;
export const ProductCategory = styled.div`
  display: flex;
  flex-direction: row;
  color: #919191;
  font-size: 12px;
  font-weight: 700;
  margin: 5px;
  & > span {
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & > span:not(:last-child):after {
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    display: flex;
    align-items: center;
    margin-left: 5px;
    height: 5px;
    width: 5px;
  }
`;
export const Content = styled.section`
  display: flex;
  flex-direction: row;
  border: solid 1px #e5e5e5;
  border-radius: 8px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const ImageBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    height: 400px;
  }
`;
export const Slides = styled.div`
  position: relative;
  height: 500px;
  z-index: 5;
  & > div {
    position: absolute;
    z-index: 3;
    left: ${(props) => props.left}px;
    transition: all 0.5s ease;
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  & > div img {
    margin: 10px;
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
  & > button {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    color: #919191;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: #000000 0px 0px 10px 0px;
    padding: 0px;
    margin: 0px;
    z-index: 5;
    top: 50%;
    transform: translateY(-50%);
  }
  & > button:first-child {
    left: 0px;
  }
  & > button:last-child {
    right: 0px;
  }
`;
export const PreviewImages = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 50px;
  & > div {
    transition: all 0.5s ease;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  & > div img {
    margin: 10px;
    width: 50px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  & > div img:nth-child(${(props) => props.active + 1}) {
    border: 3px solid #ff6000;
  }
  & > button {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: #919191;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0px;
    margin: 0px;
  }
  & > button:first-child {
    left: 0px;
  }
  & > button:last-child {
    right: 0px;
  }
`;

export const Details = styled.div`
  width: 50%;
  position: relative;
  z-index: 5;
  background-color: #f5f5f5;
  border-radius: 0px 0px 8px;
  padding: 20px 24px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const ProductName = styled.span`
  display: block;
  color: #484848;
  font-family: -apple-system;
  font-size: 17px;
  font-weight: 600;
  margin: -24px -24px 0px;
  padding: 24px 24px 0px;
`;
export const BrandName = styled.span`
  display: block;
  color: #537ecf;
  font-family: -apple-system;
  font-size: 15px;
  font-weight: 600;
`;
export const PriceandRatings = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  & > div > span {
    background-color: #f90909;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 4px 3px;
    text-align: center;
    width: 60px;
    height: 60px;
  }
  & > div > span > span {
    font-size: 21px;
  }
  & > div > div {
    display: flex;
    flex-direction: column;
  }
  & > div > div > span:first-child {
    color: #9e9e9e;
    font-size: 19px;
    margin: 1px 0px;
    padding: 0px 0px 0px 10px;
    text-align: left;
    text-decoration: line-through;
  }
  & > div > div > span:last-child {
    color: #484848;
    font-size: 32px;
    font-weight: 600;
    padding: 0px 0px 0px 10px;
  }
`;
export const AddToCardRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  margin-top: 20px;
  & > div {
    display: flex;
    flex-direction: row;
    margin-right: 10px;
  }
  & > div > button {
    background-color: #bfbfbf;
    color: #484848;
    font-size: 16px;
    font-weight: 600;
    width: 27px;
    padding: 8px;
    border: none;
  }
  & > div > button:first-child {
    border-radius: 5px 0px 0px 5px;
  }
  & > div > button:last-child {
    border-radius: 0px 5px 5px 0px;
  }
  & > div > div {
    font-size: 13px;
    width: 39px;
    border: 2px solid #bfbfbf;
    border-left: 0;
    border-right: 0;
  }
  & > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #ff6000;
    color: #fff;
    border: 0;
    border-radius: 5px;
  }
  & > button > i {
    margin-left: 18px;
  }
  & > button > span {
    font-size: 15px;
    padding: 16px 24px 16px 10px;
  }
`;
export const SellerRow = styled.div`
  height: 32px;
  display: inline-block;
  margin-top: 10px;
  margin-right: 8px;
  padding: 7px 10px 6px;
  background-color: #fff;
  border: 1px solid #ddd;
  font-family: Helvetica, Roboto, Arial, sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #919191;
  & > span:last-child {
    color: #537ecf;
    max-width: 155px;
    padding-left: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
