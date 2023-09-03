import prisma from '../../../shared/prisma';

const getAllFromDB = async () => {
  const result = await prisma.user.findMany();

  return result;
};

// const getByIdFromDB = async (id: string): Promise<Student | null> => {
//   const result = await prisma.student.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       academicFaculty: true,
//       academicDepartment: true,
//       academicSemester: true,
//     },
//   });
//   return result;
// };

// const updateIntoDB = async (
//   id: string,
//   payload: Partial<Student>
// ): Promise<Student> => {
//   const result = await prisma.student.update({
//     where: {
//       id,
//     },
//     data: payload,
//     include: {
//       academicSemester: true,
//       academicDepartment: true,
//       academicFaculty: true,
//     },
//   });
//   return result;
// };

// const deleteFromDB = async (id: string): Promise<Student> => {
//   const result = await prisma.student.delete({
//     where: {
//       id,
//     },
//     include: {
//       academicSemester: true,
//       academicDepartment: true,
//       academicFaculty: true,
//     },
//   });
//   return result;
// };

export const UserService = {
  getAllFromDB,
  // getByIdFromDB,
  // updateIntoDB,
  // deleteFromDB
};
