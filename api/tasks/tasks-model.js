const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    add,
}

function get() {
    return db('tasks')
    
}

function getById(id) {
    return db('tasks')
    .where({id})
}

function add(task) {
    return db('tasks')
    .insert(task)
}