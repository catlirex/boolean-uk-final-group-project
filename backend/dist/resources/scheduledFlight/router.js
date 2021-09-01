"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
// import {} from "./controller";
const router = (0, express_1.Router)();
router.get("/arrival/:airportCode", controller_1.scheduledFlightByArrivalAirportCode);
exports.default = router;
//# sourceMappingURL=router.js.map