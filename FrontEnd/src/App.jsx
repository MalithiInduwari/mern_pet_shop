import { Route, Routes, Navigate } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import SignUp from "./Pages/Customer/SignUp";
import Login from "./Pages/Customer/Login";
import EmailVerification from "./Pages/Customer/EmailVerification";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Dashboard from "./Pages/Customer/Dashbord";
import LoadingSpinner from "./components/LoadingSpinner";
import ForgotPassword from "./Pages/Customer/ForgotPassword ";

import AdminApp from "./AdminApp";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import Home from "./Pages/Customer/Home";
import ResetPassword from "./Pages/Customer/ResetPassword";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// Redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function CustomerLayout() {
  return (
    <>
      <Nav />
      <Header />
      <div
        className="min-h-screen bg-gradient-to-br
        from-[#20032b] via-[#320742] to-[#460e5b] flex items-center justify-center relative overflow-hidden"
      >
        <FloatingShape
          color="bg-[#ebd8f0]"
          size="w-64 h-64"
          top="-5%"
          left="10%"
          delay={0}
        />
        <FloatingShape
          color="bg-[#ebd8f0]"
          size="w-48 h-48"
          top="70%"
          left="80%"
          delay={5}
        />
        <FloatingShape
          color="bg-[#ebd8f0]"
          size="w-32 h-32"
          top="40%"
          left="-10%"
          delay={2}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <Login />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <SignUp />
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route
            path="/forgot-password"
            element={
              <RedirectAuthenticatedUser>
                <ForgotPassword />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <RedirectAuthenticatedUser>
                <ResetPassword />
              </RedirectAuthenticatedUser>
            }
          />
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <Routes>
      {/* Admin Panel */}
      <Route path="/admin/*" element={<AdminApp />} />

      {/* Customer Panel */}
      <Route path="/*" element={<CustomerLayout />} />
    </Routes>
  );
}

export default App;
