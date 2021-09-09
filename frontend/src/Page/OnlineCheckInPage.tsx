import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserBookingType, ScheduledFlightList } from "../store";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import CheckInCard from "../Component/MyBooking/CheckInCard";

const StyledMain = styled.main`
  padding: 20px 50px;
  .checkin-container {
    display: grid;
    grid-template-columns: 2fr 4fr;
    gap: 20px;
    margin-top: 20px;
    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }
  h2 {
    font-weight: 400;
    max-width: 650px;
    font-size: 1.2rem;
    margin: 10px 0;
  }
`;

const StyledDiv = styled.div`
  min-width: 200px;
  box-shadow: 0 0 10px 0;
  border-radius: 10px;
  padding: 10px;
  button span {
    color: ${APP_COLOR.white};
  }
  p {
    font-weight: 600;
    padding: 5px 0px;
  }
  h2 {
    padding: 10px 0px;
  }
  .status {
    padding-top: 10px;
    font-size: 1rem;
    background-color: ${APP_COLOR.lightPink};
    padding: 10px;
    margin: 10px 0;
  }
  .price-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }
  .route-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    background-color: ${APP_COLOR.lightPink};
    padding: 10px;
    margin: 10px 0;
  }
`;

export default function OnlineCheckInPage() {
  const { id } = useParams<{ id: string }>();
  const [booking, setBooking] = useState<UserBookingType | null>(null);
  const [scheduledFlightDetail, setScheduledFlightDetail] =
    useState<ScheduledFlightList | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/bookings/${parseInt(id)}`)
      .then((res) => res.json())
      .then((data: UserBookingType[]) => {
        setBooking(data[0]);
      });
  }, [id]);

  useEffect(() => {
    if (booking?.tickets[0].scheduledFlight) {
      setScheduledFlightDetail(booking.tickets[0].scheduledFlight);
    }
  }, [booking]);
  console.log(booking);

  const dateStringArray = scheduledFlightDetail?.date.toString().split("");
  dateStringArray?.splice(4, 0, "-");
  dateStringArray?.splice(7, 0, "-");
  const displayDate = dateStringArray?.join("");

  if (!booking || !scheduledFlightDetail)
    return (
      <StyledMain>
        <h1>Loading...</h1>
      </StyledMain>
    );
  else
    return (
      <StyledMain>
        <h1>Online Check In # {id}</h1>
        <h2>
          Make sure you check in all passenger before your leave this page.
          Otherwise you need to check in at airport counter
        </h2>

        <div className="checkin-container">
          <StyledDiv>
            <p>{scheduledFlightDetail?.flightNumberId}</p>
            <p>{displayDate}</p>
            <p>{scheduledFlightDetail?.time}</p>
            <div className="route-container">
              <h2>{scheduledFlightDetail?.flightNumber.departureAirportId}</h2>
              <h2>to</h2>
              <h2>{scheduledFlightDetail?.flightNumber.arrivalAirportId}</h2>
            </div>

            <span>Tickets: {booking.tickets.length} </span>
            <div className="price-container">
              <span>Class: {booking.tickets[0].class}</span>
              <span>
                Price: £{" "}
                {booking.tickets[0].class === "econ" && scheduledFlightDetail
                  ? booking.tickets.length * scheduledFlightDetail.economicPrice
                  : booking.tickets[0].class === "first" &&
                    scheduledFlightDetail
                  ? booking.tickets.length *
                    scheduledFlightDetail.firstClassPrice
                  : scheduledFlightDetail
                  ? booking.tickets.length * scheduledFlightDetail.businessPrice
                  : null}
              </span>
            </div>
          </StyledDiv>
          <ul>
            {booking.tickets.map((ticket, index) => (
              <CheckInCard ticket={ticket} key={ticket.id} index={index} />
            ))}
          </ul>
        </div>
      </StyledMain>
    );
}
