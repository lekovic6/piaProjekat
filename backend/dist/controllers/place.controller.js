"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    addPlace(req, res) {
        let newPlace = new place_1.default({
            ownerUsername: req.body.ownerUsername,
            type: req.body.type,
            address: req.body.address,
            numberOfRooms: req.body.numberOfRooms,
            area: req.body.area
            // ovde mi fali za CANVAS
            // TO DO
        });
        newPlace.save().then(place => {
            res.status(200).json({ 'message': 'place added' });
        }).catch(err => {
            res.status(400).json({ 'message': 'error adding place' });
        });
    }
    getPlaceById(req, res) {
        let idPlace = req.body.idPlace;
        place_1.default.findOne({ '_id': idPlace }, (err, place) => {
            if (err)
                console.log(err);
            else {
                //console.log('place found:', place);
                res.json(place);
            }
        });
    }
    updatePlace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let ObjectId = require('mongodb').ObjectId;
            let idPlace = new ObjectId(req.body.idPlace);
            let ownerUsername = req.body.ownerUsername;
            let type = req.body.type;
            let address = req.body.address;
            let numberOfRooms = req.body.numberOfRooms;
            let area = req.body.area;
            //console.log('updating place with id:', idPlace);
            try {
                yield place_1.default.collection.updateOne({ '_id': idPlace }, { $set: {
                        'ownerUsername': ownerUsername,
                        'type': type,
                        'address': address,
                        'numberOfRooms': numberOfRooms,
                        'area': area
                    }
                });
                res.json({ message: 'place updated' });
            }
            catch (err) {
                res.json({ message: 'error updating place', error: err });
            }
        });
    }
    deletePlace(req, res) {
        let ObjectId = require('mongodb').ObjectId;
        let idPlace = new ObjectId(req.body.idPlace);
        place_1.default.collection.deleteOne({ '_id': idPlace }, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'An error occurred while trying to delete the place.' });
            }
            else {
                console.log(result);
                res.json({ message: 'place deleted' });
            }
        });
    }
}
exports.PlaceController = PlaceController;
//# sourceMappingURL=place.controller.js.map