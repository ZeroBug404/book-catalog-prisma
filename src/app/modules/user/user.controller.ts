import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

// const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await StudentService.getByIdFromDB(id);
//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: 'Student fetched successfully',
//         data: result
//     });
// });

// const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const payload = req.body;
//     const result = await StudentService.updateIntoDB(id, payload);
//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: 'Student updated successfully',
//         data: result
//     });
// });

// const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await StudentService.deleteFromDB(id);
//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: 'Student deleted successfully',
//         data: result
//     });
// })

export const UserController = {
  getAllFromDB,
  //   getByIdFromDB,
  //   updateIntoDB,
  //   deleteFromDB,
};
