import mongoose from 'mongoose';

const attendenceSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId
    },
    studentID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"student"
    },
    date: {
        type: Date,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    status: {
        type: String,
        Enum:["Present","Absent"]
    },
  

},{ timestamps: true });

const Attendence = mongoose.model('Attendence', attendenceSchema);
export default Attendence;