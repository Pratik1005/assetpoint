import "../styles/auth.css";
import {useState} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../context";
import {NavMenu, Footer} from "../components/allComponents";
import axios from "axios";
import {toast} from "react-toastify";

const Login = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    error: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEmail = (e) => {
    setLoginData((prev) => ({...prev, email: e.target.value, error: false}));
  };

  const handlePassword = (e) => {
    setLoginData((prev) => ({...prev, password: e.target.value, error: false}));
  };

  const handleTogglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginData.email,
        password: loginData.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("userData", JSON.stringify(response.data.foundUser));
      setAuth({token: response.data.encodedToken, isLoggedIn: true});
      toast.success("You have logged in");
      navigate(from, {replace: true});
    } catch (err) {
      console.error("login", err);
      toast.error(err.message);
    }
  };

  const handleTestLogin = (e) => {
    e.preventDefault();
    setLoginData({
      email: "pratikdevle@gmail.com",
      password: "pratik@123456",
      error: false,
    });
  };
  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <form className="br-md" onSubmit={handleLogin}>
          <h2 className="text-center mg-bottom-md">Login</h2>
          {loginData.error && (
            <p className="error-msg form-control">Invalid credentials</p>
          )}
          <div className="form-control">
            <label htmlFor="email" className="fw-bold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              required
              value={loginData.email}
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              id="password"
              required
              value={loginData.password}
              onChange={(e) => handlePassword(e)}
              placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
            />
            <span
              className="material-icons password-eye"
              onClick={handleTogglePassword}
            >
              {isPasswordVisible ? "visibility_off" : "visibility"}
            </span>
          </div>
          <div className="form-control">
            <input type="checkbox" id="remember-me" name="checkbox" />
            <label htmlFor="remember-me" className="fw-bold">
              Remember me{" "}
            </label>
            <Link to="/forgotpassword" className="forgot-pw fw-bold">
              Forgot your Password?
            </Link>
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-control">
            <button
              className="btn btn-primary-outline"
              onClick={(e) => handleTestLogin(e)}
            >
              Login with test credentials
            </button>
          </div>
          <div className="account-toggle fw-bold">
            <Link to="/signup">
              Create New Account{" "}
              <span className="material-icons fw-bold">chevron_right</span>
            </Link>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export {Login};
