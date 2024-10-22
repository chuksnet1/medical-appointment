import { Router } from "express";
import { getAppointment, createAppointment , deleteRowData} from "../controller/appointmentControler";


const router = Router()


router.get("/", getAppointment)
router.post("/", createAppointment)
router.delete('/:appointmentId', deleteRowData)

export default router;