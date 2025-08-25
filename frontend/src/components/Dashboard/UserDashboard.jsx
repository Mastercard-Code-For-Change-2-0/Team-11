import React from "react";
import { motion } from "framer-motion";
import DashboardHeader from "./DashboardHeader";
import ProfileCard from "./ProfileCard";
import ProgramsTable from "./ProgramsTable";
import AccountDetails from "./AccountDetails";
import RecentActivities from "./RecentActivities";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const UserDashboard = () => {
  const user = {
    name: "Raghav Kumar Jha",
    email: "raghavjha619@gmail.com",
    phone: "+91 9876543210",
    id: "user-123",
    accountNumber: "1234 5678 9012",
    ifsc: "HDFC0001234",
    balance: "₹1,25,000",
    lastTransaction: "₹5,000 credited on 20 Aug 2025",
    programs: [
      { name: "Education Support", date: "Jan 2025", status: "Completed" },
      { name: "Health Camp", date: "Mar 2025", status: "Ongoing" },
    ],
  };

  return (
    <div className="p-8 pt-24 bg-gray-50 min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
      {/* Dashboard Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <DashboardHeader />
      </motion.div>

      {/* Profile Card */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <ProfileCard user={user} />
      </motion.div>

      {/* Programs + Account Details */}
      <div className="grid grid-cols-1  gap-6 w-full mb-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <ProgramsTable programs={user.programs} />
        </motion.div>

        
      </div>

      {/* Recent Activities */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        <RecentActivities activities={user.programs} />
      </motion.div>
    </div>
  );
};

export default UserDashboard;
