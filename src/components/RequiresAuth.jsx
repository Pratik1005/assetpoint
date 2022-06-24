import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../context/allContext";

const RequiresAuth = ({children}) => {
  const {auth} = useAuth();
  const location = useLocation();
  return auth.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{from: location}} replace />
  );
};

export {RequiresAuth};
