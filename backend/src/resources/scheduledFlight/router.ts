import { Router } from "express";
import { scheduledFlightByArrivalAirportCode } from "./controller";
// import {} from "./controller";

const router = Router();

router.get("/arrival/:airportCode", scheduledFlightByArrivalAirportCode)

export default router;
