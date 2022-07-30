import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { User } from './user.js';

export const Position = db.define('position', {
    userId: {
        type: DataTypes.INTEGER,
    },
    positionName: {
        type: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        defaultValue: true
    }
    // ,
    // no hace falta, se puede borrar.
    // active: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: true
    // }
});

Position.belongsTo(User);


