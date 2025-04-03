import mongoose from 'mongoose';
import validator from 'validator';

const admissionSchema = new mongoose.Schema({
  id:{
    type: mongoose.Schema.Types.ObjectId
},
  studentID:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"Student"
  },
  status: {
    type: String,  
    enum: ["pending", "approved", "rejected"],  
    default: "pending"  
},
appliedDate: {
  type: String,       
  default: Date.now 
},
admissionFeeStatus: {
  type: String,  
  enum: ["pending", "paid"],  
},

documentSubmitted:{
  type:String
},
  isStudent: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Admission = mongoose.model('Admission', admissionSchema);

export default Admission;
