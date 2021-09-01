import { Router } from "express";
import { getBookingForOneUser, getOneBookingDetail } from "./conroller";

const router = Router();

router.get("/user/:userId", getBookingForOneUser);
router.get("/:id", getOneBookingDetail);

export default router;
