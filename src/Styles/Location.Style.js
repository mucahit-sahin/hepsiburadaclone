import styled from "styled-components";

export const Location = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 165px;
    height: 48px;
    padding: 4px 16px;
    margin-left: 15px;
    background: ${(props) => props.modal && "#eee"};
  }
  & > div:first-child > div:first-child {
    margin-right: 12px;
  }
  & > div:first-child > div:last-child {
    display: flex;
    flex-direction: column;
  }
  & > div:first-child span:first-child {
    color: #484848;
    font-size: 14px;
    letter-spacing: -0.15px;
    font-weight: 600;
  }
  & > div:first-child span:last-child {
    color: #ff6000;
    display: flex;
    font-size: 12px;
    letter-spacing: -0.13px;
  }
`;
export const LocationModal = styled.div`
  position: absolute;
  z-index: 6;
  top: 50px;
  right: 0px;
  width: 225px;
  padding: 24px 16px 16px;
  display: flex;
  flex-direction: column;
  background-color: white;
  & > span {
    font-size: 14px;
    font-weight: 600;
    color: #484848;
    margin-bottom: 16px;
  }
  & > input {
    padding: 12px 30px 12px 16px;
    background-color: #eee;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #eee;
  }
`;
export const ChooseCity = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 12px;
  height: 192px;
  background-color: white;
  & > div:first-child {
    display: flex;
    flex-direction: row;
  }
  & > div:first-child > svg {
    flex: 0.1;
  }
  & > div:first-child > input {
    flex: 0.9;
    border: none;
    outline: none;
    font-size: 14px;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  & > div:last-child > span {
    padding: 12px 16px;
    color: #484848;
  }
`;
