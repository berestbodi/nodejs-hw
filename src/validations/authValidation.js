import { Joi, Segments } from 'celebrate';

export const registerUserSchema = {
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().trim().optional(),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
    password: Joi.string().min(8).required().messages({
      'any.required': 'Password is required',
      'string.min': 'Password must be at least 8 characters long',
    }),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Password is required',
    }),
  }),
};
