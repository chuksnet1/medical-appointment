import {Router} from "express";
import { getdashboardData } from "../controller/dashboardController";


const router = Router()

router.get("/", getdashboardData)

export default router;