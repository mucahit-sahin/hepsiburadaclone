import React from "react";
import styled from "styled-components";
//styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Message = styled.h3`
  font-size: 14px;
  color: #919191;
  & > b {
    color: black;
    font-size: 18px;
  }
`;
//component
const NotFound = ({ value }) => {
  return (
    <Container>
      <Message>
        <b>“{value}” </b>ile ilgili sonuç bulunamamıştır.
      </Message>
    </Container>
  );
};

export default NotFound;
