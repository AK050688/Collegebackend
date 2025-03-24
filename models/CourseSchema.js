
import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },

},{ timestamps: true });

const Course = mongoose.model('Course', courseSchema);
export default Course;