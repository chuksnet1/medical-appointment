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
exports.deleteRowData = exports.createAppointment = exports.getAppointment = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.appointment.findMany();
        //console.log(result)
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "failure in retrieving appointment data" });
    }
});
exports.getAppointment = getAppointment;
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, reason, specialist, symptom } = req.body;
        const result = yield prisma.appointment.create({
            data: {
                name: name,
                reason: reason,
                specialist: specialist,
                symptoms: symptom,
            }
        });
        //console.log(result)
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Error failed in creating appointment" });
    }
});
exports.createAppointment = createAppointment;
const deleteRowData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { appointmentId } = req.params;
    try {
        const deletResult = yield prisma.appointment.delete({
            where: {
                appointmentId: appointmentId
            }
        });
        res.status(200).json({ message: "Delete is successful" });
    }
    catch (error) {
        res.status(500).json({ message: "failed to delete the appointment", error });
    }
});
exports.deleteRowData = deleteRowData;
