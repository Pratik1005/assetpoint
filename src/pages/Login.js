import "../styles/auth.css";
import {NavMenu} from "../components/NavMenu";
import {Link} from "react-router-dom";
const Login = () => {
    return (
        <>
        <NavMenu />
         <section class="form-ctn br-md">
        <form>
            <h2 class="text-center mg-bottom-md">Login</h2>
            <div class="form-control">
                <label for="email" class="fw-bold">Email address</label>
                <input type="text" name="eamil" placeholder="name@gmail.com" />
            </div>
            <div class="form-control">
                <label for="password" class="fw-bold">Password</label>
                <input type="password" name="password" placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;" />
            </div>
            <div class="form-control">
                <input type="checkbox" name="checkbox" />
                <label for="checkbox" class="fw-bold">Remember me <Link to="/forgotpassword" class="forgot-pw">Forgot your Password?</Link></label>
            </div>
            <div class="form-control">
                <button class="btn btn-primary">Login</button>
            </div>
            <div class="account-toggle fw-bold">
                <Link to="/signup">
                    Create New Account <span class="material-icons fw-bold">chevron_right</span>
                </Link>
            </div>
        </form>
    </section>
        </>
    );
}

export {Login};