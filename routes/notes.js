const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes');

router.get('/', notesController.getNotes);
router.post('/createNote', notesController.createNote);
router.put('/markComplete', notesController.markComplete);
router.put('/markIncomplete', notesController.markIncomplete);
router.delete('/deleteNote', notesController.deleteNote);

module.exports = router