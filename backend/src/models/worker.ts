import mongoose from "mongoose";

const Schema = mongoose.Schema


const WorkerSchema = new Schema({
    
    agencyUsername:String,
    firstname:String,
    lastname:String,
    phoneNumber:String,
    email:String,
    specialization:String,

    idJob:String
})

export default mongoose.model("Worker", WorkerSchema, 'workers');