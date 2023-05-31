import * as express from 'express'
import User from '../models/user';

export class UserController {

    getAllAgencies(req:express.Request, res:express.Response){
        User.find({'role':'agency'}, (err, agencies)=>{
            if(err) console.log(err);
            else res.json(agencies);
        });
    }

    getAgencyByUsername(req:express.Request, res:express.Response){
        let agencyUsername = req.body.username
        User.findOne({'username':agencyUsername}, (err, agency)=>{
            if(err) console.log(err);
            else {
                //console.log('Retrieved agency:', agency);
                res.json(agency);
            }
        })
    }

    getClientByUsername(req:express.Request, res:express.Response){
        let clientUsername = req.body.username
        User.findOne({'username':clientUsername}, (err, user)=>{
            if(err) console.log(err);
            else {
                //console.log('Retrieved user:', user);
                res.json(user);
            }
        })
    }

    updateClient(req:express.Request, res:express.Response){
        let clientUsername = req.body.username;
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let password = req.body.password;
        let phoneNumber = req.body.phoneNumber;
        let profilePictureData = req.body.profilePictureData;
        let profilePictureContentType = req.body.profilePictureContentType;

        User.collection.updateOne({ 'username': clientUsername },{
                $set: {
                    'firstname': firstname,
                    'lastname': lastname,
                    'password': password,
                    'phoneNumber':phoneNumber,
                    'profilePicture.data': profilePictureData,
                    'profilePicture.contentType': profilePictureContentType
                }
            }, (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({ 'message': 'Error updating client.' });
                } else {
                  res.status(200).json({ 'message': 'update made' });
                }
              }
        );
    }
}

