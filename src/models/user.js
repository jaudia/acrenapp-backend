import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';

export const User = db.define('user', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
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
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
});


export const entityUserTypes = {
    HOST: 'H',
    MEDIA_ENTERPRISE: 'M',
    PERSON: 'P'
}