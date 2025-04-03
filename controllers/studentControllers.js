
import  Student  from '../models/StudentSchema.js';


export const registerStudent = async (req, res) => {
    try {
        const {
            name,
            fatherName,
            motherName,
            email,
            mobileNo,
            address,
            cityVillage,
            state,
            country,
            gender,
            bloodGroup,
            rollNo,
            courseTaken,
            branchName,
            documents,
            semester,
            admissionYear,
            marks
        } = req.body;

        const newStudent = new Student({
            name,
            fatherName,
            motherName,
            email,
            mobileNo,
            address,
            cityVillage,
            state,
            country,
            gender,
            bloodGroup,
            rollNo,
            courseTaken,
            branchName,
            documents,
            semester,
            marks,
            admissionYear,
        });

        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error registering student', error });
    }
};
export const searchStudent = async (req, res) => {
    try {
        const { name, mobileNo, email } = req.query;
        let filter = {};

        if (name) filter.name = new RegExp(name, 'i')
        if (mobileNo) filter.mobileNo = mobileNo;
        if (email) filter.email = email;

        const students = await Student.find(filter);
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error });
    }
};


// Update
export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error updating student', error });
    }
};
