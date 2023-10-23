const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// GET /api/notes
router.get('/', notesCtrl.getAll);

// POST /api/notes/:id
router.post('/:id', notesCtrl.create)


module.exports = router;