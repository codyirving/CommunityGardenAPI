const express = require('express');
const router = express.Router();



router.route('/gardenbeds/:id')
.all(function(req, res, next) {
    next()
})
.get(function (req, res, next) {
    res.status(200).json({'beds': req.params.id});
});





module.exports = router;