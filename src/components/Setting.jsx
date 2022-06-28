import {useAuth} from "../context/auth-context";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Setting = () => {
  const navigate = useNavigate();
  const {setAuth} = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setAuth({token: "", isLoggedIn: false});
    toast.success("Logged out");
    navigate("/");
  };
  return (
    <>
      <h3 className="text-center pd-bottom-md">Settings</h3>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export {Setting};
