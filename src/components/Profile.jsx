import {useState, useEffect} from "react";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  return (
    <>
      <h3 className="text-center pd-bottom-md">Profile</h3>
      <div className="pd-bottom-lg">
        <p>Name</p>
        <p className="para-md">{`${userData.firstName} ${userData.lastName}`}</p>
      </div>
      <div className="pd-bottom-lg">
        <p>Email</p>
        <p className="para-md">{`${userData.email}`}</p>
      </div>
      <div className="pd-bottom-lg">
        <p>Contact</p>
        <p className="para-md">9876543210</p>
      </div>
    </>
  );
};

export {Profile};
