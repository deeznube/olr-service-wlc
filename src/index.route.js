import { Router } from "express";
import companyRoute from "./company/company.route.js";

const router = Router()

router.use('/company', companyRoute)

export default router