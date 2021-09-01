"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conroller_1 = require("./conroller");
const router = (0, express_1.Router)();
router.get("/user/:userId", conroller_1.getBookingForOneUser);
router.get("/:id", conroller_1.getOneBookingDetail);
exports.default = router;
//# sourceMappingURL=router.js.map