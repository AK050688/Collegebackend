import mongoose from 'mongoose';

const markSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId
    },
    studentID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"student"
    },
    CourseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    marks: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    examType: {
        type: String,
        Enum:["midterm","final","practical","internal"]
    },
    remarks:{
        type:String
    }

},{ timestamps: true });

const Marks = mongoose.model('Marks', markSchema);
export default Marks;