import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';

export const Area = db.define('area', {
    areaName: {
        type: DataTypes.STRING,
    }

});
