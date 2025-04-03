import mongoose from 'mongoose';
import { type } from 'os';
import { isNumberObject } from 'util/types';
import validator from 'validator';

// Define a custom validator for mobile number format
const mobileValidator = (value) => {
  const mobileRegex = /^\d{10}$/; // Adjust regex as needed (e.g., for specific country formats)
  return mobileRegex.test(value);
};


const teacherSchema = new mongoose.Schema({
   id:{
          type: mongoose.Schema.Types.ObjectId
      },
  name: {
    type: String,
    trim: true, // Removes whitespace from the beginning and end
  },

  email: {
    type: String,
    unique: true,
    lowercase: true, // Converts the email to lowercase
    validate: {
      validator: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return emailRegex.test(value);
      },
      message: 'Please provide a valid email address',
    },
  },
  mobileNo: {
    type: String,
      validator: mobileValidator,
      message: 'Mobile number must be 10 digits',
  },
  
  qualification:{
  type:String,
  },
 
  
  department: {
    type: String,
    trim: true,
  },
  experience:{
    type:Number
  },
  coursesID:{
  type:Array,
  ref:"Course"
  }
},{ timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
