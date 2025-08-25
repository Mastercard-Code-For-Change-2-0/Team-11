import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email" });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.json({ success: false, message: "Email already registered" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin document
    const adminData = {
      email,
      password: hashedPassword,
    };

    const newAdmin = new Admin(adminData);
    const admin = await newAdmin.save();

    // Generate JWT token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Send response
    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default registerAdmin;
