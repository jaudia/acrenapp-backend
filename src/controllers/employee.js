import { statusCodes } from '../constants/statusCodes.js';
import { defaultReplyInternalError, reply } from '../helpers/response.js';
import { Employee } from '../models/employee.js';
import { Op, where } from 'sequelize';

export const createEmployee = async (req, res) => {


    try {

        const { body } = req;

        const userId = req.usr.id;

        const lastId = (await Employee.max('id', { where: { userId } }) || 0) + 1;

        const newEmployee = await Employee.create({
            ...body,
            status: statusTypes.OPEN,
            userId,
            id: lastId
        });

        if (!!newEmployee)

            reply(res, null, ['El Employeeo se ha creado exitosamente!']);

    } catch (error) {

        console.error(error);

        defaultReplyInternalError(res);

    }

}