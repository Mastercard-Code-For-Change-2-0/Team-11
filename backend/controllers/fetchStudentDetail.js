import Student from "../models/Student.js";

export const fetchAllStudents = async (req, res) => {
  try {
    const students = await Student.find({}, "-password");
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const exportStudentsCsv = async (req, res) => {
  try {
    const students = await Student.find({}, "-password").lean();

    const headers = [
      "name",
      "email",
      "phone",
      "college",
      "yearOfStudy",
      "fieldOfStudy",
      "totalEvents",
      "startedEvents",
      "completedEvents",
      "createdAt",
      "updatedAt",
    ];

    const escapeCsv = (value) => {
      if (value === null || value === undefined) return "";
      const str = String(value);
      if (/[",\n]/.test(str)) {
        return '"' + str.replace(/"/g, '""') + '"';
      }
      return str;
    };

    const rows = students.map((s) => [
      s.name,
      s.email,
      s.phone,
      s.college,
      s.yearOfStudy,
      s.fieldOfStudy,
      s.totalEvents,
      s.startedEvents,
      s.completedEvents,
      s.createdAt?.toISOString?.() || s.createdAt,
      s.updatedAt?.toISOString?.() || s.updatedAt,
    ]);

    const csv = [headers.join(","), ...rows.map((r) => r.map(escapeCsv).join(","))].join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=students.csv");
    res.status(200).send(csv);
  } catch (error) {
    console.error("Error exporting students CSV:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export default fetchAllStudents;


