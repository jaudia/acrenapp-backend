import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { Event } from '../models/event.js';
import bcryptjs from 'bcryptjs';
import { Op } from 'sequelize';


export const getEvent = async (req, res) => {

    const { id } = req.params;

    const event = await Event.findByPk(id);

    if (event)

        reply(res, event);

    else

        reply(res, null, [`No existe el evento con el id ${id}`], false, statusCodes.NOT_FOUND);
}


export const putEvent = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const event = await event.findByPk(id);

        if (!event) {
            return res.status(404).json({
                msg: 'No existe un event con el id ' + id
            });
        }

        await Event.update(body);

        res.json(event);


    } catch (error) {

        console.error(error);

        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}
