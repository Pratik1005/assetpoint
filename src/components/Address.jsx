import {useState, useEffect} from "react";
import {v4 as uuid} from "uuid";
import {AddressForm} from "./AddressForm";
import {useAddress} from "../context/address-context";

const Address = () => {
  const {addressState, addressDispatch} = useAddress();
  const {addressList, isAddAddress} = addressState;
  return (
    <>
      <h3 className="text-center pd-bottom-md">Address</h3>
      {addressList.length === 0 && <p>No address to show</p>}
      <div className="address-ctn pd-bottom-lg">
        {addressList.map((item) => (
          <div className="address" key={item.id}>
            <p className="para-md">{item.name}</p>
            <p>{item.flatName}</p>
            <p>{item.landMark}</p>
            <p>{item.area}</p>
            <p>
              {item.city}, {item.pinCode}
            </p>
            <p>{item.country}</p>
            <p>Contact: {item.contact}</p>
            <div className="option">
              <button className="btn-float-action">
                <span class="material-icons">edit</span>
              </button>
              <button
                className="btn-float-action"
                onClick={() =>
                  addressDispatch({type: "DELETE_ADDRESS", payload: item.id})
                }
              >
                <span class="material-icons">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-icon-text"
        onClick={() => addressDispatch({type: "TOGGLE_ADDRESS_FORM"})}
      >
        <span class="material-icons">add</span>Add address
      </button>
      {isAddAddress && <AddressForm />}
    </>
  );
};

export {Address};
