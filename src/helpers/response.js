import { statusCodes } from "../constants/statusCodes.js";

export const reply = (res, data, messages = [], ok = true, code = statusCodes.OK) => {
    return res.status(code).json({
        ok,
        data,
        messages
    });
}

export const defaultReplyInternalError = (res) => {
    return reply(
        res,
        null,
        ['Se produjo un error interno en la aplicación. Si el problema persiste, contacte a soporte.'],
        false,
        statusCodes.INTERNAL_ERROR
    );

}