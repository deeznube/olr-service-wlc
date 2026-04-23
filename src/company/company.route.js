import { Router } from "express";
import * as companyController from './company.controller.js';
import { validateToken } from './company.middleware.js';

const router = Router();

router.get('/getCompany', validateToken, companyController.getCompany)

export default router