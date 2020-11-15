"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_1 = require("./config/mongo");
mongoose_1.default.connect(mongo_1.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(routes_1.routes);
app.use((req, res, next) => {
    const error = new Error('Page not found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
});
//# sourceMappingURL=app.js.map