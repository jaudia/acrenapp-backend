import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { User } from './user.js';

export const Position = db.define('position', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    positionName: {
        type: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        defaultValue: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

Position.belongsTo(User);


