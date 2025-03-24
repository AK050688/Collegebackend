import express from 'express';
import { getMarks, createMarks, updateMarks, deleteMarks } from '../controllers/marksController.js';

const router = express.Router();

router.get('/', getMarks);

router.post('/', createMarks);
router.put('/:id', updateMarks);
router.delete('/:id', deleteMarks);

export default router;