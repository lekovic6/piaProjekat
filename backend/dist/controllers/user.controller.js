"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
const worker_1 = __importDefault(require("../models/worker"));
const workerRequest_1 = __importDefault(require("../models/workerRequest"));
class UserController {
    getAllAgencies(req, res) {
        user_1.default.find({ 'role': 'agency' }, (err, agencies) => {
            if (err)
                console.log(err);
            else
                res.json(agencies);
        });
    }
    getAgencyByUsername(req, res) {
        let agencyUsername = req.body.username;
        user_1.default.findOne({ 'username': agencyUsername }, (err, agency) => {
            if (err)
                console.log(err);
            else {
                //console.log('Retrieved agency:', agency);
                res.json(agency);
            }
        });
    }
    getClientByUsername(req, res) {
        let clientUsername = req.body.username;
        user_1.default.findOne({ 'username': clientUsername }, (err, user) => {
            if (err)
                console.log(err);
            else {
                //console.log('Retrieved user:', user);
                res.json(user);
            }
        });
    }
    updateClient(req, res) {
        let clientUsername = req.body.username;
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let phoneNumber = req.body.phoneNumber;
        let profilePictureData = req.body.profilePictureData;
        let profilePictureContentType = req.body.profilePictureContentType;
        user_1.default.collection.updateOne({ 'username': clientUsername }, {
            $set: {
                'firstname': firstname,
                'lastname': lastname,
                'phoneNumber': phoneNumber,
                'profilePicture.data': profilePictureData,
                'profilePicture.contentType': profilePictureContentType
            }
        }, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ 'message': 'Error updating client.' });
            }
            else {
                res.status(200).json({ 'message': 'update made' });
            }
        });
    }
    updateAgency(req, res) {
        let username = req.body.username;
        let agencyName = req.body.agencyName;
        let agencyAdress = req.body.agencyAdress;
        let tid = req.body.tid;
        let description = req.body.description;
        let profilePictureData = req.body.profilePictureData;
        let profilePictureContentType = req.body.profilePictureContentType;
        user_1.default.collection.updateOne({ 'username': username }, {
            $set: {
                'agencyName': agencyName,
                'agencyAdress': agencyAdress,
                'tid': tid,
                'description': description,
                'profilePicture.data': profilePictureData,
                'profilePicture.contentType': profilePictureContentType
            }
        }, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ 'message': 'Error updating client.' });
            }
            else {
                res.status(200).json({ 'message': 'update made' });
            }
        });
    }
    changePassword(req, res) {
        let username = req.body.username;
        let newPassword = req.body.newPassword;
        user_1.default.collection.updateOne({ 'username': username }, {
            $set: {
                'password': newPassword,
            }
        }, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ 'message': 'Error in changing password.' });
            }
            else {
                res.status(200).json({ 'message': 'password changed' });
            }
        });
    }
    getAgencyWorkers(req, res) {
        let agencyUsername = req.body.agencyUsername;
        worker_1.default.find({ 'agencyUsername': agencyUsername }, (err, workers) => {
            if (err)
                console.log(err);
            else
                res.json(workers);
        });
    }
    saveWorkerChanges(req, res) {
        let worker = req.body.worker;
        //let idWorker = req.body.worker._id; // this should be enough // nope dont thinks so
        let ObjectId = require('mongodb').ObjectId;
        let idWorker = new ObjectId(req.body.worker._id);
        worker_1.default.collection.updateOne({ '_id': idWorker }, {
            $set: {
                'firstname': worker.firstname,
                'lastname': worker.lastname,
                'phoneNumber': worker.phoneNumber,
                'email': worker.email,
                'specialization': worker.specialization
            }
        }, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ 'message': 'Error updating client.' });
            }
            else {
                res.status(200).json({ 'message': 'update made' });
                console.log(result);
            }
        });
    }
    deleteWorker(req, res) {
        let ObjectId = require('mongodb').ObjectId;
        let idWorker = new ObjectId(req.body.worker._id);
        worker_1.default.collection.deleteOne({ '_id': idWorker }, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'An error occurred while trying to delete the place.' });
            }
            else {
                console.log(result);
                res.json({ message: 'delete made' });
            }
        });
    }
    addWorker(req, res) {
        let newWorker = new worker_1.default({
            agencyUsername: req.body.worker.agencyUsername,
            firstname: req.body.worker.firstname,
            lastname: req.body.worker.lastname,
            phoneNumber: req.body.worker.phoneNumber,
            email: req.body.worker.email,
            specialization: req.body.worker.specialization,
        });
        newWorker.save().then(worker => {
            res.status(200).json({ 'message': 'worker added' });
            console.log(worker);
        }).catch(err => {
            res.status(400).json({ 'message': 'error in adding worker' });
            console.log(err);
        });
    }
    alreadyRequestedExpansion(req, res) {
        let agencyUsername = req.body.agencyUsername;
        workerRequest_1.default.findOne({ 'agencyUsername': agencyUsername }, (err, request) => {
            if (err)
                console.log(err);
            else
                res.json(request);
        });
    }
    makeRequestForWorker(req, res) {
        let agencyUsername = req.body.agencyUsername;
        let numberOfWorkers = req.body.numberOfWorkers;
        let newRequest = new workerRequest_1.default({
            agencyUsername: agencyUsername,
            numberOfWorkers: numberOfWorkers
        });
        newRequest.save().then(request => {
            res.status(200).json({ 'message': 'request made' });
        }).catch(err => {
            res.status(400).json({ 'message': 'error in making a request' });
            console.log(err);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map