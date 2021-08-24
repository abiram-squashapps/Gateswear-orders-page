import React from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import "./TextField.css";

function TextFieldComponent({ label, value, onChange, name }) {
  return (
    <div className="p-field col-12">
      <label htmlFor={label}>
        {label}
        <sup className="small__orangefont ml-1">*</sup>
      </label>
      <InputText
        name="name"
        id={label}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}

export const HalfSizeField = ({
  label,
  value,
  onChange,
  type,
  options,
  name,
}) => {
  return (
    <div className="p-field col-6 ">
      <label htmlFor={label}>
        {label}
        <sup className="small__orangefont ml-1">*</sup>
      </label>
      {type === "dropDown" ? (
        <Dropdown
          className="bg-white flex align-items-center"
          id={label}
          value={value}
          options={options}
          optionLabel={"name"}
          optionValue={"name"}
          onChange={onChange}
          filter
          filterBy="name"
          required
        />
      ) : (
        <InputText
          name={name}
          id={label}
          value={value}
          onChange={onChange}
          required
        />
      )}
    </div>
  );
};

export const TextAreaField = ({ label, value, onChange, name }) => {
  return (
    <div className="p-field col-12">
      <label htmlFor={label}>
        {label}
        <sup className="small__orangefont ml-1">*</sup>
      </label>
      <InputTextarea
        name={name}
        id={label}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};

export default TextFieldComponent;
