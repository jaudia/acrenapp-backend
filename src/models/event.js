import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { User } from './user.js';

export const Event = db.define('event', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATEONLY
    },
    time: {
        type: DataTypes.TIME
    },
    place: {
        type: DataTypes.STRING
    },
    urlImage: {
        type: DataTypes.STRING
    },
    openingDateRequest: {
        type: DataTypes.STRING
    },
    openingTimeRequest: {
        type: DataTypes.TIME
    },
    closingDateRequest: {
        type: DataTypes.STRING
    },
    closingTimeRequest: {
        type: DataTypes.TIME
    },
    status: {
        type: DataTypes.STRING
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }

});

Event.belongsTo(User);
