var express = require('express');
var router = express.Router();
var skillsCtlr = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtlr.index);
router.get('/new', skillsCtlr.new);
router.get('/:id', skillsCtlr.show);
router.post('/', skillsCtlr.create);
router.delete('/:id', skillsCtlr.delete);
router.get('/:id/edit', skillsCtlr.edit);
router.put('/:id', skillsCtlr.update);
module.exports = router;
