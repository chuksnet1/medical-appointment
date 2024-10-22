"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
///To RUN   "start": "nodemon script.ts"
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = Date.now();
        console.log("this is the date", date);
        const show = yield prisma.expense.create({
            data: {
                name: "Medoline",
                amount: "2700",
            },
        });
        console.log(show);
    }
    catch (error) {
        console.log("error is working here", error);
    }
});
//createData();
const updateData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.appointment.update({
        data: {
            approval: true
        },
        where: {
            appointmentId: "e274d1c2-b9d2-4b78-b989-240687bb9fab",
        }
    });
});
//updateData()
const showData = () => __awaiter(void 0, void 0, void 0, function* () {
    const show = yield prisma.user.findMany();
    console.log(show, "revealed");
});
//showData()
console.log("we have started");
//
const deleteData = () => __awaiter(void 0, void 0, void 0, function* () {
    const showResult = yield prisma.appointment.delete({
        where: {
            appointmentId: "4e21d7af-01b7-4d1d-9c0f-8141294dca59"
        }
    });
    console.log(showResult);
});
//deleteData()
