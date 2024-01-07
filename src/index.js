const express = require('express');
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const setUpJobs = require('./utils/job');
const TicketController = require('./controller/ticket-controller');

const setUpAndStart = () => {
    const app = express();
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post("/api/v1/tickets", TicketController.create);

    app.listen(PORT, () => {
         console.log(`Server started @ ${PORT}`);
        setUpJobs();


    });
};

setUpAndStart();