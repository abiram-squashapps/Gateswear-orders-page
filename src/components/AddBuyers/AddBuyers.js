import React, { useState } from "react";
import "./AddBuyers.css";
import placeholder from "../../assets/images/imgplaceholder.png";
import edit from "../../assets/images/edit.png";

function AddBuyers() {
  const [imgUrl, setImgUrl] = useState("");
  return (
    <div>
      {" "}
      <div className="field col-12 imginput ">
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
    </div>
  );
}

export default AddBuyers;
