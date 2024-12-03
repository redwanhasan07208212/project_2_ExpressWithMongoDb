import Joi from "joi";

const userNameSchema = Joi.object({
    firstName: Joi.string().max(20).trim().required().messages({
      'string.empty': 'First Name Required',
      'string.max': 'The length is greater than 20 characters',
    }),
    middleName: Joi.string().optional(),
    lastName: Joi.string()
      .pattern(/^[A-Za-z]+$/)
      .required()
      .messages({
        'string.empty': 'Last Name Required',
        'string.pattern.base': '{#value} is not valid',
      }),
  });

  // Guardian Schema
  const gurdianSchema = Joi.object({
    fatherName: Joi.string().required().messages({
      'string.empty': 'Father Name Required',
    }),
    fatherOccupation: Joi.string().optional(),
    fatherContactNumber: Joi.string().required().messages({
      'string.empty': 'Father Contact Number Required',
    }),
    motherName: Joi.string().required().messages({
      'string.empty': 'Mother Name Required',
    }),
    motherOccupation: Joi.string().optional(),
    motherContactNumber: Joi.string().required().messages({
      'string.empty': 'Mother Contact Number Required',
    }),
  });

  // Local Guardian Schema
  const localGurdianSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'Name is Required',
    }),
    occupation: Joi.string().optional(),
    contactNumber: Joi.string().required().messages({
      'string.empty': 'Contact Number is Required',
    }),
    address: Joi.string().optional(),
  });

  // Student Schema
  const studentSchema = Joi.object({
    id: Joi.string().required().messages({
      'string.empty': 'ID MUST BE REQUIRED',
    }),
    name: userNameSchema.required().messages({
      'any.required': 'Student Name Must be Filled Up',
    }),
    gender: Joi.string().valid('male', 'female').required().messages({
      'any.only': "The gender field can only be 'male' or 'female'",
      'string.empty': 'Gender is Required',
    }),
    email: Joi.string().email().required().messages({
      'string.email': '{#value} is not a valid email',
      'string.empty': 'Email is Required',
    }),
    contactNumber: Joi.string().required().messages({
      'string.empty': 'Contact Number is Required',
    }),
    dateofBirth: Joi.string().optional(),
    emergencyContactNumber: Joi.string().required().messages({
      'string.empty': 'Emergency Contact Number is Required',
    }),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
      .required()
      .messages({
        'any.only': '{#value} is not in the blood group',
        'string.empty': 'Blood Group Must be specified',
      }),
    presentAddress: Joi.string().required().messages({
      'string.empty': 'Present Address is required and must be valid',
    }),
    permanentAddress: Joi.string().required().messages({
      'string.empty': 'Permanent Address is required and must be valid',
    }),
    gurdian: gurdianSchema.required().messages({
      'any.required': 'Guardian Information is Required',
    }),
    localGurdian: localGurdianSchema.required().messages({
      'any.required': 'Local Guardian Information is Required',
    }),
    profileImg: Joi.string().uri().optional(),
    isActive: Joi.string()
      .valid('active', 'disabled')
      .default('active')
      .messages({
        'any.only': '{#value} is not valid',
      }),
  });
  export default studentSchema;