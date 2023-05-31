"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Agency = new Schema({
    firstname: { type: String },
    lastname: String,
    username: String,
    password: String,
    type: Number
});
exports.default = mongoose_1.default.model("Agency", Agency, 'users');
//# sourceMappingURL=agency.js.map