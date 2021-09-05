import React from "react";
import FlightStatusFrom from "../Component/FlightStatus/Form";
import styled from "styled-components";
import useStore from "../store";
import { useEffect } from "react";
import StatusDisplayContainer from "../Component/FlightStatus/StatusDisplayContainer";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 300px 1fr;
  margin: 20px;
`;

export default function FlightStatusPage() {
  const flightStatus = useStore((state) => state.flightStatus);
  useEffect(() => {
    console.log(flightStatus);
  }, [flightStatus]);

  return (
    <StyledMain>
      <FlightStatusFrom />

      <StatusDisplayContainer />
    </StyledMain>
  );
}
