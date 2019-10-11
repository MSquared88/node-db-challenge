const express = require('express')

const router = express.Router()

const TasksModel = require('./tasks-model')

router.get('/', (req,res) => {
    TasksModel.get()
    .then(tasks => {
        const convertedTasks = tasks.map(task => {
            return {...task, completed: !!task.completed}
        })
        res.status(200).json(convertedTasks)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get tasks', errMessage: err})
    })
})

router.get('/:id',(req,res) => {
    TasksModel.getById(req.params.id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get task with id', errMessage: err})
    })
})

router.post('/', (req, res) => {
    TasksModel.add(req.body)
    .then(task => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get add task', errMessage: err})
    })
})

module.exports = router