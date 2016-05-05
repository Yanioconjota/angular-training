var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.use("/public/fonts", express.static(__dirname + "/public/fonts"));
app.use("/public/css", express.static(__dirname + "/public/css"));
app.use("/public/js", express.static(__dirname + "/public/js"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.get('/training1', function (req, res) {
  res.render('../training-01.html');
});

app.get('/training2', function (req, res) {
  res.render('../training-02.html');
});

app.get('/training3', function (req, res) {
  res.render('../training-03.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
