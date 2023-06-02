import * as express from 'express'
import User from '../models/user';
import Worker from '../models/worker';

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
        let phoneNumber = req.body.phoneNumber;
        let profilePictureData = req.body.profilePictureData;
        let profilePictureContentType = req.body.profilePictureContentType;

        User.collection.updateOne({ 'username': clientUsername },{
                $set: {
                    'firstname': firstname,
                    'lastname': lastname,
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

    updateAgency(req:express.Request, res:express.Response){
        let username = req.body.username;
        let agencyName = req.body.agencyName;
        let agencyAdress = req.body.agencyAdress;
        let tid = req.body.tid;
        let description = req.body.description;
        let profilePictureData = req.body.profilePictureData;
        let profilePictureContentType = req.body.profilePictureContentType

        User.collection.updateOne({ 'username': username },{
            $set: {
                'agencyName': agencyName,
                'agencyAdress': agencyAdress,
                'tid':tid,
                'description':description,
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

    changePassword(req:express.Request, res:express.Response){
        let username = req.body.username;
        let newPassword = req.body.newPassword;

        User.collection.updateOne({ 'username': username },
            {
                $set: {
                    'password': newPassword,
                }
            }, (err, result) => {
                if (err) {
                console.log(err);
                res.status(500).json({ 'message': 'Error in changing password.' });
                } else {
                res.status(200).json({ 'message': 'password changed' });
                }
            }
        );
    }

    getAgencyWorkers(req:express.Request, res:express.Response){
        let agencyUsername = req.body.agencyUsername;

        Worker.find({'agencyUsername':agencyUsername}, (err, workers)=>{
            if (err) console.log(err)
            else res.json(workers)
        });
    }
}

