import express from 'express'
import { PlaceController } from '../controllers/place.controller';


const placeRouter = express.Router();

placeRouter.route('/getAllClientPlaces').post(
    (req, res) => new PlaceController().getAllClientPlaces(req, res)
)

placeRouter.route('/addPlace').post(
    (req, res) => new PlaceController().addPlace(req, res)
)

placeRouter.route('/getPlaceById').post(
    (req, res) => new PlaceController().getPlaceById(req, res)
)

placeRouter.route('/updatePlace').post(
    (req, res) => new PlaceController().updatePlace(req, res)
)
placeRouter.route('/deletePlace').post(
    (req, res) => new PlaceController().deletePlace(req, res)
)


export default placeRouter;