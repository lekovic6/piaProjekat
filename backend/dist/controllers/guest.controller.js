"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestController = void 0;
const user_1 = __importDefault(require("../models/user"));
class GuestController {
    registerClient(req, res) {
        let newClient = new user_1.default({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phoneNumber: req.body.phoneNumber,
            profilePicture: {
                data: req.body.base64Data,
                contentType: req.body.base64ContentType
            },
            verifiedByAdmin: false,
            declined: false
        });
        newClient.save().then(client => {
            res.status(200).json({ 'message': 'user added' });
        }).catch(err => {
            res.status(400).json({ 'message': 'error' });
        });
    }
    registerAgency(req, res) {
        let newAgency = new user_1.default({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role,
            agencyName: req.body.agencyName,
            agencyAdress: req.body.agencyAdress,
            tid: req.body.tid,
            description: req.body.description,
            maxNumberOfWorkers: req.body.maxNumberOfWorkers,
            profilePicture: {
                data: req.body.base64Data,
                contentType: req.body.base64ContentType
            },
            verifiedByAdmin: false,
            declined: false
        });
        newAgency.save().then(agency => {
            res.status(200).json({ 'message': 'user added' });
        }).catch(err => {
            res.status(400).json({ 'message': 'error' });
        });
    }
    uniqueUsername(req, res) {
        let newUsername = req.body.username;
        user_1.default.collection.findOne({ 'username': newUsername }, (err, user) => {
            if (err)
                console.log(err);
            else
                res.json(user);
        });
    }
    uniqueEmail(req, res) {
        let newEmail = req.body.email;
        user_1.default.collection.findOne({ 'email': newEmail }, (err, user) => {
            if (err)
                console.log(err);
            else
                res.json(user);
        });
    }
    loginUser(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
            if (err)
                console.log(err);
            else
                res.json(user);
        });
    }
    loginAdmin(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
            if (err)
                console.log(err);
            else
                res.json(user);
        });
    }
}
exports.GuestController = GuestController;
//# sourceMappingURL=guest.controller.js.map