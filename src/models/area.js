import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { User } from './user.js';

export const Area = db.define('area', {    
    userId: {
        type: DataTypes.INTEGER,
    },
    areaName: {
        type: DataTypes.STRING,
    }
    // , 
    // no hace falta, se puede borrar.
    // active: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: true
    // }

});

Area.belongsTo(User);


