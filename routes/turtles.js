const express = require('express');
const router = express.Router();
const queries = require('../turtle-queries');

router.get('/', (request, response, next) => {
  queries
    .list()
    .then(turtles => {
      response.json({ turtles });
    })
    .catch(next);
});

router.get('/:id', (request, response, next) => {
  queries
    .read(request.params.id)
    .then(turtle => {
      turtle
        ? response.json({ turtle })
        : response.status(404).json({ message: 'Not found' });
    })
    .catch(next);
});

router.post('/', (request, response, next) => {
  queries
    .create(request.body)
    .then(turtle => {
      response.status(201).json({ turtle: turtle });
    })
    .catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.status(204).json({ deleted: true });
    })
    .catch(next);
});

router.put('/:id', (request, response, next) => {
  queries
    .update(request.params.id, request.body)
    .then(turtle => {
      response.json({ turtle: turtle[0] });
    })
    .catch(next);
});

module.exports = router;
