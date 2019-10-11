const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    add,
    getProjectTasks
}

function get() {
    return db('projects')
}

function getById(id) {
    return db('projects')
    .where({id})
}

function add(project) {
    return db('projects')
    .insert(project)
}

function getProjectTasks(projectId) {
    return db('projects as p')
    .where('p.id', '=', projectId)
    .join('tasks as t', 't.projects_id', '=', 'p.id')
    .select('p.name as project_name', "p.description as project_description", 't.description as task_description')
}