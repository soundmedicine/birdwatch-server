const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get("/", (request, response, next) => {
    queries.list().then(birds => {
        response.json({birds})
    }).catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(bird => {
        bird
            ? response.json({bird})
            : response.status(404).json({message: 'Not found'})
    }).catch(next)
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(bird => {
        response.status(201).json({bird: bird});
    }).catch(next)
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next)
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(bird => {
        response.json({bird: bird[0]});
    }).catch(next)
});

module.exports = router
