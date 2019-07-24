var express = require('express');
var app = express();

let apiData;

app.use(express.static('public'));
app.use(express.json({limit: "1mb"}));

app.listen(4000, function() {
    console.log("Listen to port 4000");
});

var exchange_rates = "";
app.post('/getCurrency', function (req, res) {
    apiData = req;
    res.json({
        status: 'success',
        message: 'Caitlyn Jules Tayco'
    });
    exchange_rates = apiData.body.rates;
    console.log(exchange_rates);
});

app.get('/endpoint', function(req, res){
    res.json({
        data: exchange_rates
    });
});
