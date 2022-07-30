import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { Position } from '../models/position.js';
import { Op, where } from 'sequelize';

export const createPosition = async (req, res) => {


    try {

        const { body } = req;

        const userId = req.usr.id;

        const lastId = (await Position.max('id', { where: { userId } }) || 0) + 1;

        const newPosition = await Position.create({
            ...body,
            userId,
            id: lastId
        });

        if (!!newPosition)

            reply(res, null, ['El puesto se ha creado exitosamente!']);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }

}