import React, { ChangeEvent, useState } from "react";
import { TicketType } from "../../store";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { APP_COLOR } from "../../consistent";
import { useHistory } from "react-router";

const SquareButton = withStyles(() => ({
  root: {
    height: "auto",
    width: "15vw",
    fontSize: "0.8rem",
    color: APP_COLOR.white,
    backgroundColor: APP_COLOR.sharpPick,
    boxShadow: `0 0 5px 0 ${APP_COLOR.lightGrey}`,
    placeSelf: "center",
    "&:hover": {
      backgroundColor: APP_COLOR.pink,
    },
  },
}))(Button);

const Styledli = styled.li`
  padding: 20px;
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }
  .mealRequest {
    display: grid;
  }
`;

const getRandomElement = (array: string[]) => {
  const number = Math.floor(Math.random() * array.length);
  return array[number];
};

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seat = ["A", "B", "C", "D", "E", "F"];

type Props = {
  ticket: TicketType;
  index: number;
};

export default function CheckInCard({ ticket, index }: Props) {
  const ramdomSeat = [getRandomElement(seat), getRandomInt(1, 50)];
  const [ticketData, setTicketData] = useState(ticket);
  const [meal, setMeal] = useState("regular");
  const [save, setSave] = useState(ticket.passengerFirstName ? true : false);

  const history = useHistory();

  const handleChange = (
    e: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setMeal(e.target.value as string);
  };
  console.log(meal);
  const handleSubmit = (e: React.FormEvent) => {
    const target = e.target as typeof e.target & {
      firstName: { value: string };
      lastName: { value: string };
      passport: { value: string };
      seat: { value: string };
    };
    e.preventDefault();
    const updateTicket = {
      passengerFirstName: target.firstName.value,
      passengerLastName: target.lastName.value,
      passpostNumber: target.passport.value,
      seatNumer: target.seat.value,
      specialMeal: meal,
      status: "ONLINECHECKIN",
    };
    fetch(`http://localhost:3000/tickets/${ticket.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTicket),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((updated) => {
        console.log(updated);

        setTicketData(updated.data);
        setSave(true);
      });
  };

  if (!save)
    return (
      <Styledli>
        <h2>Passenger {index + 1}</h2>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <TextField name="firstName" label="First Name" required />
          <TextField name="lastName" label="Last Name" required />
          <TextField name="passport" label="Passport Number" required />
          <TextField
            name="seat"
            label="Seat Number"
            value={ramdomSeat.join("")}
          />
          <div className="mealRequest">
            <InputLabel id="mealRequest">Meal request</InputLabel>
            <Select
              labelId="mealRequest"
              name="meal"
              value={meal}
              onChange={(
                e: ChangeEvent<{ name?: string | undefined; value: unknown }>
              ) => handleChange(e)}
            >
              <MenuItem value={"regular"} selected>
                Regular
              </MenuItem>
              <MenuItem value={"vegan"}>Vegan</MenuItem>
              <MenuItem value={"halal"}>Halal</MenuItem>
              <MenuItem value={"lowSalt"}>Low Salt</MenuItem>
              <MenuItem value={"child"}>Child</MenuItem>
            </Select>
          </div>
          <SquareButton type="submit">Save</SquareButton>
        </form>
      </Styledli>
    );
  else
    return (
      <Styledli>
        <h2>Passenger {index + 1}</h2>
        <div className="form">
          <p>First name: {ticketData.passengerFirstName}</p>
          <p>Last Name: {ticketData.passengerLastName}</p>
          <p>Passport Number: {ticketData.passpostNumber}</p>
          <p>Seat Number: {ticketData.seatNumer}</p>
          <p>Meal Request: {ticketData.specialMeal}</p>
          <SquareButton disabled>Saved</SquareButton>
        </div>
      </Styledli>
    );
}
