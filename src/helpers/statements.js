export const buildUpdate = (arrFields) => {

    try {

        let updateStatement = {};

        for (const field of arrFields) {

            if (!!Object.values(field)[0])

                updateStatement = {
                    ...updateStatement,
                    ...field
                };

        }

        return updateStatement;

    } catch (error) {

        throw new Error(error);
    }
}

export const buildWhere = (arrFields) => {

    try {

        let whereStatement = {};

        for (const field of arrFields) {

            if (!!Object.values(field)[0])

                whereStatement = {
                    ...whereStatement,
                    ...field
                };

        }

        return whereStatement;

    } catch (error) {

        throw new Error(error);
    }

}