const sender = require("../config/emailConfig");

const sendBasicEmail = (from, to, mailSubject, mailBody) => {

    const response = sender.sendMail({
        from: from,
        to: to,
        subject: mailSubject,
        text: mailBody
    });
    console.log(response);
};

module.exports = {
    sendBasicEmail
};