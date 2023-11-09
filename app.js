var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var guitarsRouter = require('./routes/guitars');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString = process.env.MONGO_CON
const mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror'));
db.once("open", function(){
  console.log("Connection to DB succeeded")});

const Guitar = require('./models/guitar');

async function recreateDB(){
  await Guitar.deleteMany();

  //create 3 new instances of guitar
  let instance1 = new Guitar({
    guitar_type: 'Classical',
    model: 'Yamaha',
    cost: 900
  });
  let instance2 = new Guitar({
    guitar_type: 'Electric',
    model: 'Ibanez',
    cost: 1200
  });
  let instance3 = new Guitar({
    guitar_type: 'Bass',
    model: 'Fender',
    cost: 700
  });

  instance1.save().then(doc=>{
    console.log('First object saved')}
  ).catch(err=>{
    console.error(err)
  });

  instance2.save().then(doc=>{
    console.log('Second object saved')}
  ).catch(err=>{
    console.error(err)
  });

  instance3.save().then(doc=>{
    console.log('Third object saved')}
  ).catch(err=>{
    console.error(err)
  });

}

let reseed = true;
if (reseed) {recreateDB();}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/guitars', guitarsRouter);
app.use('/choose', chooseRouter);
app.use('/board', (req, res, next) => {
  const query = req.query;
  res.render('board', { title: 'Board', query });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
