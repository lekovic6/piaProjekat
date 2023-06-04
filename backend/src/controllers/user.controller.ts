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

    saveWorkerChanges(req:express.Request, res:express.Response){
        let worker = req.body.worker;
        //let idWorker = req.body.worker._id; // this should be enough // nope dont thinks so

        let ObjectId = require('mongodb').ObjectId; 
        let idWorker = new ObjectId(req.body.worker._id);
        
        Worker.collection.updateOne({ '_id': idWorker },{
            $set: {
                'firstname': worker.firstname,
                'lastname': worker.lastname,
                'phoneNumber':worker.phoneNumber,
                'email':worker.email,
                'specialization': worker.specialization
            }
        }, (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).json({ 'message': 'Error updating client.' });
            } else {
              res.status(200).json({ 'message': 'update made' });
              console.log(result);
            }
          }
        );
    }

    deleteWorker(req:express.Request, res:express.Response){
        let ObjectId = require('mongodb').ObjectId; 
        let idWorker = new ObjectId(req.body.worker._id);

        Worker.collection.deleteOne({ '_id': idWorker }, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'An error occurred while trying to delete the place.' });
            } else {
                console.log(result);
                res.json({ message: 'delete made' });
            }
        });
    }

    addWorker(req:express.Request, res:express.Response){
        let newWorker = new Worker({
            agencyUsername:req.body.worker.agencyUsername,
            firstname:req.body.worker.firstname,
            lastname:req.body.worker.lastname,
            phoneNumber:req.body.worker.phoneNumber,
            email:req.body.worker.email,
            specialization:req.body.worker.specialization,
        });

        newWorker.save().then(worker=>{
            res.status(200).json({'message':'worker added'});
            console.log(worker);
        }).catch(err=>{
            res.status(400).json({'message': 'error in adding worker'});
            console.log(err);
        });

    }

}

