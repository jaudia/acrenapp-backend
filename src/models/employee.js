import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { User } from './user.js';

export const Employee = db.define('employee', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,        
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    name: {
        type: DataTypes.STRING
    },
    lasName: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    emailNotifications: {
        type: DataTypes.STRING
    },
    birthDate: {
        type: DataTypes.DATEONLY
    },
    phone: {
        type: DataTypes.STRING
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }

});

Employee.belongsTo(User);

