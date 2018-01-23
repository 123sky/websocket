var express = require('express');
var router = express.Router();

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(function(req, res, next){  
  res.io = io;  
  next();  
}); 

/* GET home page. */
router.get('/socketss', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.emit('news', { hello: 'world1' });  
  socket.on('my other event', function (data) {  
    console.log(data);  
  }); 
});

module.exports = router;