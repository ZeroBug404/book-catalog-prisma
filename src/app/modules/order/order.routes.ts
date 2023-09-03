// import express from 'express';
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';

// const router = express.Router();

// router.post(
//   '/create-order',
//   auth(ENUM_USER_ROLE.CUSTOMER),
//   OrderController.insertIntoDB
// );

// router.get(
//   '/',
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   OrderController.getAllFromDB
// );

// export const orderRoutes = router;
