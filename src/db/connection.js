import { Sequelize } from 'sequelize';
import * as config from '../../config.js';

export const db = new Sequelize(config.DATABASE, config.DB_USERNAME, config.DB_PASSWORD, {
    host: config.HOST,
    dialect: 'postgres',
    port: 5432
});


