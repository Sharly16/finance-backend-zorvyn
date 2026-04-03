const router = require('express').Router();
const auth = require('../middleware/authMiddleware');

const { getSummary } = require('../controllers/dashboardController');

router.get('/', auth, getSummary);

module.exports = router;