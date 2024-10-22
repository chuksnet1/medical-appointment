///To RUN   "start": "nodemon script.ts"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createData = async () => {
  try {
    const date = Date.now();
    console.log("this is the date", date);
    const show = await prisma.expense.create({
      data: {
        name: "Medoline",
        amount: "2700",

      },
    });
    console.log(show);
  } catch (error) {
    console.log("error is working here", error);
  }
};

//createData();


const updateData=async()=>{
  await prisma.appointment.update({
    data:{
      approval: true

    },
    where: {
      appointmentId:  "e274d1c2-b9d2-4b78-b989-240687bb9fab",
    }
  })
}

//updateData()


const showData = async () => {
  const show = await prisma.user.findMany();
  console.log(show, "revealed");
};

//showData()
console.log("we have started");

//


const deleteData =async()=>{
  const showResult = await prisma.appointment.delete({
    where: {
      appointmentId: "4e21d7af-01b7-4d1d-9c0f-8141294dca59"
    }
  })
  console.log(showResult)
}

//deleteData()