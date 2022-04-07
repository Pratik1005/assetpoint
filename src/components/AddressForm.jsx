import "../styles/auth.css";
import {useState} from "react";
import {useAddress} from "../context/address-context";

const AddressForm = () => {
  const {addressState, addressDispatch} = useAddress();
  const [addressData, setAddressData] = useState({
    country: "",
    name: "",
    contact: "",
    pinCode: "",
    flatName: "",
    area: "",
    landMark: "",
    city: "",
    state: "",
  });

  const handleAddressForm = (e) => {
    e.preventDefault();
    addressDispatch({type: "ADD_NEW_ADDRESS", payload: addressData});
    addressDispatch({type: "TOGGLE_ADDRESS_FORM"});
  };

  return (
    <section className="address-modal">
      <div className="form-ctn form-space">
        <form onSubmit={handleAddressForm}>
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
              required
              value={addressData.name}
              onChange={(e) =>
                setAddressData({...addressData, name: e.target.value})
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="contact" className="fw-bold">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="9999999999"
              required
              value={addressData.contact}
              onChange={(e) =>
                setAddressData({...addressData, contact: e.target.value})
              }
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
              required
              value={addressData.pinCode}
              onChange={(e) =>
                setAddressData({...addressData, pinCode: e.target.value})
              }
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
              required
              value={addressData.flatName}
              onChange={(e) =>
                setAddressData({...addressData, flatName: e.target.value})
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="area" className="fw-bold">
              Area, Colony, Street, Sector
            </label>
            <input
              type="text"
              name="area"
              id="area"
              placeholder="Area 1"
              required
              value={addressData.area}
              onChange={(e) =>
                setAddressData({...addressData, area: e.target.value})
              }
            />
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
              required
              value={addressData.landMark}
              onChange={(e) =>
                setAddressData({...addressData, landMark: e.target.value})
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="area" className="fw-bold">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="city"
              required
              value={addressData.city}
              onChange={(e) =>
                setAddressData({...addressData, city: e.target.value})
              }
            />
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
            <button className="btn btn-primary" type="submit">
              Add address
            </button>
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
