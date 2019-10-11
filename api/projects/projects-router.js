const express = require('express')

const router = express.Router()

const ProjectsModel = require('./projects-model')

router.get('/', (req,res) => {
    ProjectsModel.get()
    .then(projects => {
        const convertedProjects = projects.map(project => {
            return {...project, completed: !!project.completed}
        })
        res.status(200).json(convertedProjects)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get projects', errMessage: err})
    })
})

router.get('/:id',(req,res) => {
    ProjectsModel.getById(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get project with id', errMessage: err})
    })
})

router.post('/', (req, res) => {
    ProjectsModel.add(req.body)
    .then(project => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get add project', errMessage: err})
    })
})

module.exports = router