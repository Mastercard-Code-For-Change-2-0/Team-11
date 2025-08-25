import studentSchema from "../models/Student.js";
import Event from "../models/Events.js";

export const registerForEvent = async (req, res) => {
  try {
    const { studentId, eventName } = req.body;

    const student = await studentSchema.findById(studentId);
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    const event = await Event.findOne({ name: eventName });
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    const alreadyRegistered = student.events.find(
      (e) => e.eventId.toString() === event._id.toString()
    );
    if (alreadyRegistered) {
      return res.status(400).json({ success: false, message: "Already registered for this event" });
    }

    student.events.push({
      eventId: event._id,
      eventName: event.name,
      status: "registered",
    });
    student.totalEvents += 1;
    await student.save();

    event.students.push({
      studentId: student._id,
      status: "registered",
    });
    event.totalRegistrations += 1;
    await event.save();

    res.status(200).json({
      success: true,
      message: "Registered for event successfully",
      student: {
        id: student._id,
        totalEvents: student.totalEvents,
      },
      event: {
        id: event._id,
        name: event.name,
        totalRegistrations: event.totalRegistrations,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default registerForEvent;
