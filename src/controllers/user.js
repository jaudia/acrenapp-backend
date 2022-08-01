import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { User } from '../models/user.js';
import bcryptjs from 'bcryptjs';
import { Op } from 'sequelize';
import { buildUpdate, buildWhere } from '../helpers/statements.js';

export const createUser = async (req, res) => {

    try {

        const { body } = req;

        let errorMsg = '';

        const existsUser = await User.findOne({
            where: {
                [Op.or]: [
                    { email: body.email },
                    { dni: body.dni }]
            }
        });

        if (existsUser) {

            if (existsUser.email === body.email)

                errorMsg = `Ya existe un usuario con el email ${body.email}`;

            else

                errorMsg = `Ya existe un usuario con el dni ${body.dni}`

            reply(res,
                null,
                [errorMsg],
                false,
                statusCodes.NOT_FOUND);

        }

        else {

            // Encriptar la contraseña
            const salt = bcryptjs.genSaltSync();

            const pass = bcryptjs.hashSync(body.password, salt);

            const newUser = await User.create({ ...body, password: pass });

            reply(res, newUser, ['Se ha registrado correctamente']);
        }


    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }

}


export const deleteUser = async (req, res) => {

    try {

        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user)

            reply(res, null, [`No existe un user con el id ${id}`], false, statusCodes.BAD_REQUEST);

        else {

            await User.update({ active: false });

            reply(res, User, ['Usuario eliminado correctamente.']);
        }

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }
}


export const getUser = async (req, res) => {

    try {

        const { id } = req.params;

        const user = await User.findByPk(id);

        if (user)

            reply(res, user);

        else

            reply(res, null, [`No existe un user con el id ${id}`], false, statusCodes.NOT_FOUND);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }
}


export const getUserAll = async (req, res) => {

    try {

        const { name, lastName, dni } = req.query;

        const arrFields = [
            { name },
            { lastName },
            { dni }
        ];

        const whereStatement = buildWhere(arrFields);

        const user = await User.findAll({
            where: {
                ...whereStatement
            }
        });

        if (user)

            reply(res, user);

        else

            reply(res, null, [`No se encontraron usuarios con los datos solicitados.`], false, statusCodes.NOT_FOUND);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }
}


export const putUser = async (req, res) => {

    try {

        const { id } = req.params;

        const { name,
            lastName,
            phone } = req.body;

        const arrFields = [
            { name },
            { lastName },
            { phone }
        ];


        let updateStatement = buildUpdate(arrFields);

        const result = await User.update(
            { ...updateStatement },
            { where: { id } }
        );

        reply(res, null, ['Modificaciones realizadas correctamente.']);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);
    }
}
