import mongoose from "mongoose";

const Schema = mongoose.Schema


const WorkerRequestSchema = new Schema({
    agencyUsername:String,
    numberOfWorkers:Number
})

export default mongoose.model("WorkerRequest", WorkerRequestSchema, 'workerRequests');