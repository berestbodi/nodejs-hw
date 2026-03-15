import { Joi } from 'celebrate';

export const registerUserSchema = Joi.object({
  username: Joi.string().trim(),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 8 characters long',
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
