import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department Name must be string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.object({
      name: z.string({
        invalid_type_error: 'Faculty Name must be string',
        required_error: 'Faculty name is required',
      }),
    }),
  }),
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Department Name must be string',
        required_error: 'Name is required',
      })
      .optional(),
    academicFaculty: z.object({
      name: z
        .string({
          invalid_type_error: 'Faculty Name must be string',
          required_error: 'Faculty name is required',
        })
        .optional(),
    }),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
