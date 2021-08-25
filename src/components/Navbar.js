import React from "react";
import "./Navbar.css";
import { InputText } from "primereact/inputtext";
import ProfileIcon from "./ProfileIcon";
import { useDispatch } from "react-redux";
import search from "../store/Actions/search";

function Navbar({ showSidebar, setShowSidebar }) {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      {!showSidebar && (
        <i onClick={(e) => setShowSidebar(true)} className="pi pi-bars"></i>
      )}
      <span className="p-input-icon-left flex align-items-center">
        <i className="pi pi-search" />
        <InputText
          placeholder="Search"
          onChange={(e) => dispatch(search(e.target.value))}
        />
      </span>
      <ProfileIcon />
    </div>
  );
}

export default Navbar;
