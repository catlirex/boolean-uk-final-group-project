import React from "react";
import useStore from "../store";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const StyledList = styled.li`
  margin: 10px;
  padding: 10px;
  overflow: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledImg = styled.img`
  height: 100px;
  widhth: 120px;
`;

export const PinkButton = withStyles(() => ({
  root: {
    height: "50px",
    fontSize: "12px",
    WebkitBorderRadius: "10px",
    margin: "5px",
    padding: "50px",
    borderRadius: 0,
    color: APP_COLOR.black,
    backgroundColor: APP_COLOR.lightPink,
    "&:hover": {
      backgroundColor: APP_COLOR.lightGrey,
    },
  },
}))(Button);

export default function AirportList() {
  const airportList = useStore((state) => state.airportList);
  return (
    <StyledList>
      {airportList?.map((airport) => {
        return (
          <PinkButton>
            <StyledImg src={airport.cityImage} alt="" />
            {airport.name}, {airport.id}, {airport.city}
          </PinkButton>
        );
      })}
    </StyledList>
  );
}
