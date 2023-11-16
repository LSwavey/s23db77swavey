var express = require('express');
const guitar_controllers =require('../controllers/guitar');
var router = express.Router();

/* GET home page. */
// router.get('/', guitar.guitar_view_all_Page);
router.get("/", guitar_controllers.guitar_view_all_Page);
/* GET detail costume page */
router.get('/detail', guitar_controllers.guitar_view_one_Page);
// GET create guitar page
router.get('/create', guitar_controllers.guitar_create_Page);
// GET create update page
router.get('/update', guitar_controllers.guitar_update_Page);

module.exports = router;
