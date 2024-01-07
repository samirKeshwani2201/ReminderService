const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");

class TicketRepository {

    async getAll() {
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }
    async create(data) {
        try {
            const tickets = await NotificationTicket.create(data);
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await NotificationTicket.update(
                { status: data.status },
                {
                    where: {
                        id: id,

                    },
                    fields: ['status']
                }
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async get(filter) {
        try {
            const response = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lt]: new Date()
                    }
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = TicketRepository;