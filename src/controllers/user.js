import { statusCodes } from '../constants/statusCodes.js';
import { reply } from '../helpers/response.js';
import Employee from '../models/employee.js';
import User from '../models/user.js';

export const deleteUser = async (req, res) => {

    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: 'No existe un user con el id ' + id
        });
    }

    await User.update({ estado: false });

    // await user.destroy();


    res.json(user);
}

export const getUsers = async (req, res) => {

    const users = await User.findAll();

    res.json({ users });
}

export const getUser = async (req, res) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user) {
        // res.json(user);
        reply(res, ['salio bien', 'todo ok']);
    } else {
        reply(res, ['todo mal', 'muy mal', `No existe un user con el id ${id}`], false, statusCodes.NOT_FOUND)
        // res.status(404).json({
        //     msg: `No existe un user con el id ${id}`
        // });
    }


}

export const postUser = async (req, res) => {

    const { body } = req;

    try {

        const existsEmail = await User.findOne({
            where: {
                email: body.email
            }
        });

        if (existsEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un user con el email ' + body.email
            });
        }

        const newUser = new user(body);

        await newUser.save();

        res.json(newUser);


    } catch (error) {

        console.error(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
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
