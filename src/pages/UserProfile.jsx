import "../styles/user-profile.css";
import {useState} from "react";
import {
  NavMenu,
  Footer,
  Profile,
  Address,
  Setting,
  AddressForm,
} from "../components/allComponents";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(1);

  const showCurrentTab = () => {
    switch (activeTab) {
      case 1:
        return <Profile />;
      case 2:
        return <Address />;
      case 3:
        return <Setting />;
      default:
        return <Profile />;
    }
  };

  const isTabActive = (num) => {
    if (activeTab === num) {
      return "tab-active";
    }
  };

  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <h2 className="text-center">Your Account</h2>
        <div className="tab-wrapper br-md">
          <div className="tab-ctn">
            <div
              className={`tab-item ${isTabActive(1)}`}
              onClick={() => setActiveTab(1)}
            >
              <p className="text-center pd-sm fw-bold">Profile</p>
            </div>
            <div
              className={`tab-item ${isTabActive(2)}`}
              onClick={() => setActiveTab(2)}
            >
              <p className="text-center pd-sm fw-bold">Address</p>
            </div>
            <div
              className={`tab-item ${isTabActive(3)}`}
              onClick={() => setActiveTab(3)}
            >
              <p className="text-center pd-sm fw-bold">Settings</p>
            </div>
          </div>
          <div className="tab-info pd-lg">{showCurrentTab()}</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export {UserProfile};
