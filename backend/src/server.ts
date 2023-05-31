import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import userRouter from './routers/user.routes';
import guestRouter from './routers/guest.routes';
import placeRouter from './routers/place.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/piaProjekat');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok');
})

const router = express.Router();

router.use('/guest', guestRouter);
router.use('/user', userRouter);
router.use('/place', placeRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));