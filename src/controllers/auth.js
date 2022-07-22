import { generateJWT } from '../helpers/jwt.js';
import { User } from '../models/user.js';
import bcryptjs from 'bcryptjs';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { statusCodes } from '../constants/statusCodes.js';

export const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        // Verificar si el email existe
        const usr = await User.findOne({
            email
        });


        if (!usr)

            return reply(res, null, ['email incorrecto.'], false, statusCodes.NOT_FOUND);

        // Si el usr está inactivo
        if (!usr.active)

            return reply(res, null, ['usuario inactivo.'], false, statusCodes.NOT_FOUND);

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usr.password);

        if (!validPassword)

            return reply(res, null, ['Contraseña invalida.'], false, statusCodes.NOT_FOUND);

        // Generar el JWT
        const token = await generateJWT(usr.id);

        res.json({
            id: usr.id,
            email: usr.email,
            name: usr.name,
            lastName: usr.lastName,
            phone: usr.phone,
            entityType: usr.entityType,
            birthDate: usr.birthDate,
            token
        });

    } catch (error) {

        console.log(error)

        defaultReplyInternalError(res);
    }

}
