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

export const scheduledFlightByDepartureAirportCode = async (req:Request, res:Response) => {
    const id = req.params.airportCode
    try {
      const schFlightByDepartureAirportCode = await scheduledFlight.findMany({
        where :  { 
        status: {in: [
            "SCHEDULED",
            "BOARDING",
            "CHECKIN",
            "FINALCALL",
            "DELAYED",
            "CANCELLED"
        ]},
        flightNumber: {is: {
            departureAirportId: id,
       }} },
       
       include: {flightNumber: true}
      });
      res.json({ data: schFlightByDepartureAirportCode });
    } catch (error) {
        console.log(error);
        
      res.json({ error: "Not working" });
    }
  };

 export const updatedScheduledFlight = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id) ;
    const updatedInfo = req.body;
  
    try {
      const schedulFlightExist = await scheduledFlight.findUnique({ where: { id } });
  
      if (schedulFlightExist) {
        const schedulFlightUpdate = await scheduledFlight.update({
          where: { id },
          data: { ...schedulFlightExist, ...updatedInfo },
          include: {flightNumber: true}
        });
        res.json({ data: schedulFlightUpdate });
      } else {
          res.json({data: "There is no flight at the moment"})
      }
    } catch (error) {
      res.json({ error: "Not working" });
    }
  };