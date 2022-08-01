import { DataTypes, Sequelize } from 'sequelize';
import { db } from '../db/connection.js';
import { Employee } from './employee.js';
import { Event } from './event.js';

export const RequestHeader = db.define('requestHeader', {
    dateCreated: {
        type: DataTypes.DATEONLY
    },
    timeCreated: {
        type: DataTypes.TIME
    },
    dateResponse: {
        type: DataTypes.DATEONLY
    },
    timeResponse: {
        type: DataTypes.TIME
    }
});



export const RequestItem = db.define('requestItem', {
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Employee,
            key: 'id'
        }
    },
    eventFieldId: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    }
});

RequestHeader.hasMany(RequestItem);
RequestItem.belongsTo(RequestHeader);

Event.hasMany(RequestHeader);
RequestHeader.belongsTo(Event);