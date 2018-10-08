var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/", function(req, res) {
  var data = req.body;
  var dataString =
    "card[name]=JOHN DOE&card[number]=" +
    data.number +
    "&card[security_code]=" +
    data.code +
    "&card[expiration_month]=" +
    data.expireMonth +
    "&card[expiration_year]=" +
    data.expireYear;
  request.post(
    "https://vault.omise.co/tokens",
    {
      auth: {
        user: "pkey_test_5clqj3htialgwn3tg8a"
      },
      body: dataString
    },
    function(error, response, body) {
      res.send(body);
    }
  );
});

app.post("/charges", function(req, res) {
  var data = req.body;
  var dataString =
    "description=Charge for order 3947&amount=" +
    data.prices +
    "&currency=thb&return_uri=http://www.example.com/orders/3947/complete&card=" +
    data.tokens;
  request.post(
    "https://api.omise.co/charges",
    {
      auth: {
        user: "skey_test_5clqj3htt3fid9b9vfe"
      },
      body: dataString
    },
    function(error, response, body) {
      res.send(body);
    }
  );
});

app.listen(8080);
console.log("My Service is listening to port 8080.");