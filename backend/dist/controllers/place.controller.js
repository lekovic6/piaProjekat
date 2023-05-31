"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceController = void 0;
const place_1 = __importDefault(require("../models/place"));
class PlaceController {
    getAllClientPlaces(req, res) {
        let clientUsername = req.body.clientUsername;
        place_1.default.find({ 'ownerUsername': clientUsername }, (err, places) => {
            if (err)
                console.log(err);
            else
                res.json(places);
        });
    }
}
exports.PlaceController = PlaceController;
//# sourceMappingURL=place.controller.js.map