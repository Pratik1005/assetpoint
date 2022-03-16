import "../styles/auth.css";
import {NavMenu} from "../components/NavMenu";
import {Link} from "react-router-dom";
const Login = () => {
    return (
        <>
        <NavMenu />
         <section className="form-ctn br-md">
        <form>
            <h2 className="text-center mg-bottom-md">Login</h2>
            <div className="form-control">
                <label htmlFor="email" className="fw-bold">Email address</label>
                <input type="email" name="email" id="email" placeholder="name@gmail.com" />
            </div>
            <div className="form-control">
                <label htmlFor="password" className="fw-bold">Password</label>
                <input type="password" name="password" id="password" placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;" />
            </div>
            <div className="form-control">
                <input type="checkbox" id="remember-me" name="checkbox" />
                <label htmlFor="remember-me" className="fw-bold">Remember me <Link to="/forgotpassword" className="forgot-pw">Forgot your Password?</Link></label>
            </div>
            <div className="form-control">
                <button className="btn btn-primary">Login</button>
            </div>
            <div className="account-toggle fw-bold">
                <Link to="/signup">
                    Create New Account <span className="material-icons fw-bold">chevron_right</span>
                </Link>
            </div>
        </form>
    </section>
        </>
    );
}

export {Login};