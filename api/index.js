const router = require("express").Router();
const path = require("path");

router.get('/',(req,res) => {
    let file2Send = path.normalize(__dirname + "/../html/index.html");
    console.log(`Sending: ${file2Send}`);
    res.sendFile(file2Send);
});

router.get("/form_view", (req,res) => {
    console.log(`GET keys: ${Object.keys(req.query)}`);
    console.log(`GET values: ${Object.values(req.query)}`);
});

module.exports = router;