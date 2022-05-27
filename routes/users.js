const express = require('express');
const router = express.Router();

const { body, param } = require('express-validator');

const contactsController = require('../controllers/users');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createUser);

router.put('/:id',
            param('id').isLength({min:24, max:24}),
            body('email').isEmail(), 
            body('password').isStrongPassword({minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1}).withMessage("Password must contain at least 8 characters with at least one uppercase, one lowercase, one symbol, and a number."),
            contactsController.updateUser);

router.delete('/:id', param('id').isLength({min:24, max:24}), contactsController.deleteUser);

module.exports = router;