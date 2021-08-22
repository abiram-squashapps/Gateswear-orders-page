import React from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

function TextFieldComponent({ label, value, onChange }) {
  return (
    <div className="p-field col-12">
      <label htmlFor={label}>{label}</label>
      <InputText id={label} onChange={onChange} value={value} />
    </div>
  );
}

export const HalfSizeField = ({ label, value, onChange }) => {
  return (
    <div className="p-field col-6 ">
      <label htmlFor={label}>{label}</label>
      <InputText id={label} value={value} onChange={onChange} />
    </div>
  );
};

export const TextAreaField = ({ label, value, onChange }) => {
  return (
    <div className="p-field col-12">
      <label htmlFor={label}>{label}</label>
      <InputTextarea od={label} onChange={onChange} value={value} />
    </div>
  );
};

export default TextFieldComponent;
