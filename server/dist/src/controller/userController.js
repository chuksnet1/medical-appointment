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
exports.createUser = exports.getUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const { name } = req.body;
    try {
        const showUser = yield prisma.user.findMany();
        //console.log(showUser);
        res.status(200).json(showUser);
    }
    catch (error) {
        res.status(400).json({ message: "User data is not retrieving" });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, phone } = req.body;
    console.log(name, email, password, phone);
    try {
        const users = yield prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                phone: phone,
            },
        });
        //console.log(name, email, password, phone);
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Failure in creating user" });
    }
});
exports.createUser = createUser;
