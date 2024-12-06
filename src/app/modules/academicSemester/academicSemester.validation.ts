import { z } from 'zod';
import { codeName, Months, semesterName } from './academicSemester.constant';

const createacademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...semesterName] as [string, ...string[]]),
    code: z.enum([...codeName] as [string, ...string[]]),
    date: z.date(),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const AcademicSemesterValidation = {
  createacademicSemesterValidation,
};
