import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  info: { type: String },

  // Track counts
  totalRegistrations: { type: Number, default: 0 },
  startedCount: { type: Number, default: 0 },
  completedCount: { type: Number, default: 0 },

  students: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      status: { type: String, enum: ["registered", "started", "completed"] },
    },
  ],
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);