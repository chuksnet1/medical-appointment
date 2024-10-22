"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentControler_1 = require("../controller/appointmentControler");
const router = (0, express_1.Router)();
router.get("/", appointmentControler_1.getAppointment);
router.post("/", appointmentControler_1.createAppointment);
router.delete('/:appointmentId', appointmentControler_1.deleteRowData);
exports.default = router;
