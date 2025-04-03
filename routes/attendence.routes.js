import express from 'express';
import { getAttendence,createAttendence ,updateAttendence,deleteAttendence} from '../controllers/attendence.controller.js';

const router = express.Router();

router.get('/', getAttendence);

router.post('/', createAttendence);
router.put('/:id', updateAttendence);
router.delete('/:id', deleteAttendence);

export default router;