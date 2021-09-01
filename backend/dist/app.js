"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router_1 = __importDefault(require("./resources/airport/router"));

const router_2 = __importDefault(require("./resources/auth/router"));
// App initialisation
const app = (0, express_1.default)();
// MiddleWares
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
// Auth
app.use(router_2.default);
// Routes
app.use('/airports', router_1.default);
app.use("/users", router_2.default);
// Catch All
app.all('*', (req, res) => {
    res.json({ msg: 'ok' });


});
module.exports = app;
//# sourceMappingURL=app.js.map