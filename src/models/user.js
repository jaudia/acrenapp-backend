import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';

const user = db.define('user', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
});


export default user;