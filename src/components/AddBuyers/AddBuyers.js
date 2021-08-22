import React, { useState } from "react";
import "./AddBuyers.css";
import placeholder from "../../assets/images/imgplaceholder.png";
import edit from "../../assets/images/edit.png";
import TextFieldComponent, {
  HalfSizeField,
  TextAreaField,
} from "../TextField/TextFieldComponent";

function AddBuyers() {
  const [imgUrl, setImgUrl] = useState("");
  const [formData, setFormData] = useState({});

  const handleFormData = () => {};
  return (
    <div className="p-fluid p-formgrid p-grid px-3 ">
      {" "}
      <div className="p-field p-col-12 imginput ">
        <label
          htmlFor="address"
          className="flex flex-column justify-content-center align-items-center  "
        >
          {!imgUrl && (
            <div className="edit__button">
              <img src={edit} alt="edit" />
            </div>
          )}{" "}
          <div className="image__container">
            <img
              src={imgUrl ? imgUrl : placeholder}
              alt="placeholder"
              className={imgUrl ? "fullimage" : "null"}
            />
          </div>
        </label>
        <input
          id="address"
          type="file"
          onChange={(e) => setImgUrl(URL.createObjectURL(e.target.files[0]))}
          onClick={(e) => setImgUrl("")}
        />
      </div>
      <TextFieldComponent
        label="Buisness Name"
        value={formData.name}
        name="name"
        onChange={handleFormData}
      />
      <div className="grid px-2">
        <HalfSizeField
          label="Contact Person"
          value={formData.contactPerson}
          name="contactPerson"
          onChange={handleFormData}
        />
        <HalfSizeField
          label="Contact No"
          value={formData.contactNumber}
          onChange={handleFormData}
          name="contactNumber"
        />
      </div>
      <div className="grid px-2">
        <TextAreaField
          label="Address"
          value={formData.address}
          name="address"
          onChange={handleFormData}
        />
      </div>
      <div className="grid px-2">
        <HalfSizeField
          label="Postal"
          name="postal"
          value={formData.postal}
          onChange={handleFormData}
        />
        <HalfSizeField
          label="Country"
          value={formData.country}
          name="country"
          onChange={handleFormData}
        />
      </div>
      <div className="grid px-2">
        <HalfSizeField
          label="State"
          name="state"
          value={formData.state}
          onChange={handleFormData}
        />
        <HalfSizeField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleFormData}
        />
      </div>
      <div className="grid px-2">
        <HalfSizeField
          label="Fax No"
          value={formData.faxNo}
          name="faxNo"
          onChange={handleFormData}
        />
        <HalfSizeField
          label="Phone No"
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
        />
      </div>
      <div className="grid px-2">
        <HalfSizeField
          label="Email Id"
          name="emailId"
          value={formData.emailId}
          onChange={handleFormData}
        />
        <HalfSizeField
          name="website"
          label="Website"
          value={formData.website}
          onChange={handleFormData}
        />
      </div>
    </div>
  );
}

export default AddBuyers;
