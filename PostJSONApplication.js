var express = require("express");
var bodyParser = require("body-parser");
app = express();
app.use(bodyParser.json());

app.post("/", function(req, res) {
    JSONData = req.body;
    jsonString = JSON.stringify(JSONData);
    res.send(jsonString);
});

app.listen(6005, function() {
    console.log("run success");
});
