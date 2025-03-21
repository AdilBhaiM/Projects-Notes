import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthRight from '../Auth/AuthRight.jsx'
import AuthForm from "./Forms/AuthForms.jsx";
import VerifyEmail from "./Forms/VerifyEmail";
import ResetPassword from "./Forms/ResetPassword";
import Dashboard from "../../pages/Dashboard.jsx";

const MyRoutes = () => {
  const authUser = useSelector((state) => state.Reducers.authUser);

  return (
      <Routes>
        {/* Home Route - Redirect to Dashboard or Authentication */}
        <Route path="/" element={authUser ? <Dashboard /> : <Navigate to="/authentication" />} />
        {/* Authentication Parent Route (AuthRight is the layout) */}
        <Route path="/authentication" element={<AuthRight />}>
          <Route index element={<AuthForm />} /> {/* Default is AuthForm */}
          <Route path="verify" element={<VerifyEmail />} />
          <Route path="reset_password" element={<ResetPassword />} />
        </Route>
      </Routes>
  );
}

export default MyRoutes;
