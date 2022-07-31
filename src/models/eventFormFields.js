import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { Event } from './event.js';

/* Si se pide borrar un campo dado de alta,
entonces hay mandar un mensaje de confirmacion porque se van a borrar
soliciudes.
*/
export const EventPosition = db.define('eventPosition', {
    eventId: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id'
        }
    },
    positionName: {
        type: DataTypes.STRING
    }
});

export const EventArea = db.define('eventArea', {
    eventId: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id'
        }
    },
    areaName: {
        type: DataTypes.STRING
    }
});

export const EventFormField = db.define('eventFormField', {
    eventId: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id'
        }
    },
    eventAreaId: {
        type: DataTypes.INTEGER,
        references: {
            model: EventArea,
            key: 'id'
        }
    },
    eventPositionId: {
        type: DataTypes.INTEGER,
        references: {
            model: EventArea,
            key: 'id'
        }
    }
},
    {
        indexes: [
            {
                unique: true,
                fields: ['eventId', 'eventAreaId', 'eventPositionId']
            }
        ]
    });


