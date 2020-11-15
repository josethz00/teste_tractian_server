"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unityRoutes = void 0;
const express_1 = __importDefault(require("express"));
const UnityController_1 = require("../controllers/UnityController");
const unityRoutes = express_1.default.Router();
exports.unityRoutes = unityRoutes;
const unityController = new UnityController_1.UnityController();
unityRoutes.get('/index', unityController.index);
unityRoutes.post('/store', unityController.store);
//# sourceMappingURL=unity.routes.js.map