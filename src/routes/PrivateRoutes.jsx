/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Loading from "../components/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoutes;
