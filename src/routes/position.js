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

// Si se elimina un position, debe borrarse de una plantilla tambien.
// router.delete('/:id',
//     validateJWT,
//     );


export default router;