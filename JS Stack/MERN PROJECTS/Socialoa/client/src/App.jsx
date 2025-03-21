import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  const authUser = useSelector((state) => state.auth.authUser);
  return (
    <>
      <Routes>
        <Route
          path="/authentication/*"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={authUser ? <Dashboard /> : <Navigate to="/authentication" />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
