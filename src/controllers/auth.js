import { generateJWT } from '../helpers/jwt.js';
import { User } from '../models/user.js';
import bcryptjs from 'bcryptjs';

export const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        // Verificar si el email existe
        const usr = await User.findOne({ email });

        if (!usr) {
            return res.status(400).json({
                msg: 'usr / Password no son correctos - correo'
            });
        }

        // SI el usr está activo
        if (!usr.active) {
            return res.status(400).json({
                msg: 'usr / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usr.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'usr / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generateJWT(usr.id);

        res.json({
            usr,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}
