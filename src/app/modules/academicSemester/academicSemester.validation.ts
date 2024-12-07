import { z } from 'zod';
import { codeName, Months, semesterName } from './academicSemester.constant';

const createacademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...semesterName] as [string, ...string[]]),
    code: z.enum([...codeName] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});
const updateacademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...semesterName] as [string, ...string[]]).optional(),
    code: z.enum([...codeName] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...string[]]).optional(),
  }),
});
export const AcademicSemesterValidation = {
  createacademicSemesterValidation,
  updateacademicSemesterValidation
};
