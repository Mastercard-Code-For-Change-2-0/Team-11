import studentSchema from "../models/Student.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const registerStudent = async (req, res) => {
  try {
    const { name, email, phone, college, yearOfStudy, fieldOfStudy, password } =
      req.body;

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email" });
    }

    const existingStudent = await studentSchema.findOne({ email });
    if (existingStudent) {
      return res.json({ success: false, message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const studentData = {
      name,
      email,
      phone,
      college,
      yearOfStudy,
      fieldOfStudy,
      password: hashedPassword,
    };

    const newStudent = new studentSchema(studentData);
    const student = await newStudent.save();

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      success: true,
      token,
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        phone: student.phone,
        college: student.college,
        yearOfStudy: student.yearOfStudy,
        fieldOfStudy: student.fieldOfStudy,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default registerStudent;
