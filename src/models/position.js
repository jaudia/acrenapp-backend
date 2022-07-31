import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { User } from './user.js';

export const Position = db.define('position', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    positionName: {
        type: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        defaultValue: true
    }
});





