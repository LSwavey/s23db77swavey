var Guitar = require('../models/guitar');
// List of all Costumes
exports.guitar_list = function(req, res) {
res.send('NOT IMPLEMENTED: Guitar list');
};
// for a specific Guitar.
exports.guitar_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Guitar detail: ' + req.params.id);
};
// Handle Guitar create on POST.
exports.guitar_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Guitar create POST');
};
// Handle Guitar delete form on DELETE.
exports.guitar_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Guitar delete DELETE ' + req.params.id);
};
// Handle Guitar update form on PUT.
exports.guitar_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Guitar update PUT' + req.params.id);
};

// List of all Guitars
exports.guitar_list = async function(req, res) {
try{
theGuitars = await Guitar.find();
res.send(theGuitars);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// VIEWS
// Handle a show all view
exports.guitar_view_all_Page = async function(req, res) {
    try{
    theGuitars = await Guitar.find();
    res.render('guitar', { title: 'Guitar Search Results', results: theGuitars });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
