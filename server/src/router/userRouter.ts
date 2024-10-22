import { Router } from "express";
import { getUser, createUser } from "../controller/userController";


const router = Router()


router.get("/",getUser)
router.post("/",createUser)


export default router;