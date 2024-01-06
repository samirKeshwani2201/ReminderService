const express = require('express');
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
// const { sendBasicEmail } = require('./services/email-service');
const cron = require("node-cron");


const setUpAndStart = () => {

    const app = express();
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.listen(PORT, () => {
        console.log(`Server started @ ${PORT}`);
        // sendBasicEmail("sam@gmail.com", "samirkeshwani01@gmail.com", "IDK", "idk idk");
 
    });
};

setUpAndStart();