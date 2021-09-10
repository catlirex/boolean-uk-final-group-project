import React, { SyntheticEvent } from "react";
import useStore from "../store";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const StyledImg = styled.img`
  height: 100px;
  widhth: 120px;
`;

export const MyToggleList = withStyles(() => ({
  root: {
    margin: "10px",
    padding: "10px",
    overflow: "scroll",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}))(ToggleButtonGroup);

export const MyToggleButton = withStyles(() => ({
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
}))(ToggleButton);

export default function AirportList() {
  const chooseAirport = useStore((state) => state.chooseAirport);
  const setChooseAirport = useStore((state) => state.setChooseAirport);
  const airportList = useStore((state) => state.airportList);

  console.log("List", airportList);

  const handleAirport = (e: SyntheticEvent, newAirport: string) => {
    e.preventDefault();

    setChooseAirport(newAirport);
  };

  console.log(chooseAirport);

  return (
    <MyToggleList value={chooseAirport} exclusive onChange={handleAirport}>
      {airportList?.map((airport) => {
        return (
          <MyToggleButton value={airport.id}>
            <StyledImg src={airport.cityImage} alt="" />
            {airport.name}, {airport.id}, {airport.city}
          </MyToggleButton>
        );
      })}
    </MyToggleList>
  );
}
