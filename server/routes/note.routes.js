import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

//Delete a note from line by noteId
router.route('/notes/:noteId').delete(NoteController.deleteNoteFromLane); 

//Edit a Note
router.route('/notes').put(NoteController.editNote);

export default router;