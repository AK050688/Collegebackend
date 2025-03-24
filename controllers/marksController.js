
import Marks from '../models/marksSchema.js';

export const getMarks = async (req, res) => {
    try {
        const Mrks = await Marks.find();
        res.json(Mrks);
    } catch (err) {
        res.status(500).send(err);
    }
};



export const createMarks = async (req, res) => {
    const newMarks = new Marks(req.body);
    try {
        const savedMarks = await newMarks.save();
        res.json(savedMarks);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const updateMarks = async (req, res) => {
    try {
        const updatedMarks = await Marks.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMarks);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deleteMarks = async (req, res) => {
    try {
        await Marks.findByIdAndDelete(req.params.id);
        res.json({ message: 'Marks deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};