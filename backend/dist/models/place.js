"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const PlaceSchema = new Schema({
    ownerUsername: String,
    type: String,
    address: String,
    numberOfRooms: Number,
    area: Number
    // i ovde treba onaj CANVAS GLUPI NEKAKO DA CUVAM 
});
exports.default = mongoose_1.default.model("Place", PlaceSchema, 'places');
//# sourceMappingURL=place.js.map