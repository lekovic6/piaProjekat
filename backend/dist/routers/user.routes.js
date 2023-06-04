"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/getAllAgencies').post((req, res) => new user_controller_1.UserController().getAllAgencies(req, res));
userRouter.route('/getAgencyByUsername').post((req, res) => new user_controller_1.UserController().getAgencyByUsername(req, res));
userRouter.route('/getClientByUsername').post((req, res) => new user_controller_1.UserController().getClientByUsername(req, res));
userRouter.route('/updateClient').post((req, res) => new user_controller_1.UserController().updateClient(req, res));
userRouter.route('/updateAgency').post((req, res) => new user_controller_1.UserController().updateAgency(req, res));
userRouter.route('/changePassword').post((req, res) => new user_controller_1.UserController().changePassword(req, res));
userRouter.route('/getAgencyWorkers').post((req, res) => new user_controller_1.UserController().getAgencyWorkers(req, res));
userRouter.route('/saveWorkerChanges').post((req, res) => new user_controller_1.UserController().saveWorkerChanges(req, res));
userRouter.route('/deleteWorker').post((req, res) => new user_controller_1.UserController().deleteWorker(req, res));
userRouter.route('/addWorker').post((req, res) => new user_controller_1.UserController().addWorker(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map