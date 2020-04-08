var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express();
var cors = require('cors')

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.get('/', function(req, res) {
//     res.sendFile('index.html');
// })
app.use(express.static('public'))

https.createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }, app)
    .listen(3000, function() {
        console.log('Example app listening on port 3000! Go to https://localhost:3000/')
    })