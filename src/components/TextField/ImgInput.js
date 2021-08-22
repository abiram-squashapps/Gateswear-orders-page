import React from "react";
import placeholder from "../../assets/images/imgplaceholder.png";
import edit from "../../assets/images/edit.png";

function ImgInput({ imgUrl, setImgUrl }) {
  return (
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
        onClick={(e) => (imgUrl ? setImgUrl("") : null)}
      />
    </div>
  );
}

export default ImgInput;
