var express = require('express');
const guitar =require('../controllers/guitar');
var router = express.Router();

/* GET home page. */
router.get('/', guitar.guitar_view_all_Page);
module.exports = router;
