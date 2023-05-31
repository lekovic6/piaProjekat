import mongoose from "mongoose";

const Schema = mongoose.Schema

const PlaceSchema = new Schema({
    ownerUsername:String,
    type:String,
    address:String,
    numberOfRooms:Number,
    area:Number
    // i ovde treba onaj CANVAS GLUPI NEKAKO DA CUVAM 
    
})

export default mongoose.model("Place", PlaceSchema, 'places');

