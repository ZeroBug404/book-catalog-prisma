import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { ProfileService } from "./profile.service";

const getProfileFromDB = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    
    const result = await ProfileService.getProfileFromDB(token);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Profile fetched successfully',
      data: result,
    });
  });
  
  export const ProfileController = {
    getProfileFromDB
  };