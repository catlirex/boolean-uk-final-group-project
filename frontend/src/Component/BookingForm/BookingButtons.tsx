import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

type BookingButtonsTypes = {
  valueToShow: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};
const BookingButtons = ({
  valueToShow,
  handleIncrement,
  handleDecrement,
}: BookingButtonsTypes) => {
  // const [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  //   const newCount = counter + 1;
  //   setCounter(newCount);
  //   setNumberOfPassangers(newCount);
  //   handlePas();
  // };

  // const handleDecrement = () => {
  //   const newCount = counter - 1;
  //   setCounter(newCount);
  // };

  // const displayCounter = counter > 0;

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={handleIncrement}>+</Button>
      {<Button disabled>{valueToShow}</Button>}
      {<Button onClick={handleDecrement}>-</Button>}
    </ButtonGroup>
  );
};

export default BookingButtons;
