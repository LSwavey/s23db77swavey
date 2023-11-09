var express = require('express');
const guitar = controllers=require('../controllers/guitar');
var router = express.Router();

/* GET home page. */
router.get('/', guitar_controllers.guitar_view_all_Page);
module.exports = router;
