"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
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
        let password = req.body.password;
        let phoneNumber = req.body.phoneNumber;
        let profilePictureData = req.body.profilePictureData;
        let profilePictureContentType = req.body.profilePictureContentType;
        user_1.default.collection.updateOne({ 'username': clientUsername }, {
            $set: {
                'firstname': firstname,
                'lastname': lastname,
                'password': password,
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
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map