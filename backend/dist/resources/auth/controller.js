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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.logOutUser = exports.loginUser = void 0;
const services_1 = require("./services");
const authGenerator_1 = require("../../utils/authGenerator");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userCreds = req.body;
    try {
        const loggedUser = yield (0, services_1.findUserWithValidation)(userCreds);
        const token = (0, authGenerator_1.createToken)({
            id: loggedUser.id,
            email: loggedUser.email,
        });
        res.cookie('token', token, { httpOnly: true });
        res.json({
            user: {
                username: loggedUser.userName,
                email: loggedUser.email,
            },
        });
    }
    catch (error) {
        res.status(401).json({ error: error });
    }
});
exports.loginUser = loginUser;
const logOutUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie('token');
    res.json({ user: null });
});
exports.logOutUser = logOutUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    try {
        const savedUser = yield (0, services_1.createdWithHash)(newUser);
        const token = (0, authGenerator_1.createToken)({
            id: savedUser.id,
            email: savedUser.email,
        });
        res.cookie('token', token, { httpOnly: true });
        res.json({
            user: {
                username: savedUser.username,
                email: savedUser.email,
            },
        });
    }
    catch (error) {
        // if (error.message.includes('Unique constraint failed'))
        res.status(400).json({ error: 'username/email exists' });
    }
});
exports.createUser = createUser;
//# sourceMappingURL=controller.js.map