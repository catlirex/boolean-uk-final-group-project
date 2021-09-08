import { SignalCellularNullRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import BookingForm from "../Component/BookingForm/BookingForm";
import ResultCard from "../Component/SearchResult/ResultCard";
import useStore from "../store";

export default function BookingFormPage() {
  const outboundBooking = useStore((state) => state.outboundBooking);
  const flightSearch = useStore((state) => state.flightSearch);
  const flightSearchNoDate = useStore((state) => state.flightSearchNoDate);

  return (
    <div>
      <h1>booking form</h1>;
      <BookingForm />
    </div>
  );
}
