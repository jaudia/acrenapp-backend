import { Router } from 'express';
import * as positionCtrl from '../controllers/position.js';
import { validateJWT } from '../middlewares/auth.js';


const router = Router();


// router.get('/:id',
//     validateJWT,
//     );    


router.post('/add',
    validateJWT,
    positionCtrl.createPosition);

// router.put('/:id',
//     validateJWT,
//     );

// router.delete('/:id',
//     validateJWT,
//     );


export default router;