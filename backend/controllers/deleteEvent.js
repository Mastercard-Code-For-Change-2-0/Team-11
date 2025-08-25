import Event from "../models/Events.js";

export const delete_event = async (req, res) => {
    try {
        const { id } = req.params;

        
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ message: "Event deleted successfully", deletedEvent });
    } catch (error) {
        console.error("Error deleting event:", error);
        res.status(500).json({ message: "Server error", error });
    }
}

export default delete_event ;