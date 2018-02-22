var express = require('express');
var app = express();

// Routes
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
  res.send('Welcome to vr payment gateway please try http://vrpayment.fr.openode.io/api/payment?transactionID=1236666&amount=30&mobilenumber=9716841138&email=abc@email.com&merchantId=2121');
});
app.get('/api/payment', function(req, res) {
  var transactionID = req.param('transactionID');
  var amount = req.param('amount');
  var mobilenumber = req.param('mobilenumber');
  var email = req.param('email');
  var merchantId = req.param('merchantId');
  if(!transactionID || !amount || !mobilenumber || !email || !merchantId){
	var json = {"status":"0","message":"required complete param(s)"};
	
  }else{
	if(amount>1000){
		var json = {"status":"2","message":"you don't have balance to purchase."};
	}else{
		var orderID = Date.now();
		var json = {"status":"1","message":"Payment has been made successfully","orderid":orderID};
	}
  }
  res.send(json);
  
});
// Listen
var port = 8080;
app.listen(port);
