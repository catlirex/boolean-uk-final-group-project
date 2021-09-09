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
  const displayCounter = valueToShow > 0;

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={handleIncrement}>+</Button>
      {displayCounter && <Button disabled>{valueToShow}</Button>}
      {displayCounter && <Button onClick={handleDecrement}>-</Button>}
    </ButtonGroup>
  );
};

export default BookingButtons;
