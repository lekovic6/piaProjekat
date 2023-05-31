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


export default userRouter;