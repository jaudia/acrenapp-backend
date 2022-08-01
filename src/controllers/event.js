import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { Event, statusTypes } from '../models/event.js';
import { Op, where } from 'sequelize';
import { EventFormField } from '../models/eventFormFields.js';


export const createEvent = async (req, res) => {


    try {

        const { body } = req;

        const userId = req.usr.id;

        let errorMsg = '';

        const newEvent = await Event.create({
            ...body,
            status: statusTypes.OPEN,
            userId
        });

        if (!!newEvent)

            reply(res, null, ['El evento se ha creado exitosamente!']);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }

}


export const getAll = async (req, res) => {

    try {

        const { userId, name, date, place, status } = req.query;

        let whereStatement = {};

        if (!!userId)

            whereStatement = { ...whereStatement, userId };

        if (!!name)

            whereStatement = { ...whereStatement, name };

        if (!!date)

            whereStatement = { ...whereStatement, date };

        if (!!place)

            whereStatement = { ...whereStatement, place };

        if (!!status)

            whereStatement = { ...whereStatement, status };


        const events = await Event.findAll({
            where: whereStatement
        });

        if (!!events)

            reply(res, events);

        else

            reply(res, null, [`No se encontraron eventos`], false, statusCodes.NOT_FOUND);

    } catch (error) {

        defaultReplyInternalError(res);

    }
}


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
