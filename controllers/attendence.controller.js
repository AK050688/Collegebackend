
import Attendence from '../models/attendence.schema.js';

export const getAttendence = async (req, res) => {
    try {
        const attend = await Attendence.find();
        res.json(attend);
    } catch (err) {
        res.status(500).send(err);
    }
};



export const createAttendence = async (req, res) => {
    const attend = new Attendence(req.body);
    try {
        const savedAttend = await attend.save();
        res.json(savedAttend);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const updateAttendence = async (req, res) => {
    try {
        const updatedattend = await Attendence.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedattend);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deleteAttendence = async (req, res) => {
    try {
        await Attendence.findByIdAndDelete(req.params.id);
        res.json({ message: 'Marks deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};