import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { User } from '../models/user.js';
import bcryptjs from 'bcryptjs';
import { Op } from 'sequelize';

export const deleteUser = async (req, res) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            msg: 'No existe un user con el id ' + id
        });
    }

    await User.update({ active: false });


    res.json(user);
}



export const getUser = async (req, res) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user)

        reply(res, user);

    else

        reply(res, null, [`No existe un user con el id ${id}`], false, statusCodes.NOT_FOUND);
}

export const createUser = async (req, res) => {

    const { body } = req;

    try {

        const existsEmail = await User.findOne({
            where: {
                [Op.or]: [
                    { email: body.email },
                    { dni: body.dni }]
            }
        });

        if (existsEmail)

            reply(res,
                null,
                [`Ya existe un usuario con el email ${body.email}`],
                false,
                statusCodes.NOT_FOUND);

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

export const putUser = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'No existe un user con el id ' + id
            });
        }

        await User.update(body);

        res.json(user);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}
