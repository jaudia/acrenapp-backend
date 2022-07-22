import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';

const User = db.define('user', {
    email: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    entityType: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    birthDate: {
        type: DataTypes.DATEONLY
    },
    contactEmail: {
        type: DataTypes.STRING
    },    
    active: {
        type: DataTypes.BOOLEAN
    }
});

export default User;