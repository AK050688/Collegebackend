
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, unique: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cityVillage: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    bloodGroup: { type: String },
    rollNo: {
        type: String,
        required: true, unique: true
    },
    courseTaken: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true
    },
    admissionYear: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    marks: {
        type: Number,
    },
    documents: {
        type: String,
    },
    admission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admission" 
    }
    
},{ timestamps: true });

const Student = mongoose.model('Student', studentSchema);
export default Student;