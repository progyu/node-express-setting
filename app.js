const express = require('express');
const logger = require('morgan');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('hello express');
});

const vipMiddleWare = (req, res, next) => {
	console.log('최우선 미들웨어');
	next();
};

// Routing
app.use('/admin', vipMiddleWare, admin);

app.listen(port, () => {
	console.log('Express listening on port', port);
});
