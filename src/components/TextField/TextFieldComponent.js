import React from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import "./TextField.css";

function TextFieldComponent({ label, value, onChange }) {
  return (
    <div className="p-field col-12">
      <label htmlFor={label}>
        {label}
        <sup className="small__orangefont ml-1">*</sup>
      </label>
      <InputText id={label} onChange={onChange} value={value} required />
    </div>
  );
}

export const HalfSizeField = ({ label, value, onChange, type }) => {
  return (
    <div className="p-field col-6 ">
      <label htmlFor={label}>
        {label}
        <sup className="small__orangefont ml-1">*</sup>
      </label>
      {type === "dropDown" ? (
        <Dropdown id={label} value={value} onChange={onChange} required />
      ) : (
        <InputText id={label} value={value} onChange={onChange} required />
      )}
    </div>
  );
};

export const TextAreaField = ({ label, value, onChange }) => {
  return (
    <div className="p-field col-12">
      <label htmlFor={label}>
        {label}
        <sup className="small__orangefont ml-1">*</sup>
      </label>
      <InputTextarea od={label} onChange={onChange} value={value} required />
    </div>
  );
};

export default TextFieldComponent;
