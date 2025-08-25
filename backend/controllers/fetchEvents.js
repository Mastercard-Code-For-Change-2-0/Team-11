import Event from "../models/Events.js";
import mongoose from "mongoose";

export const fetch_events = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Server error", error });
  }
}
export default fetch_events ;