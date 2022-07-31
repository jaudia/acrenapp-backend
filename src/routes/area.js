import { Router } from 'express';
import * as areaCtrl from '../controllers/area.js';
import { validateJWT } from '../middlewares/auth.js';


const router = Router();


// router.get('/:id',
//     validateJWT,
//     );    


router.post('/add',
    validateJWT,
    areaCtrl.createArea);

// router.put('/:id',
//     validateJWT,
//     );

// router.delete('/:id',
//     validateJWT,
//     );


export default router;