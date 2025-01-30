import React, { useState } from "react";
import "./adminPanel.css";
import Sidebar from "../../components/sidebar/Sidebar";
import ViewItem from "../../components/Dashboard/ViewItem";//import
import AddItem from "../../components/Dashboard/AddItem";
import EditItem from "../../components/Dashboard/EditItem";
import GalleryView from "../../components/gallery/Gallery";
// import GalleryEdit from "../../components/Gallery/Gallery";
// import AddCakeItem from "../../components/DashBoardTabs/addItem/addCakes";
// import AddNewArrivalItem from "../../components/DashBoardTabs/addItem/addNewArrivals";
// import AddPastryItem from "../../components/DashBoardTabs/addItem/addPastries";
// import AddSpecialItem from "../../components/DashBoardTabs/addItem/addTodaysSpecial";

// import Cakes from "../../components/DashBoardTabs/CakesDash";
// import NewArrivals from "../../components/DashBoardTabs/NewArrivalsDash";
// import Pastries from "../../components/DashBoardTabs/Pastries";
// import TodaysSpecial from "../../components/DashBoardTabs/TodaysSpecialDash";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("menu");
  const [activeTab, setActiveTab] = useState("view");

  const renderContent = () => {
    if (activeSection === "menu") {
      switch (activeTab) {
        case "view":
          return <ViewItem setActiveTab={setActiveTab} />;
        case "add":
          return <AddItem />;
        case "edit":
          return <EditItem />;
        default:
          return <ViewItem setActiveTab={setActiveTab} />;
      }
    } else if (activeSection === "gallery") {
      switch (activeTab) {
        case "view":
          return <GalleryView />;
        case "edit":
          return <GalleryEdit />;
        default:
          return <GalleryView />;
      }
    }
    //  else if (activeSection === "cakes") {
    //   switch (activeTab) {
    //     case "view":
    //       return <Cakes setActiveTab={setActiveTab} />;
    //     case "add":
    //       return <AddCakeItem />;
    //     default:
    //       return <ViewItem setActiveTab={setActiveTab} />;
    //   }
    // } else if (activeSection === "newArrivals") {
    //   switch (activeTab) {
    //     case "view":
    //       return <NewArrivals setActiveTab={setActiveTab} />;
    //     case "add":
    //       return <AddNewArrivalItem />;
    //     default:
    //       return <ViewItem setActiveTab={setActiveTab} />;
    //   }
    // } else if (activeSection === "pastries") {
    //   switch (activeTab) {
    //     case "view":
    //       return <Pastries setActiveTab={setActiveTab} />;
    //     case "add":
    //       return <AddPastryItem />;
    //     default:
    //       return <ViewItem setActiveTab={setActiveTab} />;
    //   }
    // } else if (activeSection === "todaysSpecial") {
    //   switch (activeTab) {
    //     case "view":
    //       return <TodaysSpecial setActiveTab={setActiveTab} />;
    //     case "add":
    //       return <AddSpecialItem />;
    //     default:
    //       return <ViewItem setActiveTab={setActiveTab} />;
    //   }
    // }
  };

  return (
    <div className="admin-panel d-flex">
      <Sidebar
        setActiveSection={setActiveSection}
        setActiveTab={setActiveTab}
      />
      <div className="content-container flex-grow-1 p-4">
        <div className="tabs mb-4">
          {activeSection === "menu" && (
            <>
              <button
                className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
                onClick={() => setActiveTab("view")}
              >
                View Items
              </button>
              <button
                className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
                onClick={() => setActiveTab("add")}
              >
                Add Item
              </button>
            </>
          )}
          {activeSection === "gallery" && (
            <>
              <button
                className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
                onClick={() => setActiveTab("view")}
              >
                View Gallery
              </button>
              {/* <button
                className={`tab-btn ${activeTab === "edit" ? "active" : ""}`}
                onClick={() => setActiveTab("edit")}
              >
                Edit Gallery
              </button> */}
            </>
          )}
          {activeSection === "cakes" && (
            <>
              <button
                className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
                onClick={() => setActiveTab("view")}
              >
                View Cakes
              </button>
              <button
                className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
                onClick={() => setActiveTab("add")}
              >
                Add Cake
              </button>
            </>
          )}
          {activeSection === "newArrivals" && (
            <>
              <button
                className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
                onClick={() => setActiveTab("view")}
              >
                View New Arrivals
              </button>
              <button
                className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
                onClick={() => setActiveTab("add")}
              >
                Add New Arrival
              </button>
            </>
          )}
          {activeSection === "pastries" && (
            <>
              <button
                className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
                onClick={() => setActiveTab("view")}
              >
                View Pastries
              </button>
              <button
                className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
                onClick={() => setActiveTab("add")}
              >
                Add Pastry
              </button>
            </>
          )}
          {activeSection === "todaysSpecial" && (
            <>
              <button
                className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
                onClick={() => setActiveTab("view")}
              >
                View Today's Special
              </button>
              <button
                className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
                onClick={() => setActiveTab("add")}
              >
                Add Special Item
              </button>
            </>
          )}
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;
