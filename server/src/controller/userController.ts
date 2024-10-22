import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
  //const { name } = req.body;

  try {
    const showUser = await prisma.user.findMany();

    //console.log(showUser);
    res.status(200).json(showUser);
  } catch (error) {
    res.status(400).json({ message: "User data is not retrieving" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body;
  console.log(name, email, password, phone);
  try {
    const users = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        phone: phone,
      },
    });

    //console.log(name, email, password, phone);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failure in creating user" });
  }
};
