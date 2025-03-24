
import express from 'express';
import { getCourses, createCourse, updateCourse, deleteCourse, searchCousers } from '../controllers/courseControllers.js';

const router = express.Router();

router.get('/', getCourses);
router.get('/serach',searchCousers);

router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;