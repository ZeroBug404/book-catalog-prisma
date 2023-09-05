/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Order, Prisma, UserRole } from '@prisma/client';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  payload: Order,
  token: string | undefined
): Promise<Order> => {
  const decoded = jwtHelpers.verifyToken(
    token as string,
    config.jwt.secret as Secret
  );

  const result = await prisma.order.create({
    data: {
      userId: decoded.userId,
      orderedBooks: payload.orderedBooks as Prisma.InputJsonValue,
    },
  });
  return result;
};

const getAllFromDB = async (token: string | undefined) => {
  const decoded = jwtHelpers.verifyToken(
    token as string,
    config.jwt.secret as Secret
  );

  const { userId, role } = decoded;

  const result = [];

  if (role === UserRole.customer) {
    const customerData = await prisma.order.findMany({
      where: {
        userId: userId,
      },
    });

    for (let i = 0; i < customerData.length; i++) {
      result.push(customerData[i]);
    }
  } else {
    const adminData = await prisma.order.findMany();

    for (let i = 0; i < adminData.length; i++) {
      result.push(adminData[i]);
    }
  }

  return result;
};

export const OrderService = {
  insertIntoDB,
  getAllFromDB,
};
