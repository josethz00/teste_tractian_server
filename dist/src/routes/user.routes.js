"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const userRoutes = express_1.default.Router();
exports.userRoutes = userRoutes;
const userController = new UserController_1.UserController();
userRoutes.get('/index', userController.index);
userRoutes.post('/store', userController.store);
//# sourceMappingURL=user.routes.js.map