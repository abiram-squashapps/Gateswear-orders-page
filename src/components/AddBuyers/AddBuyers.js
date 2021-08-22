import React, { useState } from "react";
import "./AddBuyers.css";

import TextFieldComponent, {
  HalfSizeField,
  TextAreaField,
} from "../TextField/TextFieldComponent";
import ImgInput from "../TextField/ImgInput";
import { Button } from "primereact/button";

function AddBuyers() {
  const [imgUrl, setImgUrl] = useState("");
  const [formData, setFormData] = useState({});

  const handleFormData = () => {};
  return (
    <div className="p-fluid p-formgrid p-grid px-3 ">
      <ImgInput imgUrl={imgUrl} setImgUrl={setImgUrl} />
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
          type="dropDown"
          onChange={handleFormData}
        />
      </div>
      <div className="grid px-2">
        <HalfSizeField
          label="State"
          name="state"
          type="dropDown"
          value={formData.state}
          onChange={handleFormData}
        />
        <HalfSizeField
          label="City"
          name="city"
          value={formData.city}
          type="dropDown"
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
        <div className="flex justify-content-between w-full px-2">
          <div className="p-col-6 small__orangefont">+ Add address</div>
          <div className="p-col-6 mt-7">
            <Button label="cancel" className="cancel__btn mr-3" />
            <Button label="submit" className="submit__btn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBuyers;
