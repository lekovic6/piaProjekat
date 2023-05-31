import * as express from 'express'
import Place from '../models/place';

export class PlaceController{

    getAllClientPlaces(req:express.Request, res:express.Response){
        let clientUsername = req.body.clientUsername;

        Place.find({'ownerUsername':clientUsername}, (err, places)=>{
            if(err) console.log(err);
            else res.json(places);
        });
    }

    
}