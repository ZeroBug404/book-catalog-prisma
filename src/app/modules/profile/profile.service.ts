import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

const getProfileFromDB = async (token: string | undefined) => {
  const decoded = jwtHelpers.verifyToken(
    token as string,
    config.jwt.secret as Secret
  );

  const { userId } = decoded;

  const result = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return result;
};

export const ProfileService = {
  getProfileFromDB,
};
