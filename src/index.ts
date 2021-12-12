import express, { NextFunction, Response } from 'express';
import logger from 'morgan';
import admin from './routes/admin';

const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', prod ? process.env.PORT : 3065);

app.get('/', (req, res) => {
  res.send('정상 작동');
});

// Routing
app.use('/admin', admin);

app.listen(app.get('port'), () => {
  console.log(`server is running on ${app.get('port')}`);
});
