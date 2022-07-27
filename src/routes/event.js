import { Router } from 'express';
import * as eventCtrl from '../controllers/event.js';
import { validateJWT } from '../middlewares/auth.js';


const router = Router();


router.get('/:id',
    validateJWT,
    eventCtrl.getEvent);


export default router;

