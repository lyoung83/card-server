const router = require('express').Router();
const { userController, cardController, rootController } = require('../controllers')


// Users
router.all('/users/:userId/cards/:id', [cardController]);
router.all('/users/:userId/cards', [cardController]);
router.all('/users/:id', [userController]);
router.all('/users', [userController]);
router.all('*', [rootController])



module.exports = () => router;