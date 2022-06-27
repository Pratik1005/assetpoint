import {useState} from "react";
import {useLocation} from "react-router-dom";
import {AddressForm} from "./AddressForm";
import {useAddress} from "../context/address-context";

const Address = ({setIsAddressSelected}) => {
  const {addressState, addressDispatch} = useAddress();
  const {initialAddressData, addressList, isAddAddress} = addressState;
  const [addressData, setAddressData] = useState({...initialAddressData});
  const [isEditMode, setIsEditMode] = useState(false);
  const location = useLocation();

  const handleAddAddress = () => {
    setAddressData({...initialAddressData});
    addressDispatch({type: "TOGGLE_ADDRESS_FORM"});
  };

  const handleEditAddress = (item) => {
    setAddressData({
      id: item.id,
      country: item.country,
      name: item.name,
      contact: item.contact,
      pinCode: item.pinCode,
      flatName: item.flatName,
      area: item.area,
      landMark: item.landMark,
      city: item.city,
      state: item.state,
    });
    console.log(isEditMode);
    setIsEditMode((prev) => !prev);
    addressDispatch({type: "TOGGLE_ADDRESS_FORM"});
  };
  return (
    <>
      <h3 className="text-center pd-bottom-md">Address</h3>
      {addressList.length === 0 && <p>No address to show</p>}
      <div className="address-ctn pd-bottom-lg">
        {addressList.map((item) => (
          <div className="address pd-bottom-lg" key={item.id}>
            {location.pathname === "/checkout" ? (
              <div>
                <input
                  type="radio"
                  id={item.name}
                  name="address"
                  onChange={() => setIsAddressSelected(true)}
                />
                <label htmlFor={item.name} className="para-md address-radio">
                  {item.name}
                </label>
              </div>
            ) : (
              <p className="para-md">{item.name}</p>
            )}
            <p>{item.flatName}</p>
            <p>{item.landMark}</p>
            <p>{item.area}</p>
            <p>
              {item.city}, {item.state}, {item.pinCode}
            </p>
            <p>{item.country}</p>
            <p>Contact: {item.contact}</p>
            {location.pathname === "/account" && (
              <div className="option">
                <button
                  className="btn-float-action"
                  onClick={() => handleEditAddress(item)}
                >
                  <span className="material-icons">edit</span>
                </button>
                <button
                  className="btn-float-action"
                  onClick={() =>
                    addressDispatch({type: "DELETE_ADDRESS", payload: item.id})
                  }
                >
                  <span className="material-icons">delete</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="btn btn-icon-text" onClick={handleAddAddress}>
        <span className="material-icons">add</span>Add address
      </button>
      {isAddAddress && (
        <AddressForm
          addressData={addressData}
          setAddressData={setAddressData}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
        />
      )}
    </>
  );
};

export {Address};
