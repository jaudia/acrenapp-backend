import { DataTypes, Deferrable } from 'sequelize';
import { db } from '../db/connection.js';
import { Area } from './area.js';
import { Position } from './position.js';

export const TemplateForm = db.define('templateForm', {
    templateName: {
        type: DataTypes.STRING,
    }
});


export const TemplateFormPositionArea = db.define('templateFormPositionArea', {},    
    {
        indexes: [
            {
                name: 'unique_tempform_pos_area',
                unique: true,
                fields: ['templateFormId', 'areaId', 'positionId']
            }
        ]
    }
);


TemplateForm.hasMany(TemplateFormPositionArea);
TemplateFormPositionArea.belongsTo(TemplateForm);

Area.hasMany(TemplateFormPositionArea);
TemplateFormPositionArea.belongsTo(Area);

Position.hasMany(TemplateFormPositionArea);
TemplateFormPositionArea.belongsTo(Position);
