"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const CompanyController_1 = require("../controllers/CompanyController");
const companyRoutes = express_1.default.Router();
exports.companyRoutes = companyRoutes;
const companyController = new CompanyController_1.CompanyController();
companyRoutes.get('/index', companyController.index);
companyRoutes.get('/query-one/:id', companyController.queryOne);
companyRoutes.post('/store', companyController.store);
//# sourceMappingURL=company.routes.js.map