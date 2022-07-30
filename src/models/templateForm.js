import { DataTypes, Deferrable } from 'sequelize';
import { db } from '../db/connection.js';
import { Area } from './area.js';
import { Position } from './position.js';
import { User } from './user.js';

export const TemplateForm = db.define('templateForm', {

    userId: {
        type: DataTypes.INTEGER,
    },
    templateName: {
        type: DataTypes.STRING,
    }
    // ,
    // no hace falta, se puede borrar.
    // active: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: true
    // }
});

TemplateForm.belongsTo(User);

export const TemplateFormPositionArea = db.define('templateFormPositionArea', {

    templateFormId: {
        type: DataTypes.INTEGER,        
        references: {
            model: TemplateForm,
            key: 'id'
        }
    },
    areaId: {
        type: DataTypes.INTEGER,        
        references: {
            model: Area,
            key: 'id'
        }
    },
    positionId: {
        type: DataTypes.INTEGER,        
        references: {
            model: Position,
            key: 'id'
        }
    }
},
    {
        indexes: [
            {
                unique: true,
                fields: ['templateFormId', 'areaId', 'positionId']
            }
        ]
    });