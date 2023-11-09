var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/guitar');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Guitar.
router.post('/guitar', guitar_controller.guitar_create_post);
// DELETE request to delete Guitar.
router.delete('/guitar/:id', guitar_controller.guitar_delete);
// PUT request to update Guitar.
router.put('/guitar/:id', guitar_controller.guitar_update_put);
// GET request for one Guitar.
router.get('/guitar/:id', guitar_controller.guitar_detail);
// GET request for list of all Guitar items.
router.get('/guitar', guitar_controller.guitar_list);
module.exports = router;