import { z } from 'zod';
const userSchemaValidation = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Passwords can not be more than 20 characters' })
    .optional(),
  needPasswordChange: z.boolean().optional(),
});
export const userValidation = {
  userSchemaValidation,
};
