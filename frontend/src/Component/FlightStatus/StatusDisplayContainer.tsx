import React from "react";
import useStore from "../../store";
import styled from "styled-components";
import StatusResult from "./StatusResult";
const StyledContainer = styled.div`
  margin: 20px;
`;

export default function StatusDisplayContainer() {
  const flightStatus = useStore((state) => state.flightStatus);

  return (
    <StyledContainer>
      {flightStatus === undefined ? (
        <h2>Flight not found</h2>
      ) : flightStatus === null ? null : (
        <StatusResult />
      )}
    </StyledContainer>
  );
}
