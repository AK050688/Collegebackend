import asyncHandler from 'express-async-handler';
import Admission from '../models/AddmissionSchema.js';

// @desc    Register a new admission
// @route   POST /api/admissions
// @access  Public
const registerAdmission = asyncHandler(async (req, res) => {
  const { studentID, status, appliedDate, admissionFeeStatus, documentSubmitted } = req.body;

  // Create a new admission entry
  const admission = await Admission.create({
    studentID,
    status,
    appliedDate,
    admissionFeeStatus,
    documentSubmitted
  });

  if (admission) {
    // Populate the student details
    const populatedAdmission = await Admission.findById(admission._id).populate("studentID");

    res.status(201).json({
      status: true,
      message: "Admission registered successfully",
      data: populatedAdmission,
    });
  } else {
    res.status(400);
    throw new Error("Admission registration failed");
  }
});


// @desc    Get all admissions
// @route   GET /api/admissions
// @access  Public
const getAdmissions = asyncHandler(async (req, res) => {
  const admissions = await Admission.find({});
  res.json({ status: true, data: admissions });
});

// @desc    Get admission by ID
// @route   GET /api/admissions/:id
// @access  Public
const getAdmissionById = asyncHandler(async (req, res) => {
  const admission = await Admission.findById(req.params.id);

  if (admission) {
    res.json({ status: true, data: admission });
  } else {
    res.status(404);
    throw new Error('Admission not found');
  }
});

// @desc    Update an admission
// @route   PUT /api/admissions/:id
// @access  Public
const updateAdmission = asyncHandler(async (req, res) => {
  const admission = await Admission.findById(req.params.id);

  if (admission) {
    admission.studentID = req.body.studentID 
    admission.status = req.body.status
    admission.appliedDate = req.body.appliedDate 
    admission.admissionFeeStatus = req.body.admissionFeeStatus 
    admission.documentSubmitted = req.body.documentSubmitted
    
    const updatedAdmission = await admission.save();

    res.json({
      status: true,
      message: 'Admission updated successfully',
      data: updatedAdmission,
    });
  } else {
    res.status(404);
    throw new Error('Admission not found');
  }
});

// @desc    Delete an admission
// @route   DELETE /api/admissions/:id
// @access  Public
const deleteAdmission = asyncHandler(async (req, res) => {
  const admission = await Admission.findById(req.params.id);

  if (admission) {
    // Use the model's deleteOne method to remove the admission
    await Admission.deleteOne({ _id: req.params.id });
    res.json({ status: true, message: 'Admission removed' });
  } else {
    res.status(404);
    throw new Error('Admission not found');
  }
});


export { registerAdmission, getAdmissions, getAdmissionById, updateAdmission, deleteAdmission };
