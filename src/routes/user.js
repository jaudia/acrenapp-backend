import { Router } from 'express';
import * as userCtrl from '../controllers/user.js';
import { validateJWT } from '../middlewares/auth.js';


const router = Router();


router.get('/all',
    validateJWT,
    userCtrl.getUserAll);    


router.get('/:id',
    validateJWT,
    userCtrl.getUser);    


router.post('/', userCtrl.createUser);

router.put('/:id',
    validateJWT,
    userCtrl.putUser);

router.delete('/:id',
    validateJWT,
    userCtrl.deleteUser);


export default router;