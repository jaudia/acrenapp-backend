import jwt from 'jsonwebtoken';
import { SECRET_PRIVATE_KEY } from '../../config.js';
import { statusCodes } from '../constants/statusCodes.js';
import { reply } from '../helpers/response.js';

import { User } from '../models/user.js';


export const validateJWT = async (req, res, next) => {

    const token = req.header('x-token');

    if (!token)

        return reply(res,
            null,
            ['No hay token en la petición'],
            false,
            statusCodes.UNAUTHORIZED);

    try {

        const { id } = jwt.verify(token, SECRET_PRIVATE_KEY);

        // leer el usuario que corresponde al uid
        const usr = await User.findByPk(id);

        if (!usr)

            return reply(res,
                null,
                ['Token no válido', 'El usuario no existe en base de datos.'],
                false,
                statusCodes.UNAUTHORIZED);


        // Verificar si el uid tiene estado true
        if (!usr.active) {

            return reply(res,
                null,
                ['Token no válido', 'El usuario está inactivo.'],
                false,
                statusCodes.UNAUTHORIZED);
        }

        req.usr = usr;

        next();

    } catch (error) {

        return reply(res,
            null,
            ['Token no válido'],
            false,
            statusCodes.UNAUTHORIZED);
    }

}

