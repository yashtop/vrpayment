var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Welcome to vr payment gateway please try http://vrpayment.fr.openode.io/api/payment?transactionID=1236666&amount=30&mobilenumber=9716841138&email=abc@email.com');
});
app.get('/api/payment', function(req, res) {
  var transactionID = req.param('transactionID');
  var amount = req.param('amount');
  var mobilenumber = req.param('mobilenumber');
  var email = req.param('email');
  if(!transactionID && !amount && !mobilenumber && !email){
	var json = {"status":"0","message":"required complete param(s)"};
	
  }else{
	var orderID = Date.now();
	var json = {"status":"1","message":"payment has been made successfully","orderid":orderID};
  }
  res.send(json);
  
});
// Listen
var port = 80;
app.listen(port);
console.log('Listening on localhost:'+ port);