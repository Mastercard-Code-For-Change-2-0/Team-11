import Event from "../models/Events.js";
import mongoose from "mongoose";

const create_Event = async (req, res) => {
  try {
    const { name, date, info } = req.body;

    if (!name || !date) {
      return res.status(400).json({ message: "Name and date are required" });
    }

    const newEvent = new Event({
      name,
      date: new Date(date),
      info
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Server error", error });
  }
}


export default create_Event;