
var Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.showOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    req.body.proficient = false;
    Skill.addSkill(req.body);
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    console.log('id: ' + req.params.id);
    Skill.deleteSkill(req.params.id);
    res.redirect('/skills');
}