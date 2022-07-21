import { Router } from 'express';
import * as userCtrl from '../controllers/user.js';


const router = Router();


router.get('/', userCtrl.getUsers);
router.get('/:id', userCtrl.getUser);
router.post('/', userCtrl.postUser);
router.put('/:id', userCtrl.putUser);
router.delete('/:id', userCtrl.deleteUser);


export default router;