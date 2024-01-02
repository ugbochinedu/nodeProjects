const express = require('express')
const router = express.Router();
const {getAllTasks} = require('../controllers/tasks')

// router.get('/', people);
// router.post('/', CreatePerson);
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getAllTasks)

module.exports = router;