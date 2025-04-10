import express from 'express';
import { createExam, getExams } from '../controllers/examControllers.js';

const router = express.Router();

router.post('/', createExam);
router.get('/', getExams);


export default router;
