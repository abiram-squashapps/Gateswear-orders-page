import React, { useContext, useEffect, useRef, useState } from "react";
import "./DataTableComponent.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
//import { buyers } from "../../constant/buyersData";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import {
  emailTemplate,
  nameTemplate,
  template2,
  totalOrderTemplate,
  websiteTemplate,
  actionTemplate,
} from "./dataTableTemplates";
//import action from "../../assets/images/action.png";
import { Context } from "../../store/ContextProvider";
import { showConfirm } from "../Toast/ConfirmationToast";
import { useSelector } from "react-redux";

function DataTableComponent({ setShow }) {

  const [filter, setFilter] = useState(false);
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);
  const [buyersArray, setBuyersArray] = useState([]);
  const globalFilter = useSelector((state) => state);
  const { globalState, dispatch } = useContext(Context);
  const toastBC = useRef(null);

  //useEffect to add serial number to the data
  useEffect(() => {
    let buyersData = globalState.buyers.map((item, index) => ({
      ...item,
      slNo: index + 1,
    }));
    setBuyersArray(buyersData);
  }, [globalState.buyers]);

  //pagination customizd from primereact
  const onCustomPage2 = (event) => {
    setFirst2(event.first);
    setRows2(event.rows);
  };

  //action column's template needed some more data be passed on so created a helper function
  const handleAction = (rowData) => {
    return actionTemplate(rowData, setShow, dispatch, showConfirm, toastBC);
  };

  return (
    <div className="datatable__container">
      
      <Toast
        ref={toastBC}
        position="top-center"
        className="contentClassName"
      ></Toast>

      <Button
        className="filter__btn btn"
        onClick={(e) => setFilter((prev) => !prev)}
        icon={!filter ? "pi pi-filter" : "pi pi-filter-slash"}
      />
      <Button label="Add new" className="addBuyer__btn btn" onClick={setShow} />

      <DataTable
        value={buyersArray}
        header="Buyers"
        className="p-mt-6 datatable"
        stripedRows
        paginator
        paginatorTemplate={template2}
        first={first2}
        rows={rows2}
        onPage={onCustomPage2}
        paginatorClassName="p-jc-end"
        scrollable={true}
        style={{ width: "100%" }}
        globalFilter={globalFilter}
      >
        <Column field="slNo" header="S No" className="w-3rem slNo"></Column>

        <Column
          field="name"
          header="Name"
          body={nameTemplate}
          sortable
          className="text-left"
          filter={filter}
          style={{ width: "150px" }}
        ></Column>

        <Column
          field="contactPerson"
          header="Contact person"
          filter={filter}
          className=" text-left"
          sortable
          style={{ width: "150px" }}
        ></Column>

        <Column
          field="contactNumber"
          header="Contact Number"
          filter={filter}
          className=" text-left"
          style={{ width: "150px" }}
          sortable
        ></Column>

        <Column
          field="address"
          header="Address"
          filter={filter}
          className="text-left w-15rem"
          style={{ width: "250px" }}
          sortable
        ></Column>

        <Column
          filter={filter}
          field="phone"
          header="Phone"
          className=" text-left"
          style={{ width: "120px" }}
          sortable
        ></Column>

        <Column
          filter={filter}
          field="faxNo"
          header="Fax No"
          className=" text-left"
          style={{ width: "120px" }}
          sortable
        ></Column>

        <Column
          filter={filter}
          field="emailId"
          header="Email ID"
          className=" text-left"
          body={emailTemplate}
          style={{ width: "250px" }}
          sortable
        ></Column>

        <Column
          filter={filter}
          field="website"
          header="Website"
          className=" text-left"
          body={websiteTemplate}
          style={{ width: "150px" }}
          sortable
        ></Column>

        <Column
          filter={filter}
          header="Total Orders"
          className=" text-center"
          body={totalOrderTemplate}
          style={{ width: "120px" }}
          sortable
        ></Column>

        <Column
          header="Actions"
          body={handleAction}
          className=" text-center"
          style={{ width: "60px" }}
        ></Column>

      </DataTable>
    </div>
  );
}

export default DataTableComponent;
