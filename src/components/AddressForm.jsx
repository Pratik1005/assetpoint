import "../styles/auth.css";
import {useAddress} from "../context/address-context";

const AddressForm = () => {
  const {addressState, addressDispatch} = useAddress();
  return (
    <section className="address-modal">
      <div className="form-ctn form-space">
        <form>
          <h3 className="text-center mg-bottom-md">Address</h3>
          <div className="form-control">
            <label htmlFor="country" className="fw-bold">
              Country
            </label>
            <select name="countries">
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="full-name" className="fw-bold">
              Full name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Firstname Lastname"
            />
          </div>
          <div className="form-control">
            <label htmlFor="mobile" className="fw-bold">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="9999999999"
            />
          </div>
          <div className="form-control">
            <label htmlFor="pin-code" className="fw-bold">
              Pin code
            </label>
            <input
              type="text"
              name="pin-code"
              id="pin-mobile"
              placeholder="400012"
            />
          </div>
          <div className="form-control">
            <label htmlFor="flat-name" className="fw-bold">
              Flat, House no., Building
            </label>
            <input
              type="text"
              name="flat-name"
              id="flat-name"
              placeholder="101 Nirmal House"
            />
          </div>
          <div className="form-control">
            <label htmlFor="area" className="fw-bold">
              Area, Colony, Street, Sector
            </label>
            <input type="text" name="area" id="area" placeholder="Area 1" />
          </div>
          <div className="form-control">
            <label htmlFor="land-mark" className="fw-bold">
              Landmark
            </label>
            <input
              type="text"
              name="land-mark"
              id="land-mark"
              placeholder="ITC hotel"
            />
          </div>
          <div className="form-control">
            <label htmlFor="area" className="fw-bold">
              City
            </label>
            <input type="text" name="city" id="city" placeholder="city" />
          </div>
          <div className="form-control">
            <label htmlFor="area" className="fw-bold">
              State
            </label>
            <select name="states">
              <option value="Maharashtra">Maharashtra</option>
              <option value="Delhi">Delhi</option>
              <option value="Karnataka">Karnataka</option>
            </select>
          </div>
          <div className="form-control form-option">
            <button className="btn btn-primary">Add address</button>
            <button
              className="btn btn-icon-text-outline"
              onClick={() => addressDispatch({type: "TOGGLE_ADDRESS_FORM"})}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export {AddressForm};
