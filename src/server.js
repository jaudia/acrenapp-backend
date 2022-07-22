import express from 'express';
import cors from 'cors';
import { db } from './db/connection.js';

import authRoutes from './routes/auth.js';
// import homeRoutes from './routes/home.js';
import userRoutes from './routes/user.js';
import * as config from '../config.js'


const subRoute = '/api';

export class Server {

    constructor() {
        this.app = express();
        this.port = config.PORT;

        this.apiPaths = {
            auth: `${subRoute}/auth`,
            home: `${subRoute}/home`,
            user: `${subRoute}/user`            
        }

        // Conectar a base de datos
        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        this.dbSync();
    }

    async dbConnection() {
        try {
            await db.authenticate();

            console.log('BD arriba');

        } catch (error) {
            throw new Error(error);

        }
    }

    async dbSync() {
        try {

            await db.sync({ alter: true, force: false });

        } catch (error) {
            console.error(error);
        }
    }


    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.apiPaths.auth, authRoutes);
        // this.app.use(this.apiPaths.home, homeRoutes);
        this.app.use(this.apiPaths.user, userRoutes);

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




// module.exports = Server;
