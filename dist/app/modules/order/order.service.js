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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const client_1 = require("@prisma/client");
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
    const result = yield prisma_1.default.order.create({
        data: {
            userId: decoded.userId,
            orderedBooks: payload.orderedBooks,
        },
    });
    return result;
});
const getAllFromDB = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
    const { userId, role } = decoded;
    const result = [];
    if (role === client_1.UserRole.customer) {
        const customerData = yield prisma_1.default.order.findMany({
            where: {
                userId: userId,
            },
        });
        for (let i = 0; i < customerData.length; i++) {
            result.push(customerData[i]);
        }
    }
    else {
        const adminData = yield prisma_1.default.order.findMany();
        for (let i = 0; i < adminData.length; i++) {
            result.push(adminData[i]);
        }
    }
    return result;
});
const getByIdFromDB = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
    const { userId, role } = decoded;
    let result;
    if (role === client_1.UserRole.customer) {
        const customerData = yield prisma_1.default.order.findUnique({
            where: {
                id,
                userId: userId,
            },
        });
        result = customerData;
        console.log(result);
        // if (customerData.length > 0) {
        //   result = customerData;
        // } else {
        //   result = 'No order found!';
        // }
    }
    else {
        const adminData = yield prisma_1.default.order.findUnique({
            where: {
                id,
            },
        });
        result = adminData;
    }
    return result;
});
exports.OrderService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
};
