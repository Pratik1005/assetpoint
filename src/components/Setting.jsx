import { Link } from "react-router-dom";

const Setting = () => {
    return (
        <>
        <h3 className="text-center pd-bottom-md">Settings</h3>
         <Link to="/login" className="btn btn-primary">Logout</Link>
        </>
       
    );
}

export {Setting}