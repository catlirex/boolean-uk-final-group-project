import React, { useState } from "react";
import useStore, { FlightSearchTypeOne } from "../../store";
import styled from "styled-components";
import { APP_COLOR } from "../../consistent";
import FlightIcon from "@material-ui/icons/Flight";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import WorkIcon from "@material-ui/icons/Work";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

type Props = {
  data: FlightSearchTypeOne;
};

const SquareButton = withStyles(() => ({
  root: {
    height: "auto",
    width: "15vw",
    fontSize: "0.8rem",
    color: APP_COLOR.white,
    backgroundColor: APP_COLOR.pink,
    boxShadow: `0 0 5px 0 ${APP_COLOR.lightGrey}`,
    placeSelf: "center",
    "&:hover": {
      backgroundColor: APP_COLOR.lightPink,
    },
  },
}))(Button);

const StyledLi = styled.li`
  box-shadow: 0 0 5px 0px ${APP_COLOR.sharpPick};
  border-radius: 5px;

  .key-info {
    display: grid;
    grid-template-columns: 150px 1fr 10vh;
    padding: 20px 10px;
    background-color: ${APP_COLOR.lightPink};
  }
  .flightIcon {
    width: 50px;
    height: 50px;
    transform: rotate(90deg);
  }
  .place-center {
    display: grid;
    place-items: center;
  }
  .operation-info {
    display: grid;
    gap: 5px;
    padding: 5px;
  }
  span {
    color: ${APP_COLOR.black};
  }
  p {
    font-weight: 600;
    font-size: 0.8rem;
  }
  .status {
    padding-top: 10px;
    font-size: 1.3rem;
    color: ${APP_COLOR.sharpPick};
  }
  .card-container {
    display: grid;
    grid-template-columns: 150px 1fr 20vw;
  }
  .togglePrice {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    align-content: space-between;
  }
  .class-price {
    background-color: ${APP_COLOR.lightGrey};
    display: grid;
    gap: 5px;
    place-items: center;
    justify-self: center;
    padding: 20px;
    align-content: space-between;
    text-align-last: center;
    width: 100%;
  }
  .icon {
    fill: ${APP_COLOR.sharpPick};
  }
  .tick {
    fill: green;
  }
  .two-column-space-between {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }
`;
export default function ResultCard({ data }: Props) {
  const { date, flightNumber, economicPrice, businessPrice, firstClassPrice } =
    data;
  const { id, arrivalAirportId, departureAirportId, durationHour } =
    flightNumber;
  const airportList = useStore((state) => state.airportList);
  const departAirport = airportList?.find(
    (target) => target.id === arrivalAirportId
  );
  const arrivalAirport = airportList?.find(
    (target) => target.id === departureAirportId
  );
  const [priceDisplayed, setPriceDisplayed] = useState(false);

  const handleClick = () => {
    setPriceDisplayed(!priceDisplayed);
  };
  return (
    <StyledLi>
      <div className="card-container">
        <div className="operation-info">
          <span className="status">{id}</span>
          <span>Date: {date}</span>
        </div>
        <div className="key-info place-center">
          <div>
            <h2>{departAirport?.id}</h2>
            <p>{departAirport?.name}</p>
            <p>{departAirport?.city}</p>
          </div>
          <div className="place-center">
            <FlightIcon className="flightIcon" />
            <p>Duration {durationHour}h</p>
          </div>
          <div>
            <h2>{arrivalAirport?.id}</h2>
            <p>{arrivalAirport?.name}</p>
            <p>{arrivalAirport?.city}</p>
          </div>
        </div>
        <SquareButton variant="contained" onClick={() => handleClick()}>
          Show prices from £{economicPrice}{" "}
        </SquareButton>
      </div>
      <div
        className="togglePrice"
        style={{ display: `${priceDisplayed ? "grid" : "none"}` }}
      >
        <div className="class-price">
          <h2>First class</h2>
          <div className="two-column-space-between">
            <WorkIcon className="icon" />
            <span>{flightNumber.airline.firstClassLuggage}KG</span>
          </div>
          <div className="two-column-space-between">
            <FastfoodIcon className="icon" />
            <DoneOutlineIcon className="tick" />
          </div>
          <div className="two-column-space-between">
            <span>Lounge Access</span>
            <DoneOutlineIcon className="tick" />
          </div>
          <div className="two-column-space-between">
            <span>Free rebook</span>
            <DoneOutlineIcon className="tick" />
          </div>
          <div className="two-column-space-between">
            <LocalOfferIcon className="icon" />
            <h3>£ {firstClassPrice}</h3>
          </div>

          <SquareButton variant="contained">Select</SquareButton>
        </div>
        <div className="class-price">
          <h2>Business class</h2>
          <div className="two-column-space-between">
            <WorkIcon className="icon" />
            <span>{flightNumber.airline.businessLuggage}KG</span>
          </div>
          <div className="two-column-space-between">
            <FastfoodIcon className="icon" />
            <DoneOutlineIcon className="tick" />
          </div>
          <div className="two-column-space-between">
            <span>Lounge Access</span>
            <DoneOutlineIcon className="tick" />
          </div>

          <div className="two-column-space-between">
            <LocalOfferIcon className="icon" />
            <h3>£ {businessPrice}</h3>
          </div>

          <SquareButton variant="contained">Select</SquareButton>
        </div>
        <div className="class-price">
          <h2>Econ class</h2>
          <div className="two-column-space-between">
            <WorkIcon className="icon" />
            <span>{flightNumber.airline.economicLuggage}KG</span>
          </div>
          <div className="two-column-space-between">
            <LocalOfferIcon className="icon" />
            <h3>£ {economicPrice}</h3>
          </div>
          <SquareButton variant="contained">Select</SquareButton>
        </div>
      </div>
    </StyledLi>
  );
}
