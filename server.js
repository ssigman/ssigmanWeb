const express = require("express");

// application constants
const PORT = 3000;

// create the http app
const app = express();

// support URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ...

// add a router
const router = express.Router();

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