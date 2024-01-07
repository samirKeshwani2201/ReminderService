const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const sendBasicEmail = async (from, to, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: from,
            to: to,
            subject: mailSubject,
            text: mailBody
        });
    } catch (error) {
        console.log(error);
    }
};

const repo = new TicketRepository();

const fetchPendingEmails = async (data) => {
    try {
        const response = await repo.get({
            status: "PENDING"
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

const updateTicket = async (id, data) => {
    try {
        const response = await repo.update(id, data);
        return response;
    } catch (error) {
        console.log(error);

    }

};


const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
};





module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
};