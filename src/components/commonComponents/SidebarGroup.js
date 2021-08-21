<<<<<<< HEAD
import React from "react";
import "./SidebarGroup.css";
import { Button } from "primereact/button";

function SidebarGroup({ heading, subHeading, buttons }) {
  return (
    <div className="sidebargroup__container">
      <p className="sidebargroup__mainheading">{heading}</p>
      <p className="sidebargroup__subheading">{subHeading}</p>
      {buttons.map((button) => (
        <Button key={button.label} className="sidebargroup__button">
          <img src={button.icon} alt="logo" />
          <p>{button.label}</p>
        </Button>
      ))}
    </div>
  );
}

export default SidebarGroup;
=======
import React from "react";
import "./SidebarGroup.css";
import { Button } from "primereact/button";

function SidebarGroup({ heading, subHeading, buttons }) {
  return (
    <div className="sidebargroup__container">
      <p className="sidebargroup__mainheading">{heading}</p>
      <p className="sidebargroup__subheading">{subHeading}</p>
      {buttons.map((button) => (
        <Button key={button.label} className="sidebargroup__button">
          <img src={button.icon} alt="logo" />
          <p>{button.label}</p>
        </Button>
      ))}
    </div>
  );
}

export default SidebarGroup;
>>>>>>> ubuntu
