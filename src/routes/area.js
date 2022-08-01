import { Router } from 'express';
import * as areaCtrl from '../controllers/area.js';
import { validateJWT } from '../middlewares/auth.js';


const router = Router();


router.get('/all',
validateJWT,
areaCtrl.getAreaAll);

router.get('/:id',
    validateJWT,
    areaCtrl.getArea);


router.post('/',
    validateJWT,
    areaCtrl.createArea);

router.put('/:id',
    validateJWT,
    areaCtrl.putArea);

// router.delete('/:id',
//     validateJWT,
//     areaCtrl.deleteArea);


export default router;