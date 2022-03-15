import "../styles/auth.css";
import {NavMenu} from "../components/NavMenu";
import {Link} from "react-router-dom";
const Signup = () => {
    return (
        <>
        <NavMenu />
        <section class="form-ctn br-md">
        <form>
            <h2 class="text-center mg-bottom-md">Signup</h2>
            <div class="form-control">
                <label for="first-name" class="fw-bold">First name</label>
                <input type="text" name="first-name" placeholder="first name" />
            </div>
            <div class="form-control">
                <label for="last-name" class="fw-bold">Last name</label>
                <input type="text" name="last-name" placeholder="last name" />
            </div>
            <div class="form-control">
                <label for="email" class="fw-bold">Email address</label>
                <input type="text" name="email" placeholder="name@gmail.com" />
            </div>
            <div class="form-control">
                <label for="password" class="fw-bold">Password</label>
                <input type="password" name="password" placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;" />
            </div>
            <div class="form-control">
                <label for="confirm-password" class="fw-bold">Confirm password</label>
                <input type="password" name="confirm-password" placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;" />
            </div>
            <div class="form-control">
                <input type="checkbox" name="checkbox" />
                <label for="checkbox" class="fw-bold">I accept all Terms & Conditions</label>
            </div>
            <div class="form-control">
                <button class="btn btn-primary">Create New Account</button>
            </div>
            <div class="account-toggle fw-bold">
                <Link to="/login">
                    Already have an account <span class="material-icons fw-bold">chevron_right</span>
                </Link>
            </div>
        </form>
    </section>
    </>
    );
}

export {Signup};