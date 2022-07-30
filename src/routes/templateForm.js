import { Router } from 'express';
import * as templateFormCtrl from '../controllers/templateForm.js';
import { validateJWT } from '../middlewares/auth.js';


const router = Router();


// router.get('/:id',
//     validateJWT,
//     );    


router.post('/add',
    validateJWT,
    templateFormCtrl.createTemplateForm);

// router.put('/:id',
//     validateJWT,
//     );

// router.delete('/:id',
//     validateJWT,
//     );


export default router;