// import { json } from 'sequelize/types';
import user from '../models/user.js';
// import prueba from '../models/prueba.js';


export const getUsers = async (req, res) => {

    const users = await user.findAll();

    res.json({ users });
}

export const getUser = async (req, res) => {

    const { id } = req.params;

    const user = await user.findByPk(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            msg: `No existe un user con el id ${id}`
        });
    }


}

export const postUser = async (req, res) => {

    const { body } = req;

    try {        
        

        const existeEmail = await user.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
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

        const user = await user.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'No existe un user con el id ' + id
            });
        }

        await user.update(body);

        res.json(user);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteUser = async (req, res) => {

    const { id } = req.params;

    const user = await user.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: 'No existe un user con el id ' + id
        });
    }

    await user.update({ estado: false });

    // await user.destroy();


    res.json(user);
}

