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

    addPlace(req:express.Request, res:express.Response){
        let newPlace = new Place({
            ownerUsername : req.body.ownerUsername,
            type : req.body.type,
            address : req.body.address,
            numberOfRooms : req.body.numberOfRooms,
            area : req.body.area
            // ovde mi fali za CANVAS
            // TO DO
        })
        
        newPlace.save().then(place =>{
            res.status(200).json({'message':'place added'});
        }).catch(err => {
            res.status(400).json({'message':'error adding place'});
        })
    }

    getPlaceById(req:express.Request, res:express.Response){
        let idPlace = req.body.idPlace;

        Place.findOne({'_id':idPlace}, (err, place)=>{
            if(err) console.log(err);
            else{
                //console.log('place found:', place);
                res.json(place);
            }
        })
    }

    async updatePlace(req:express.Request, res:express.Response){
        let ObjectId = require('mongodb').ObjectId; 
        let idPlace = new ObjectId(req.body.idPlace);

        let ownerUsername = req.body.ownerUsername;
        let type = req.body.type;
        let address = req.body.address;
        let numberOfRooms = req.body.numberOfRooms;
        let area = req.body.area;

        //console.log('updating place with id:', idPlace);

        try {
            await Place.collection.updateOne(
                {'_id':idPlace},
                {$set : {
                    'ownerUsername':ownerUsername,
                    'type':type,
                    'address':address,
                    'numberOfRooms':numberOfRooms,
                    'area':area
                    }
                }
            );
            res.json({message:'place updated'});
        } catch (err) {
            res.json({message:'error updating place', error: err});
        }
    }

    deletePlace(req:express.Request, res:express.Response){
        let ObjectId = require('mongodb').ObjectId; 
        let idPlace = new ObjectId(req.body.idPlace);

        Place.collection.deleteOne({ '_id': idPlace }, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'An error occurred while trying to delete the place.' });
            } else {
                console.log(result);
                res.json({ message: 'place deleted' });
            }
        });
    }

}