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
    identityChecked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    emailConfirmated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    emailUrlConfirm: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, // @TODO: hay que dejarlo en false y activarlo a traves de la confirmacion de email
        allowNull: false
    }
});


export const entityUserTypes = {
    ADMIN: 'A',
    HOST: 'H',
    MEDIA_ENTERPRISE: 'M',
    PERSON: 'P'
}