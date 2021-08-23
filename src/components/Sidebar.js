import React from "react";
import "./Sidebar.css";
import { Card } from "primereact/card";
import SidebarGroup from "./commonComponents/SidebarGroup";
import analytics from "../assets/images/analytics.png";
import buyers from "../assets/images/buyers.png";
import orders from "../assets/images/orders.png";
import subcontractors from "../assets/images/subcontractors.png";
import stores from "../assets/images/stores.png";

function Sidebar() {
  const sideBarFields = [
    {
      heading: "Dashboard",
      subTitle: "All report are seen under Analytics",
      buttons: [{ label: "Analytics", icon: analytics }],
    },
    {
      heading: "Buissness",
      subTitle: "other details",
      buttons: [
        { label: "Buyers", icon: buyers },
        { label: "Orders", icon: orders },
        { label: "Subcontractors", icon: subcontractors },
      ],
    },
    {
      heading: "Inventory",
      subTitle: "Order items and find items in rack",
      buttons: [
        { label: "Stores", icon: stores },
        { label: "Item", icon: subcontractors },
        { label: "Suppliers", icon: subcontractors },
      ],
    },
    {
      heading: "Global settings ",
      subTitle: "other details",
      buttons: [{ label: "Setting", icon: stores }],
    },
  ];
  return (
    <Card id="sidebar__card">
      <div className="sidebar__header">
        <h1>Gates Wears</h1>
      </div>
      {sideBarFields.map((item) => (
        <SidebarGroup
          heading={item.heading}
          subHeading={item.subTitle}
          buttons={item.buttons}
          key={item.heading}
        />
      ))}
    </Card>
  );
}

export default Sidebar;
