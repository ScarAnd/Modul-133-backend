/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import Joi from 'joi';
import express from 'express';
import validate from '../../middleware/validate.js';
import controller from '../../controller/user-controller.js';

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

const router = express.Router();

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

router.get(
  '/getUsers',
  validate({
    query: Joi.object(),
  }),
  controller.getUsers
);

router.patch(
  '/updateById',
  validate({
    body: Joi.object({
      id: Joi.number().required(),
      firstname: Joi.string(),
      lastname: Joi.string(),
      email: Joi.string(),
      isAdmin: Joi.boolean(),
    }),
  }),
  controller.updateUser
);

router.get(
  '/getUserById',
  validate({
    query: Joi.object({
      id: Joi.number().required(),
    }),
  }),
  controller.getUserById
);

router.delete(
  '/deleteUser',
  validate({
    body: Joi.object({
      id: Joi.number().required(),
    }),
  }),
  controller.deleteUser
);

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/
export default router;
