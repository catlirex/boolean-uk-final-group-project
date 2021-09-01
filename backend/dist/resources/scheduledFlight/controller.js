"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedScheduledFlight = exports.scheduledFlightByDepartureAirportCode = exports.scheduledFlightByArrivalAirportCode = void 0;
const database_1 = __importDefault(require("../../utils/database"));
const { scheduledFlight } = database_1.default;
const scheduledFlightByArrivalAirportCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.airportCode;
    try {
        const schFlightByArrivalAirportCode = yield scheduledFlight.findMany({
            where: {
                status: { in: [
                        "DEPARTED", "ARRIVED"
                    ] },
                flightNumber: { is: {
                        arrivalAirportId: id,
                    } }
            },
            include: { flightNumber: true }
        });
        res.json({ data: schFlightByArrivalAirportCode });
    }
    catch (error) {
        console.log(error);
        res.json({ error: "Not working" });
    }
});
exports.scheduledFlightByArrivalAirportCode = scheduledFlightByArrivalAirportCode;
const scheduledFlightByDepartureAirportCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.airportCode;
    try {
        const schFlightByDepartureAirportCode = yield scheduledFlight.findMany({
            where: {
                status: { in: [
                        "SCHEDULED",
                        "BOARDING",
                        "CHECKIN",
                        "FINALCALL",
                        "DELAYED",
                        "CANCELLED"
                    ] },
                flightNumber: { is: {
                        departureAirportId: id,
                    } }
            },
            include: { flightNumber: true }
        });
        res.json({ data: schFlightByDepartureAirportCode });
    }
    catch (error) {
        console.log(error);
        res.json({ error: "Not working" });
    }
});
exports.scheduledFlightByDepartureAirportCode = scheduledFlightByDepartureAirportCode;
const updatedScheduledFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const updatedInfo = req.body;
    try {
        const schedulFlightExist = yield scheduledFlight.findUnique({ where: { id } });
        if (schedulFlightExist) {
            const schedulFlightUpdate = yield scheduledFlight.update({
                where: { id },
                data: Object.assign(Object.assign({}, schedulFlightExist), updatedInfo),
                include: { flightNumber: true }
            });
            res.json({ data: schedulFlightUpdate });
        }
        else {
            res.json({ data: "There is no flight at the moment" });
        }
    }
    catch (error) {
        res.json({ error: "Not working" });
    }
});
exports.updatedScheduledFlight = updatedScheduledFlight;
//# sourceMappingURL=controller.js.map