import jwt from 'jsonwebtoken';
import { SECRET_PRIVATE_KEY } from '../../config.js';
import { User } from '../models/user.js';

export const validateJWT = async (req, res, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { id } = jwt.verify(token, SECRET_PRIVATE_KEY);

        // leer el usuario que corresponde al uid
        const usr = await User.findById(id);

        if (!usr) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }

        // Verificar si el uid tiene estado true
        if (!usr.active) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }

        req.usr = usr;

        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}

