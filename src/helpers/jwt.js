import jwt from 'jsonwebtoken';
import { SECRET_PRIVATE_KEY } from '../../config.js';

export const generateJWT = (id = '') => {

    return new Promise((resolve, reject) => {

        const payload = { id };

        jwt.sign(payload, SECRET_PRIVATE_KEY, {
            expiresIn: '4h'
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        })

    })
}

