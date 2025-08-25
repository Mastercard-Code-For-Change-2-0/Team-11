import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    college: { type: String, required: true },
    yearOfStudy: { type: Number, required: true },
    fieldOfStudy: { type: String, required: true },
    password: { type: String, required: true },  // 🔑 Add password

    // Track counts
    totalEvents: { type: Number, default: 0 },
    startedEvents: { type: Number, default: 0 },
    completedEvents: { type: Number, default: 0 },

    events: [
      {
        eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
        eventName: String,
        status: { type: String, enum: ["registered", "started", "completed"] },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
