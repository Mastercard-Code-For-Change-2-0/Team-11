import Event from "../models/Events.js";
import mongoose from "mongoose";

export const update_events = async (req, res) => {
    try {
       const { id } = req.params;
        const updateFields = req.body;

        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        if (updateFields.date) {
            updateFields.date = new Date(updateFields.date);
        }

        const updatedEvent = await Event.findByIdAndUpdate(
            id,
            updateFields,
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error("Error updating event:", error);
        res.status(500).json({ message: "Server error", error });
    }
    }

export default update_events ;