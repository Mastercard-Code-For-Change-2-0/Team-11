import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./AppLayout.jsx";
import AuthLayout from "./AuthLayout.jsx";
// import adminMain from "./components/AdminPanel/AdminMain.jsx"
import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import UserDashboard from "./components/Dashboard/UserDashboard.jsx";
import Events from "./components/EventsGeneral/Events.jsx";
import UnverifiedEvents from "./components/EventsGeneral/eventsHome.jsx";
import Login from "./components/User-Authentication/Login.jsx";
import AdminLogin from "./components/admin-Authentication/adminLogin.jsx";
import Signup from "./components/User-Authentication/Signup.jsx";
import AdminSignup from "./components/admin-Authentication/adminsignup.jsx";
import ForgotPassword from "./components/User-Authentication/ForgotPasswords.jsx";
import ProtectedRoute from "./components/protected routes/protected.jsx";
import AdminPanel from "./components/AdminPanel/AdminMain.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main app routes (with Header + Footer) */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="events" element={<UnverifiedEvents /> } /> */}
        <Route path="events" element={<Events />} />
        <Route path="dashboard" element={<UserDashboard />} />
      </Route>

      {/* STUDENT AUTH ROUTES */}
      <Route path="/student/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* STUDENT APP ROUTES */}
      <Route path="/student" element={<AppLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="dashboard" element={<UserDashboard />} />
      </Route>

      {/* ------------------- ADMIN AUTH ------------------- */}
      <Route path="/admin" element={<AuthLayout />}>
        <Route path="login" element={<AdminLogin />} />
        <Route path="signup" element={<AdminSignup />} />
        {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
      </Route>

      {/* ------------------- ADMIN APP ------------------- */}
      <Route path="/admin" element={<AppLayout />}>
        <Route path="home" element={<AdminPanel />} />
        <Route
          path="dashboard"
          element={
            // <ProtectedRoute role="admin">
            <Dashboard />
            // </ProtectedRoute>
          }
        />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
