import {NavMenu} from "../components/NavMenu";
import {Link} from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
        <NavMenu />
        <section class="form-ctn br-md">
        <form>
            <h2 class="text-center mg-bottom-md">Forgot Password</h2>
            <div class="form-control">
                <label for="email" class="fw-bold">Email address</label>
                <input type="text" name="eamil" placeholder="name@gmail.com" />
            </div>
            <div class="form-control">
                <button class="btn btn-primary">Reset Password</button>
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

export {ForgotPassword};