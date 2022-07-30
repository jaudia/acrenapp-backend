import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { User } from './user.js';

export const Area = db.define('area', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    areaName: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

});

Area.belongsTo(User);


