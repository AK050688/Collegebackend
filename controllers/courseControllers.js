
import Course from '../models/CourseSchema.js';

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const searchCousers = async (req, res) => {
    try {
        const { name, department} = req.query;
        let filter = {};

        if (name) filter.name = new RegExp(name, 'i'); // Case-insensitive search
        if ( department) filter. department =  department;

        const Cours = await Course.find(filter);
        res.json(Cours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createCourse = async (req, res) => {
    const newCourse = new Course(req.body);
    try {
        const savedCourse = await newCourse.save();
        res.json(savedCourse);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCourse);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ message: 'Course deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};