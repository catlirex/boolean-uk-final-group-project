import { Router } from "express";
import { scheduledFlightByArrivalAirportCode, scheduledFlightByDepartureAirportCode, updatedScheduledFlight } from "./controller";
// import {} from "./controller";

const router = Router();

router.get("/arrival/:airportCode", scheduledFlightByArrivalAirportCode)
router.get("/departure/:airportCode", scheduledFlightByDepartureAirportCode)
router.patch("/update/:id", updatedScheduledFlight)


export default router;
