import "../styles/auth.css";
import {useState} from "react";
import {useAddress} from "../context/address-context";

const AddressForm = ({
  addressData,
  setAddressData,
  isEditMode,
  setIsEditMode,
}) => {
  const {addressState, addressDispatch} = useAddress();

  const handleAddressForm = (e) => {
    e.preventDefault();
    if (isEditMode) {
      addressDispatch({type: "EDIT_ADDRESS", payload: addressData});
      setIsEditMode((prev) => !prev);
    } else {
      addressDispatch({type: "ADD_NEW_ADDRESS", payload: addressData});
    }
    addressDispatch({type: "TOGGLE_ADDRESS_FORM"});
  };

  const handleCancelAddress = () => {
    addressDispatch({type: "TOGGLE_ADDRESS_FORM"});
    setIsEditMode((prev) => !prev);
  };

  return (
    <section className="address-modal">
      <form className="br-md form-space">
        <h3 className="text-center mg-bottom-md">Address</h3>
        <div className="form-control">
          <label htmlFor="country" className="fw-bold">
            Country
          </label>
          <select
            name="countries"
            value={addressData.country}
            onChange={(e) =>
              setAddressData({...addressData, country: e.target.value})
            }
          >
            <option value="india">India</option>
            <option value="canada">Canada</option>
            <option value="germany">Germany</option>
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
          <select
            name="states"
            value={addressData.state}
            onChange={(e) =>
              setAddressData({...addressData, state: e.target.value})
            }
          >
            <option value="maharashtra">Maharashtra</option>
            <option value="delhi">Delhi</option>
            <option value="karnataka">Karnataka</option>
          </select>
        </div>
        <div className="form-control form-option">
          {isEditMode ? (
            <button
              className="btn btn-primary"
              onClick={(e) => handleAddressForm(e)}
            >
              Save address
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={(e) => handleAddressForm(e)}
            >
              Add address
            </button>
          )}
          <button
            className="btn btn-icon-text-outline"
            onClick={handleCancelAddress}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export {AddressForm};
