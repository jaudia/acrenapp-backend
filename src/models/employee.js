import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import User from './user.js';

const Employee = db.define('employee', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },   
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },    
    name: {
        type: DataTypes.STRING
    },
});

Employee.belongsTo(User,{foreignKey:'userId'});


export default Employee;