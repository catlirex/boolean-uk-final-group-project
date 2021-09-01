import { Request, Response } from "express";
import dbClient from "../../utils/database";

const { scheduledFlight } = dbClient;


export const scheduledFlightByArrivalAirportCode = async (req:Request, res:Response) => {
    const id = req.params.airportCode
    try {
      const schFlightByArrivalAirportCode = await scheduledFlight.findMany({
        where :  { 
        status: {in: [
            "DEPARTED","ARRIVED"
        ]},
        flightNumber: {is: {
        arrivalAirportId: id,
       }} },
       
       include: {flightNumber: true}
      });
      res.json({ data: schFlightByArrivalAirportCode });
    } catch (error) {
        console.log(error);
        
      res.json({ error: "Not working" });
    }
  };