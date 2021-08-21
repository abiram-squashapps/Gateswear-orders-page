<<<<<<< HEAD
import "./dataTableTemplates.css";
import { Dropdown } from "primereact/dropdown";
export const nameTemplate = (rowData) => {
  return (
    <div className="name__template__container">
      <div className="name__template__image">
        <img src={rowData.logo} alt="logo" />
      </div>
      <p>{rowData.name}</p>
    </div>
  );
};

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
=======
import "./dataTableTemplates.css";
import { Dropdown } from "primereact/dropdown";
export const nameTemplate = (rowData) => {
  return (
    <div className="name__template__container">
      <div className="name__template__image">
        <img src={rowData.logo} alt="logo" />
      </div>
      <p>{rowData.name}</p>
    </div>
  );
};

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
>>>>>>> ubuntu
