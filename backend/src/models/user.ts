import mongoose from "mongoose";

const Schema = mongoose.Schema


const UserSchema = new Schema({
    // for all - client, agency and admin
    username:String,
    password:String,
    email:String,
    role:String,

    //client only
    firstname:String,
    lastname:String,
    phoneNumber:String,

    // agency only
    agencyName:String,
    agencyAdress:String,
    tid:String,
    description:String,

    // for client and agency
    profilePicture:{
        data: String,
        contentType: String
    },
    verifiedByAdmin:Boolean,
    declined:Boolean
})

export default mongoose.model("User", UserSchema, 'users');
