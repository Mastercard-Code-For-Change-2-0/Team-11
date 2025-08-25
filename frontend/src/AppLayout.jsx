import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import StudentHeader from "./components/Header/StudentHeader";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  // Check route types
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isStudentRoute = location.pathname.startsWith("/student");

  return (
    <>
      {!isAdminRoute && !isStudentRoute && <Header />}
      {isStudentRoute && <StudentHeader />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
