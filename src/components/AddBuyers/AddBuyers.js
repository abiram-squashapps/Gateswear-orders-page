import React, { useContext, useState, useEffect } from "react";
import "./AddBuyers.css";
import { Context } from "../../store/ContextProvider";
import ErrorMsgDispaly from "../commonComponents/ErrorMsgDispaly";
import { Country, State, City } from "country-state-city";
import TextFieldComponent, {
  HalfSizeField,
  TextAreaField,
} from "../TextField/TextFieldComponent";
import ImgInput from "../TextField/ImgInput";
import { Button } from "primereact/button";
import uuid from "uuid/dist/v1";

function AddBuyers({ setShow, showSuccess }) {
  const [imgUrl, setImgUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    contactPerson: "",
    address: "",
    postal: "",
    faxNo: "",
    phone: "",
    emailId: "",
    website: "",
  });
  const [city, setCity] = useState("");
  const [states, setStates] = useState([{ name: "", isoCode: "" }]);
  const [country, setCountry] = useState([{ name: "", isoCode: "" }]);
  const { globalState, dispatch } = useContext(Context);
  const [formValidity, setFormValidity] = useState(true);
  // checking wheter there is data to edit if any feed it into the fields
  useEffect(() => {
    if (globalState.editThis) {
      const { editThis } = globalState;
      setFormData({
        name: editThis.name,
        contactNumber: editThis.contactNumber,
        contactPerson: editThis.contactPerson,
        address: editThis.address,
        postal: editThis.postal,
        faxNo: editThis.faxNo,
        phone: editThis.phone,
        emailId: editThis.emailId,
        website: editThis.website,
      });
      setImgUrl(editThis.logo);
      setCountry(editThis.country);
      setStates(editThis.states);
      setCity(editThis.city);
    }
  }, [globalState]);

  const countries = Country.getAllCountries();
  const stateList = State.getStatesOfCountry(country[0].isoCode).length
    ? State.getStatesOfCountry(country[0].isoCode)
    : [{ name: "none", isoCode: "NAN" }];
  const cities = City.getCitiesOfState(country[0].isoCode, states[0].isoCode)
    .length
    ? City.getCitiesOfState(country[0].isoCode, states[0].isoCode)
    : [{ name: "none" }];

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCityChange = (e) => {
    setCity(e.value);
  };
  //storing name and isocode to fetch state and city
  const handleCountryChange = (e) => {
    setCountry(countries.filter((i) => i.name === e.value));
  };

  const handleStatesChange = (e) => {
    setStates(stateList.filter((i) => i.name === e.value));
  };

  const validateForm = () => {
    //validating by checking whether every fields are entered
    const {
      name,
      contactPerson,
      contactNumber,
      address,
      postal,
      faxNo,
      phone,
      emailId,
      website,
    } = formData;
    if (
      name.length &&
      contactNumber.length &&
      contactPerson.length &&
      address.length &&
      postal.length &&
      faxNo.length &&
      phone.length &&
      emailId.length &&
      website.length &&
      imgUrl.length &&
      country.length &&
      states.length &&
      city.length
    ) {
      setFormValidity(true);
      return true;
    } else {
      setFormValidity(false);
      return false;
    }
  };

  const handleSubmit = (e) => {
    if (validateForm()) {
      let payload = {
        ...formData,
        logo: imgUrl,
        ongoing: true,
        totalOrers: `+${Math.round(Math.random() * 300)}k`,
        city,
        states,
        country,

        id: uuid(),
      };
      //submit action for add buyer and edit action for edit buyer
      globalState.editThis
        ? (() => {
            dispatch({
              type: "EDIT_BUYER",
              payload: { ...payload, id: globalState.editThis.id },
            });
            showSuccess("Updated!!", "Byer details got updated");
            setShow(false);
          })()
        : (() => {
            dispatch({ type: "ADD_BUYER", payload });
            showSuccess("Buyer Added", "New buyer successfully added !!");
            setShow(false);
          })();

      //show toast conditionally

      //cleadring editThis prop to make the form default to add buyer
      dispatch({ type: "EDIT_THIS", payload: false });
    } else {
      window.alert("please make sure every input is entered");
    }
  };

  return (
    <div className="p-fluid p-formgrid p-grid px-3 mb-3 flex flex-column justify-content-around">
      {!formValidity && <ErrorMsgDispaly />}
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
          value={country[0].name}
          options={countries}
          placeholder="Select a Country"
          name="country"
          type="dropDown"
          onChange={handleCountryChange}
        />
      </div>
      <div className="grid px-2">
        <HalfSizeField
          label="State"
          options={stateList}
          name="state"
          type="dropDown"
          value={states[0].name}
          onChange={handleStatesChange}
        />
        <HalfSizeField
          label="City"
          name="city"
          value={city}
          type="dropDown"
          options={cities}
          onChange={handleCityChange}
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
          <div className="p-col-6 mt-3">
            <Button
              label="Cancel"
              className="cancel__btn mr-3 btn"
              onClick={(e) => {
                setShow(false);
                dispatch({ type: "EDIT_THIS", payload: false });
              }}
            />
            <Button
              label={globalState.editThis ? "Update" : "Submit"}
              className="submit__btn btn"
              /* disabled={!formValidity} */
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBuyers;
