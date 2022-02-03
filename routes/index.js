const express = require('express');

const router = express.Router();
const validateMiddleware = require('../middleware/validate');
const { validateContactUs } = require('../models/contactus')
const homeController = require('../controllers/homepage_controller');
router.get('/',homeController.home);
router.post('/create-appointment',homeController.newAppointment);
router.post('/create-contact',[validateMiddleware(validateContactUs)],homeController.newContact);
module.exports = router;