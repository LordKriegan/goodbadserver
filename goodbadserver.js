var http = require('http');

var goodPort = 7000;
var goodArr = ["You're wonderful!", "Nice smile!", "Cool shirt!", "Have a nice day!"];
var badPort = 7500;
var badArr = ["Screw you!", "Shove off!", "You suck!", "I hate you with a deep loathing passion."]

var goodServ = http.createServer(function(req, resp) {
    resp.end(goodArr[Math.floor(Math.random() * goodArr.length)]);
});

goodServ.listen(goodPort, function() {
    console.log("Good server is listening at https://localhost:" + goodPort);
});

var badServ = http.createServer(function(req, resp) {
    resp.end(badArr[Math.floor(Math.random() * badArr.length)]);
});

badServ.listen(badPort, function() {
    console.log("Good server is listening at https://localhost:" + badPort);
});