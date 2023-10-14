const { Router } = require('express');
const SalesController = require('../controllers/SalesController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const verifyUserAurthorization = require('../middlewares/verifyUserAuthorization');

const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated);
salesRoutes.use(verifyUserAurthorization(['admin']));

salesRoutes.get('/', salesController.index);

module.exports = salesRoutes;
