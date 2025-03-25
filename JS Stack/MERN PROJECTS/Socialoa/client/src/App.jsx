import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import { CheckAuth } from "./redux/actions/AuthActions";
import VerifyEmail from "./components/Auth/Forms/VerifyEmail";
import ResetPassword from "./components/Auth/Forms/ResetPassword";
import AuthForm from "./components/Auth/Forms/AuthForms";

function App() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(CheckAuth());
    console.log(authUser);
  }, [CheckAuth]);

  return (
    <>
      <Routes>
        <Route
          path="/authentication"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        >
          <Route path="" element={<AuthForm />} />
          <Route path="verification" element={<VerifyEmail />} />
          <Route path="reset-pwd" element={<ResetPassword />} />
        </Route>
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
