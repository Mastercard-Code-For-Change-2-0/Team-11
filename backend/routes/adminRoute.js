import express from 'express';
import registerAdmin from '../controllers/adminRegister.js';
import loginAdmin from '../controllers/adminLogin.js';


const adminRouter = express.Router();


adminRouter.post('/register', registerAdmin);
adminRouter.post('/login', loginAdmin);

export default adminRouter;
