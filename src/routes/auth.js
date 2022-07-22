import { Router } from 'express';
import * as authCtrl from '../controllers/auth.js';


const router = Router();


// router.get('/:id', userCtrl.getUser);
router.post('/login', authCtrl.login);
// router.put('/:id', userCtrl.putUser);
// router.delete('/:id', userCtrl.deleteUser);


export default router;