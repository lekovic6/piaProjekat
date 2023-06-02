"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
const worker_1 = __importDefault(require("../models/worker"));
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
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map