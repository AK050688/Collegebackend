
import express from 'express';
import { registerStudent, getAllStudents, updateStudent ,searchStudent} from '../controllers/studentControllers.js';

const router = express.Router();


router.post('/register', registerStudent);
router.get('/serach',searchStudent );


router.get('/all', getAllStudents);


router.put('/update/:id', updateStudent);

export default router;
