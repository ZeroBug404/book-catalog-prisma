"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/create-book', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.insertIntoDB);
router.get('/:id', book_controller_1.BookController.getByIdFromDB);
router.get('/:categoryId/category', book_controller_1.BookController.getByCategoryIdFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.deleteFromDB);
router.get('/', book_controller_1.BookController.getAllFromDB);
exports.bookRoutes = router;
