import { Router } from 'express';
import { celebrate } from 'celebrate';
import * as notesController from '../controllers/notesController.js';
import { authenticate } from '../middleware/authenticate.js';
import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const router = Router();

router.use(authenticate);

router.get('/', celebrate(getAllNotesSchema), notesController.getAllNotes);

router.get('/:noteId', celebrate(noteIdSchema), notesController.getNoteById);

router.post('/', celebrate(createNoteSchema), notesController.createNote);

router.delete('/:noteId', celebrate(noteIdSchema), notesController.deleteNote);

router.patch(
  '/:noteId',
  celebrate(updateNoteSchema),
  notesController.updateNote,
);

export default router;
