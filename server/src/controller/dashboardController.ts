import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getdashboardData = async (req: Request, res: Response) => {
  try {
    const expense = await prisma.expense.findMany();

    const purchase = await prisma.purchase.findMany();

    //console.log(expense, purchase)
    res.status(200).json({ expense, purchase });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed in retrieving expense and purchase data" });
  }
};
