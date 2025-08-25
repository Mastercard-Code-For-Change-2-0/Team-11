import studentSchema from "../models/Student.js";
import Event from "../models/Events.js";

export const startedEvent = async (req, res) => {
  try {
    const { studentId, eventName } = req.body;
    
    const student = await studentSchema.findById(studentId);
    student.startedEvents += 1;
    await student.save();

    const event = await Event.findOne({ name: eventName });
    event.startedCount += 1;
    await event.save();

    
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default startedEvent;
