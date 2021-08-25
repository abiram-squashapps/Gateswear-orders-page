import React from "react";
import "./Navbar.css";
import { InputText } from "primereact/inputtext";
import ProfileIcon from "./ProfileIcon";

function Navbar({ showSidebar, setShowSidebar }) {
  return (
    <div className="navbar">
      {!showSidebar && (
        <i onClick={(e) => setShowSidebar(true)} className="pi pi-bars"></i>
      )}
      <span className="p-input-icon-left flex align-items-center">
        <i className="pi pi-search" />
        <InputText placeholder="Search" />
      </span>
      <ProfileIcon />
    </div>
  );
}

export default Navbar;
