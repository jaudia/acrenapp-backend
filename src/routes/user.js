import { Router } from 'express';
import * as userCtrl from '../controllers/user.js';
import { validateJWT } from '../middlewares/auth.js';


const router = Router();


router.get('/:id',
    validateJWT,
    userCtrl.getUser);

router.put('/:id',
    validateJWT,
    userCtrl.putUser);

router.delete('/:id',
    validateJWT,
    userCtrl.deleteUser);

router.post('/add', userCtrl.createUser);

export default router;