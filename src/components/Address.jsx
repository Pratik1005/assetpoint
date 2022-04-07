import {useState, useEffect} from "react";
import {v4 as uuid} from "uuid";
import {AddressForm} from "./AddressForm";

const Address = () => {
  const [addAddress, setAddAddress] = useState(false);
  const [addressList, setAddressList] = useState([
    {
      id: uuid(),
      name: "Pratik Devle",
      flatName: "803/A, Nirmal House",
      area: "Area 1",
      landMark: "",
      city: "Mumbai",
      pinCode: "400012",
      state: "Maharashtra",
      country: "India",
      contact: "9876543210",
    },
  ]);

  return (
    <>
      <h3 className="text-center pd-bottom-md">Address</h3>
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
              <button className="btn-float-action">
                <span class="material-icons">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-icon-text"
        onClick={() => setAddAddress((prev) => !prev)}
      >
        <span class="material-icons">add</span>Add address
      </button>
      {addAddress && <AddressForm />}
    </>
  );
};

export {Address};
