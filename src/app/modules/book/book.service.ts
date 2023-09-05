import { Book } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { bookSearchableFields } from './book.constant';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IBookFilterRequest } from './book.interface';

const insertIntoDB = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const getAllFromDB = async (
  filters: IBookFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { search, ...filterData } = filters;

  const andConditions = [];

  if (search) {
      andConditions.push({
          OR: bookSearchableFields.map((field) => ({
              [field]: {
                  contains: search,
                  mode: 'insensitive'
              }
          }))
      });
  }

  if (Object.keys(filterData).length > 0) {
      andConditions.push({
          AND: Object.keys(filterData).map((key) => ({
              [key]: {
                  equals: (filterData as any)[key]
              }
          }))
      });
  }

  const whereConditions =
        andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.book.findMany({
        include: {

        },
        where: whereConditions,
        skip,
        take: limit,
        orderBy:
            options.sortBy && options.sortOrder
                ? { [options.sortBy]: options.sortOrder }
                : {
                    createdAt: 'desc'
                }
    });
    const total = await prisma.book.count({
        where: whereConditions
    });

  return {
      meta: {
          total,
          page,
          limit
      },
      data: result
  };
};


const getByIdFromDB = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const getByCategoryIdFromDB = async (id: string): Promise<Book[]> => {
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  getByCategoryIdFromDB,
};
