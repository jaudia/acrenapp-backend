import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { Area } from '../models/area.js';

export const createArea = async (req, res) => {

    try {

        const { body } = req;

        const userId = req.usr.id;

        const [area, created] = await Area.findOrCreate({
            where: {
                userId,
                name: body.name
            }
        });

        if (created)

            reply(res, area, ['El Area se ha creado exitosamente!']);

        else

            reply(res, null, ['Ya existe un area con el mismo nombre.'], false, statusCodes.BAD_REQUEST);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }

}


export const deleteArea = async (req, res) => {

    try {

        const { id } = req.params;

        const area = await Area.findByPk(id);

        if (!area)

            reply(res, null, [`No existe un area con el id ${id}`], false, statusCodes.BAD_REQUEST);

        else {

            await Area.destroy();

            reply(res, User, ['Area eliminada correctamente.']);
        }

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }
}

export const getArea = async (req, res) => {

    try {

        const { id } = req.params;

        const area = await Area.findByPk(id);

        if (area)

            reply(res, area);

        else

            reply(res, null, [`No existe el area con el id ${id}`], false, statusCodes.NOT_FOUND);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }
}

export const getAreaAll = async (req, res) => {

    try {

        const { query } = req;

        const area = await Area.findAll({
            where: {
                ...query
            }
        });

        if (area)

            reply(res, area);

        else

            reply(res, null, [`No se encontraron areas con los datos solicitados.`], false, statusCodes.NOT_FOUND);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }
}

export const putArea = async (req, res) => {

    try {

        const { id } = req.params;

        const { body } = req;

        const area = await Area.findByPk(id);

        if (!area) {

            reply(res, null, [`No existe un user con el id ${id}`], false, statusCodes.NOT_FOUND);
        }

        await area.update(...body);

        res.json(area);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);
    }
}