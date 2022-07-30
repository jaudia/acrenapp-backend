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
        primaryKey: true,
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    areaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Area,
            key: 'id'
        }
    },
    positionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Position,
            key: 'id'
        }
    }

});

TemplateFormPositionArea.belongsTo(TemplateForm);