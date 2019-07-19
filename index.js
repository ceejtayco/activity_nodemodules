var express = require('express');
var app = express();

let apiData;

app.use(express.static('public'));
app.use(express.json({limit: "1mb"}));

app.listen(4000, function() {
    console.log("Listen to port 4000");
});

app.post('/getCurrency', function (req, res) {
    apiData = req;
    res.json({
        status: 'success',
        message: 'Caitlyn Jules Tayco'
    });

    console.log(apiData);
});
