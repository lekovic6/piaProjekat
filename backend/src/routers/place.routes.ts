import express from 'express'
import { PlaceController } from '../controllers/place.controller';


const placeRouter = express.Router();

placeRouter.route('/getAllClientPlaces').post(
    (req, res) => new PlaceController().getAllClientPlaces(req, res)
)




export default placeRouter;