const express = require("express");

// application constants
const PORT = 3000;

// create the http app
const app = express();

// link the static files
app.use('/images', express(__dirname + '/html/images'));
app.use('/css',express.static(__dirname + '/html/css'))
console.log(`Base path is: ${__dirname}`);

// add a router
const router = express.Router();

//router.use(express.json());
router.use(express.urlencoded({extended: false}));

// create API routes
router.use("/", require("./api/index"));


// use the router in the app
app.use(router);

app.listen(PORT, (err) => {
    if (err) 
        console.log("Server startup failed.");
    else
        console.log(`Server listening on port ${PORT}`);
});