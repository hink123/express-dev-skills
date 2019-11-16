
var Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
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

function edit(req, res) {
    const skill = Skill.showOne(req.params.id)
    console.log(skill);
    res.render('skills/edit', {
        skill,
        idx: req.params.id
    });
}

function update(req, res) {
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}