"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const router_1 = __importDefault(require("./resources/airport/router"));
const router_2 = __importDefault(require("./resources/user/router"));
var app = (0, express_1.default)();
app.use(logger("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/airports", router_1.default);
app.use("/users", router_2.default);
app.all("*", (req, res) => {
    res.json({ msg: "ok" });
});
module.exports = app;
//# sourceMappingURL=app.js.map