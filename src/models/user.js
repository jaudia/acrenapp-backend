import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';

const user = db.define('user', {
    email: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING        
    },
    last_name:{        
        type: DataTypes.STRING
    },
    entity_type: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    birth_date: {
        type: DataTypes.DATEONLY
    },
    contact_email: {
        type: DataTypes.STRING
    },
    active: {
        type: DataTypes.BOOLEAN
    }
});


export default user;