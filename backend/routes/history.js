const router = require("express").Router();

const historyController = require('../controllers/history');

router.post('/getaccidbyname', historyController.getaccidbyname);

router.post('/getLastMatchById', historyController.getLastMatchById);

router.post('/getmatchdetails', historyController.getmatchdetails);

router.post('/getaccdetails', historyController.getaccdetails);

router.post('/getrankdetails', historyController.getrankdetails);

module.exports = router;