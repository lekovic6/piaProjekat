"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const WorkerSchema = new Schema({
    agencyUsername: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    specialization: String,
    idJob: String
});
exports.default = mongoose_1.default.model("Worker", WorkerSchema, 'workers');
//# sourceMappingURL=worker.js.map