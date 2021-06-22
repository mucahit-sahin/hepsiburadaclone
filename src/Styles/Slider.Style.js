import styled from "styled-components";

export const Slider = styled.div`
  width: 100%;
  height: 540px;
  position: relative;
  background-color: ${(props) =>
    props.buttonColor ? props.bgcolor : "#ee6821"};
  overflow: hidden;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  padding: 18px 0px 13px;
`;
export const HeaderItem = styled.div`
  position: relative;
  background-color: ${(props) => props.active && "white"};
  padding: 8px 16px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0);
  color: ${(props) => props.active && "#484848"};
  font-size: 14px;
  font-weight: 600;

  & :after {
    ${(props) =>
      props.active &&
      `content: "";
    position: absolute;
    left: calc(50% - 8px);
    width: 0;
    height: 0;
    border-top: 8px solid #fff;
    border-left: 8px solid rgba(0, 0, 0, 0);
    border-right: 8px solid rgba(0, 0, 0, 0);
    bottom: -5px;
    `}
  }
`;
export const Content = styled.div`
  position: relative;
  background-color: white;
  width: 1088px;
  height: 386px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;
export const Description = styled.div`
  color: #484848;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 56px 48px 48px;
  width: 408px;
  position: relative;
  & > div:first-child {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 16px;
    margin-right: 16px;
    border-radius: 50%;
    padding: 5px 11px;
  }
  & > div:first-child:hover {
    background-color: #eeeeee;
  }
  & > div:first-child svg {
    stroke: black;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
  & span:nth-child(1) {
    margin-top: 8px;
    font-size: 24px;
    max-height: 100px;
    overflow: hidden;
  }
  & span:nth-child(2) {
    margin-top: 8px;
    font-size: 32px;
    font-weight: 600;
    max-height: 100px;
    overflow: hidden;
  }
`;
export const ImageCard = styled.div`
  width: 680px;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: inherit;
    height: 380px;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  border-radius: 24px;
  margin-right: auto;
  min-width: 50px;
  display: flex;
  background-color: ${(props) =>
    props.buttonColor ? props.buttonColor : "#ff6000"};
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border: none;
`;
export const SlidesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 0px 32px;
  margin-top: 18px;
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding: 0px 20px;
    border-radius: 18px;
    border: 2px solid #fff;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.15px;
    text-align: center;
    background-color: transparent;
  }
  & > button:first-child {
    margin-right: 10px;
  }
  & > button:last-child {
    margin-left: 10px;
  }
  & svg {
    stroke: white;
  }
  & span {
  }
`;
export const Slides = styled.div`
  display: flex;
  flex-direction: row;
  & > img:not(:last-child) {
    margin-right: 5px;
  }
`;
export const SlideItem = styled.img`
  width: 56px;
  height: 40px;
  border-radius: 10px;
  border: ${(props) => props.active && "2px solid white"};
`;
//mobile slider
export const MobileSlideStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: scroll;
`;
export const MobileHeaderItem = styled.div`
  font-size: ${(props) => (props.active ? "20" : "14")}px;
  color: ${(props) => (props.active ? "#484848" : "#919191")};
  font-weight: 600;
  margin-left: 15px;
`;

export const MobileContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 260px;
  width: 100%;
  position: relative;
  padding: 10px;
`;
export const MobileSlideItem = styled.div`
  position: absolute;
  left: ${(props) => props.index * 100}%;
  margin: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  background-color: #ff5906;
  border-radius: 10px;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
  }
  & > div:first-child > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  & > div:last-child {
    height: 20%;
    width: inherit;
    background-color: #ff5906;
    font-size: 16px;
    color: white;
    letter-spacing: -0.32px;
    padding: 8px 16px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
//export const SlideItem = styled.div``;
//export const SlideItem = styled.div``;
