import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { Area } from '../models/area.js';
import { Op, where } from 'sequelize';

export const createArea = async (req, res) => {


    try {

        const { body } = req;

        const userId = req.usr.id;

        const lastId = (await Area.max('id', { where: { userId } }) || 0) + 1;

        const newArea = await Area.create({
            ...body,            
            userId,
            id: lastId
        });

        if (!!newArea)

            reply(res, null, ['El Area se ha creado exitosamente!']);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }

}