import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient()


export const getAppointment=async(
    req:Request,
    res:Response
):Promise<void>=>{
    try {
        const result = await prisma.appointment.findMany()

        //console.log(result)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: "failure in retrieving appointment data"})
    }
}



export const createAppointment=async(req: Request, res:Response)=>{
    try {
        const {name, reason, specialist,symptom} = req.body;

        const result = await prisma.appointment.create({
            data:{
                name:name,
                reason:reason,
                specialist:specialist,
                symptoms:symptom,
                
            }
        })

        //console.log(result)
        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json({message: "Error failed in creating appointment"})
    }
}


export const deleteRowData=async(req: Request, res: Response)=>{
    const {appointmentId} = req.params;

    
    try {
        
        const deletResult = await prisma.appointment.delete({
            where: {
                appointmentId : appointmentId
            }
        })
        res.status(200).json({message: "Delete is successful"})
    } catch (error) {
        res.status(500).json({message: "failed to delete the appointment", error})
    }
   
}