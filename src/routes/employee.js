import { Router } from 'express';
import * as employeeCtrl from '../controllers/employee.js';
import { validateJWT } from '../middlewares/auth.js';


const router = Router();


// router.get('/:id',
//     validateJWT,
//     );    


router.post('/',
    validateJWT,
    employeeCtrl.createEmployee);

// router.put('/:id',
//     validateJWT,
//     );

// router.delete('/:id',
//     validateJWT,
//     );


export default router;