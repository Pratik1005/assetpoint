import "../styles/auth.css";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../context";
import {NavMenu, Footer} from "../components/allComponents";
import {toast} from "react-toastify";
import axios from "axios";

const Signup = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    pass1: false,
    pass2: false,
  });

  const handleSignUpData = (e) => {
    setSignUpData((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleTogglePassword = (pass) => {
    setIsPasswordVisible((prev) => ({...prev, [pass]: !prev[pass]}));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (signUpData.password === signUpData.confirmPassword) {
      try {
        const response = await axios.post("/api/auth/signup", {
          firstname: signUpData.firstName,
          lastname: signUpData.lastName,
          email: signUpData.email,
          password: signUpData.password,
        });
        const userData = {
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          email: signUpData.email,
        };
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("userData", JSON.stringify(userData));
        setAuth({token: response.data.encodedtoken, isLoggedIn: true});
        toast.success("You have signed in");
        navigate("/");
      } catch (err) {
        console.error("signup", err);
        toast.error(err.message);
      }
    } else {
      toast.error("Passwords must be same");
    }
  };
  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <form className="br-md" onSubmit={handleSignUp}>
          <h2 className="text-center mg-bottom-md">Signup</h2>
          <div className="form-control">
            <label htmlFor="first-name" className="fw-bold">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="first name"
              required
              value={signUpData.firstName}
              onChange={(e) => handleSignUpData(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="last-name" className="fw-bold">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="last name"
              required
              value={signUpData.lastName}
              onChange={(e) => handleSignUpData(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="fw-bold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              required
              value={signUpData.email}
              onChange={(e) => handleSignUpData(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type={isPasswordVisible.pass1 ? "text" : "password"}
              id="password"
              name="password"
              placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
              required
              value={signUpData.password}
              onChange={(e) => handleSignUpData(e)}
            />
            <span
              className="material-icons password-eye"
              onClick={() => handleTogglePassword("pass1")}
            >
              {isPasswordVisible.pass1 ? "visibility_off" : "visibility"}
            </span>
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password" className="fw-bold">
              Confirm password
            </label>
            <input
              type={isPasswordVisible.pass2 ? "text" : "password"}
              id="confirm-password"
              name="confirmPassword"
              placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
              required
              value={signUpData.confirmPassword}
              onChange={(e) => handleSignUpData(e)}
            />
            <span
              className="material-icons password-eye"
              onClick={() => handleTogglePassword("pass2")}
            >
              {isPasswordVisible.pass2 ? "visibility_off" : "visibility"}
            </span>
          </div>
          <div className="form-control">
            <input type="checkbox" id="terms-condition" name="checkbox" />
            <label htmlFor="terms-condition" className="fw-bold">
              I accept all Terms & Conditions
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Create New Account</button>
          </div>
          <div className="account-toggle fw-bold">
            <Link to="/login">
              Already have an account{" "}
              <span className="material-icons fw-bold">chevron_right</span>
            </Link>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export {Signup};
