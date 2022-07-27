import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { Event } from '../models/event.js';
import bcryptjs from 'bcryptjs';
import { Op } from 'sequelize';


export const getEvent = async (req, res) => {

    const { id } = req.params;

    const event = await User.findByPk(id);

    if (event)

        reply(res, event);

    else

        reply(res, null, [`No existe el evento con el id ${id}`], false, statusCodes.NOT_FOUND);
}