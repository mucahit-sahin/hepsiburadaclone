import styled from "styled-components";

export const Border = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  height: 8px;
  & > div:nth-child(1) {
    width: 11%;
    background: #7622da;
  }
  & > div:nth-child(2) {
    width: 18%;
    background: #47c6eb;
  }
  & > div:nth-child(3) {
    width: 31%;
    background: #ed5f1f;
  }
  & > div:nth-child(4) {
    width: 15%;
    background: #f59f28;
  }
  & > div:nth-child(5) {
    width: 13%;
    background: #6b1e5b;
  }
  & > div:nth-child(6) {
    width: 12%;
    background: #45b794;
  }
`;
