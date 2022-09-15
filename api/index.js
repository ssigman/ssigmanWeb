const router = require("express").Router();
const path = require("path");

router.get('/',(req,res) => {
    let file2Send = path.normalize(__dirname + "/../html/index.html");
    console.log(`Sending: ${file2Send}`);
    res.sendFile(file2Send);
});

router.get("/view_form", (req,res) => {
    let args = Object.keys(req.query);
    posQuestion = req.originalUrl.indexOf("?");
    queryString = req.originalUrl.substring(posQuestion);
    thePage = "<!DOCTYPE html>";
    thePage += "<html>";
    thePage += "<head>"
    thePage += "<title>View Form Parameters &amp: Arguments</title>"
    thePage += "<style>table,th,td {border:1px solid black;border-collapse:collapse;}th{background-color: #c2c2d6;}</style>"
    thePage += "</head>"
    thePage += "<body><h1>Table of Form Parameters and Values</h1>";
    thePage += "<h4>HTTP Method: GET</h4>";
    thePage += `<h4>Full URL: ${req.protocol + '://' + req.get('host') + req.originalUrl}</h4>`;
    thePage += `<h4>Query String: ${queryString}</h4>`
    thePage += `<h4>User-Agent: ${req.get("User-Agent")}</h4>`
    thePage += "<table>";
    thePage += "<tr><th>Parameter</th><th>Value</th></tr>";
    args.forEach((prm)=>{
        thePage += `<tr><td>${prm}</td><td>${req.query[prm]}</td></tr>`
    });
    thePage += "</table></body>";
    thePage += "</html>";
    res.status(200).send(thePage);
});

router.post("/view_form", (req,res) => {
    let args = Object.keys(req.body);
    thePage = "<!DOCTYPE html>";
    thePage += "<html>";
    thePage += "<head>"
    thePage += "<title>View Form Parameters &amp: Arguments</title>"
    thePage += "<style>table,th,td {border:1px solid black;border-collapse:collapse;}th{background-color: #c2c2d6;}</style>"
    thePage += "</head>"
    thePage += "<body><h1>Table of Form Parameters and Values</h1>";
    thePage += "<h4>HTTP Method: POST</h4>";
    thePage += `<h4>Full URL: ${req.protocol + '://' + req.get('host') + req.originalUrl}</h4>`;
    thePage += `<h4>User-Agent: ${req.get("User-Agent")}</h4>`
    thePage += "<table style='border: 1px solid black;'>";
    thePage += "<tr><th>Parameter</th><th>Value</th></tr>";
    args.forEach((prm)=>{
        thePage += `<tr><td>${prm}</td><td>${req.body[prm]}</td></tr>`
    });
    thePage += "</table></body>";
    thePage += "</html>";
    res.status(200).send(thePage);
});

module.exports = router;