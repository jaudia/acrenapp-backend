import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { EventArea, EventFormField, EventPosition } from './eventFormFields.js';
// import { RequestHeader } from './request.js';
import { User } from './user.js';


export const statusTypes = {
    CANCELLED: 'C', // Cancelado
    FINISHED: 'F', // Finalizado    
    OPEN: 'O', // Abierto    
}


export const Event = db.define('event', {    
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATEONLY
    },
    time: {
        type: DataTypes.TIME
    },
    place: {
        type: DataTypes.STRING
    },
    urlImage: {
        type: DataTypes.STRING
    },
    openingDateRequest: {
        type: DataTypes.STRING
    },
    openingTimeRequest: {
        type: DataTypes.TIME
    },
    closingDateRequest: {
        type: DataTypes.STRING
    },
    closingTimeRequest: {
        type: DataTypes.TIME
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: statusTypes.OPEN
    },
    /*  El siguiente campo permite o no seguir mandando solicitudes,
     por ejemplo, si se lleno el cupo se pasa a false. */
    allowRequest: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

});

Event.hasMany(EventArea);
EventArea.belongsTo(Event);

Event.hasMany(EventPosition);
EventPosition.belongsTo(Event);

Event.hasMany(EventFormField);
EventFormField.belongsTo(Event);


