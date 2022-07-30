import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { TemplateForm, TemplateFormPositionArea } from '../models/templateForm.js';
import { Op, where } from 'sequelize';

export const createTemplateForm = async (req, res) => {


    try {

        const { body } = req;

        const userId = req.usr.id;

        const newTemplateForm = await TemplateForm.create({
            ...body,
            userId
        });

        if (!!newTemplateForm)

            reply(res, null, ['El puesto se ha creado exitosamente!']);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }

}

export const createTemplatePositionArea = async (req, res) => {


    try {

        const { body } = req.body;

        const lastId = (await TemplateFormPositionArea.max('id',
            {
                where: {
                    templateFormId: body.templateFormId
                }
            }) || 0) + 1;

        const newTemplatePositionArea = await TemplateFormPositionArea.create({
            ...body
        });

        if (!!newTemplatePositionArea)

            reply(res, null, ['El puesto se ha agregado a la plantilla exitosamente!']);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }

}