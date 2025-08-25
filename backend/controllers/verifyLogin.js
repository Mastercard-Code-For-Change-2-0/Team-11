import studentSchema from "../models/Student.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const verifyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await studentSchema.findOne({ email });
    if (!student) {
      return res.status(200).send({
        message: "Student not found",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(200).send({
        message: "Invalid credentials",
        success: false,
      });
    }

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      message: "Login successful",
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
    res.status(500).send({
      message: "Error in login",
      success: false,
      error,
    });
  }
};

export default verifyLogin;
