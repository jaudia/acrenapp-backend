import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';
import { Area } from './area.js';
import { Position } from './position';
import { User } from './user.js';

export const TemplateForm = db.define('templateForm', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    templateName: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

});

TemplateForm.belongsTo(User);

export const TemplateFormPositionArea = db.define('templateFormPositionArea', {
    templateId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    areaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    positionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }

});

TemplateFormPositionArea.belongsTo(TemplateForm);
TemplateFormPositionArea.belongsTo(Area);
TemplateFormPositionArea.belongsTo(Position);


