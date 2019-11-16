var skills = [
    {skill: 'html', proficient: true},
    {skill: 'css', proficient: true},
    {skill: 'jasvascript', proficient: true},
    {skill: 'express', proficient: false}
];

module.exports = {
    getAll,
    showOne,
    addSkill,
    deleteSkill, 
    update
}

function getAll() {
    return skills;
}

function showOne(idx) {
    return skills[idx];
}

function addSkill(devSkill) {
    skills.push(devSkill);
}

function deleteSkill(idx) {
    skills.splice(idx, 1);
}

function update(idx, skill) {
    skills.splice(idx, 1, skill);
}