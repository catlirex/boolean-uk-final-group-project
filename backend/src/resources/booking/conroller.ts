import { Request, Response } from "express";
import dbClient from "../../utils/database";
const { booking } = dbClient;

export const getBookingForOneUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);
  try {
    const bookings = await booking.findMany({
      where: { userId: id },
      include: {
        BookExtraLuggage: { include: { ExtraLuggage: true } },
        tickets: {
          include: { scheduledFlight: { include: { flightNumber: true } } },
        },
      },
    });
    res.json(bookings);
  } catch (error) {
    console.log(error);
    res.json({ error: "user id incorrect" });
  }
};

export const getOneBookingDetail = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const bookings = await booking.findMany({
      where: { id },
      include: {
        BookExtraLuggage: { include: { ExtraLuggage: true } },
        tickets: {
          include: { scheduledFlight: { include: { flightNumber: true } } },
        },
      },
    });
    res.json(bookings);
  } catch (error) {
    console.log(error);
    res.json({ error: "booking id incorrect" });
  }
};
