"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.machineRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const MachineController_1 = require("../controllers/MachineController");
const multer_2 = __importDefault(require("../config/multer"));
const machineRoutes = express_1.default.Router();
exports.machineRoutes = machineRoutes;
const machineController = new MachineController_1.MachineController();
const upload = multer_1.default(multer_2.default);
machineRoutes.get('/index', machineController.index);
machineRoutes.post('/store', upload.single('file'), machineController.store);
machineRoutes.get('/score', machineController.queryScore);
//# sourceMappingURL=machine.routes.js.map