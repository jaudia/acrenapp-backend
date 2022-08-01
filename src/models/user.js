import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { Area } from './area.js';
import { Employee } from './employee.js';
import { Event } from './event.js';
import { Position } from './position.js';
import { RequestHeader } from './request.js';
import { TemplateForm } from './templateForm.js';


export const User = db.define('user', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    entityType: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    birthDate: {
        type: DataTypes.DATEONLY
    },
    contactEmail: {
        type: DataTypes.STRING
    },
    identityChecked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    emailConfirmated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    emailUrlConfirm: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, // @TODO: hay que dejarlo en false y activarlo a traves de la confirmacion de email
        allowNull: false
    }
});


export const entityUserTypes = {
    ADMIN: 'A',
    HOST: 'H',
    MEDIA_ENTERPRISE: 'M',
    PERSON: 'P'
}


User.hasMany(Employee);
Employee.belongsTo(User);

User.hasMany(Area);
Area.belongsTo(User);

User.hasMany(Position);
Position.belongsTo(User);

User.hasMany(TemplateForm);
TemplateForm.belongsTo(User);

User.hasMany(RequestHeader);
RequestHeader.belongsTo(User);

User.hasMany(Event);
Event.belongsTo(User);
