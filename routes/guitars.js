var express = require('express');
const guitar =require('../controllers/guitar');
var router = express.Router();

/* GET home page. */
// router.get('/', guitar.guitar_view_all_Page);
router.get("/", guitar.guitar_view_all_Page);
/* GET detail costume page */
router.get('/detail', guitar_controlers.guitar_view_one_Page);
module.exports = router;
