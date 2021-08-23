import "./dataTableTemplates.css";
import { Dropdown } from "primereact/dropdown";
import website from "../../assets/images/website.png";
import email from "../../assets/images/email.png";
import action from "../../assets/images/action.png";

export const nameTemplate = (rowData) => {
  return (
    <div className="name__template__container">
      <div className="name__template__image">
        <img src={rowData.logo} alt="logo" />
      </div>
      <div>
        <p>{rowData.name}</p>
        {rowData.ongoing && <p className="pill">ongoing</p>}
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
          className="border-bottom-1 "
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

export const actionTemplate = (setShow) => {
  return (
    <div className="w-full h-full flex align-items-center justify-content-center">
      <img src={action} alt="..." />
    </div>
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
