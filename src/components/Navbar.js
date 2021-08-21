import React from "react";
import "./Navbar.css";
import { InputText } from "primereact/inputtext";
import ProfileIcon from "./ProfileIcon";

function Navbar() {
  return (
    <div className="navbar">
      <span className="p-input-icon-left w-full">
        <i className="pi pi-search" />
        <InputText placeholder="Search" />
      </span>
      <ProfileIcon />
    </div>
  );
}

export default Navbar;
