import express from 'express';
import cors from 'cors';
import { db } from './db/connection.js';
import * as config from '../config.js'

// Routes
import userRoutes from './routes/user.js';
import areaRoutes from './routes/area.js';
import authRoutes from './routes/auth.js';
import employeeRoutes from './routes/employee.js';
import eventRoutes from './routes/event.js';
import homeRoutes from './routes/home.js';
import positionRoutes from './routes/position.js';
import templateFormRoutes from './routes/templateForm.js';


const subRoute = '/api';

export class Server {

    constructor() {
        this.app = express();
        this.port = config.PORT;

        this.apiPaths = {
            user: `${subRoute}/user`,
            area: `${subRoute}/area`,
            auth: `${subRoute}/auth`,
            employee: `${subRoute}/employee`,
            event: `${subRoute}/event`,
            home: `${subRoute}/home`,
            position: `${subRoute}/position`,
            templateForm: `${subRoute}/templateForm`
        }

        // Conectar a base de datos
        this.dbConnection();

        // Middlewares
        this.middlewares();
                        
        // Rutas de mi aplicación
        this.routes();

        // Sincronizacion de base de datos
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
        this.app.use(this.apiPaths.user, userRoutes);
        this.app.use(this.apiPaths.area, areaRoutes);
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.employee, employeeRoutes);
        this.app.use(this.apiPaths.event, eventRoutes);
        this.app.use(this.apiPaths.home, homeRoutes);
        this.app.use(this.apiPaths.position, positionRoutes);
        this.app.use(this.apiPaths.templateForm, templateFormRoutes);

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

