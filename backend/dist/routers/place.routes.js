"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const place_controller_1 = require("../controllers/place.controller");
const placeRouter = express_1.default.Router();
placeRouter.route('/getAllClientPlaces').post((req, res) => new place_controller_1.PlaceController().getAllClientPlaces(req, res));
placeRouter.route('/addPlace').post((req, res) => new place_controller_1.PlaceController().addPlace(req, res));
placeRouter.route('/getPlaceById').post((req, res) => new place_controller_1.PlaceController().getPlaceById(req, res));
placeRouter.route('/updatePlace').post((req, res) => new place_controller_1.PlaceController().updatePlace(req, res));
placeRouter.route('/deletePlace').post((req, res) => new place_controller_1.PlaceController().deletePlace(req, res));
exports.default = placeRouter;
//# sourceMappingURL=place.routes.js.map