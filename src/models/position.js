import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';

export const Position = db.define('position', {
    positionName: {
        type: DataTypes.STRING
    }
});


