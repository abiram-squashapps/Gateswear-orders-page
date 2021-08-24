import "./dataTableTemplates.css";
import { Dropdown } from "primereact/dropdown";
import website from "../../assets/images/website.png";
import email from "../../assets/images/email.png";
//import action from "../../assets/images/action.png";
import { Button } from "primereact/button";

export const nameTemplate = (rowData) => {
  return (
    <div className="name__template__container">
      <div className="name__template__image">
        <img src={rowData.logo} alt="logo" />
      </div>
      <div className="name__template__details">
        <p className="m-0">{rowData.name}</p>
        {rowData.ongoing && <p className="pill mt-1">ongoing</p>}
      </div>
    </div>
  );
};
// this is for pagination
export const template2 = {
  layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
  RowsPerPageDropdown: (options) => {
    const dropdownOptions = [
      { label: 2, value: 2 },
      { label: 10, value: 10 },
      { label: 20, value: 20 },
      { label: 50, value: 50 },
    ];

    return (
      <>
        <span
          className="p-mx-1 mr-4"
          style={{ color: "var(--text-color)", userSelect: "none" }}
        >
          rows per page{" "}
        </span>
        <Dropdown
          value={options.value}
          options={dropdownOptions}
          onChange={options.onChange}
          appendTo={document.body}
          className="border-bottom-1 m-0 h-full custom-dropdown "
        />
      </>
    );
  },
  CurrentPageReport: (options) => {
    return (
      <span
        style={{
          color: "var(--text-color)",
          userSelect: "none",
          width: "120px",
          textAlign: "center",
          background: "white",
        }}
      >
        {options.first} - {options.last} of {options.totalRecords}
      </span>
    );
  },
};

export const totalOrderTemplate = (rowData) => {
  return (
    <p style={{ color: "green", fontSize: "small" }}>{rowData.totalOrers}</p>
  );
};

export const websiteTemplate = (rowData) => {
  return (
    <div className="name__template__container ">
      <img src={website} alt="add" className="mr-2" />
      <span>{rowData.website}</span>
    </div>
  );
};

export const emailTemplate = (rowData) => {
  return (
    <div className="name__template__container ">
      <img src={email} alt="e" className="mr-2" />
      <span>{rowData.emailId}</span>
    </div>
  );
};

export const actionTemplate = (
  rowData,
  setShow,
  dispatch,
  showConfirm,
  toastBC
) => {
  return (
    <div className=" actions__container w-full h-3rem flex align-items-center justify-content-center cursor-pointer ">
      <div className="flex flex-column">
        <Button
          icon="pi pi-pencil"
          className="white__button"
          onClick={(e) => {
            setShow(true);
            dispatch({ type: "EDIT_THIS", payload: rowData });
          }}
        />
        <Button
          icon="pi pi-trash"
          className="white__button"
          onClick={(e) => {
            showConfirm(toastBC, dispatch, rowData);
          }}
        />
      </div>
    </div>
  );
};
