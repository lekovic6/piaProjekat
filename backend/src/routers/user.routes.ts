import express from 'express'
import { UserController } from '../controllers/user.controller';


const userRouter = express.Router();

userRouter.route('/getAllAgencies').post(
    (req, res) => new UserController().getAllAgencies(req, res)
)

userRouter.route('/getAgencyByUsername').post(
    (req, res) => new UserController().getAgencyByUsername(req, res)
)

userRouter.route('/getClientByUsername').post(
    (req, res) => new UserController().getClientByUsername(req, res)
)

userRouter.route('/updateClient').post(
    (req, res) => new UserController().updateClient(req, res)
)

userRouter.route('/updateAgency').post(
    (req, res) => new UserController().updateAgency(req, res)
)

userRouter.route('/changePassword').post(
    (req, res) => new UserController().changePassword(req, res)
)

userRouter.route('/getAgencyWorkers').post(
    (req, res) => new UserController().getAgencyWorkers(req, res)
)

userRouter.route('/saveWorkerChanges').post(
    (req, res) => new UserController().saveWorkerChanges(req, res)
)

userRouter.route('/deleteWorker').post(
    (req, res) => new UserController().deleteWorker(req, res)
)

userRouter.route('/addWorker').post(
    (req, res) => new UserController().addWorker(req, res)
)



export default userRouter;