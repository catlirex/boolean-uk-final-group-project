import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useStore from "../store";
import BookingCard from "../Component/MyBooking/BookingCard";

const StyledMain = styled.main`
  padding: 20px 50px;
`;
const StyledUl = styled.ul`
  display: grid;
  grid-auto-flow: column;
  padding: 20px 0;
  gap: 20px;
`;

export default function MyBookingPage() {
  const userBooking = useStore((state) => state.userBooking);
  const getUserBooking = useStore((state) => state.getUserBooking);
  const loggedInUser = useStore((state) => state.loggedInUser);
  const setModal = useStore((state) => state.setModal);

  useEffect(() => {
    if (!loggedInUser) setModal("logIn");
  }, [loggedInUser]);

  useEffect(() => {
    getUserBooking();
  }, []);
  return (
    <StyledMain>
      <h1>My Booking</h1>
      <StyledUl>
        {userBooking?.length
          ? userBooking.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          : null}
      </StyledUl>
    </StyledMain>
  );
}
