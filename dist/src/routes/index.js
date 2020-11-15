"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const company_routes_1 = require("./company.routes");
const machine_routes_1 = require("./machine.routes");
const user_routes_1 = require("./user.routes");
const unity_routes_1 = require("./unity.routes");
const routes = express_1.default.Router();
exports.routes = routes;
routes.use('/users', user_routes_1.userRoutes);
routes.use('/machines', machine_routes_1.machineRoutes);
routes.use('/companies', company_routes_1.companyRoutes);
routes.use('/unities', unity_routes_1.unityRoutes);
//# sourceMappingURL=index.js.map