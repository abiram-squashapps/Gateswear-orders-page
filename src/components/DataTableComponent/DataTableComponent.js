import React, { useContext, useEffect, useState } from "react";
import "./DataTableComponent.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
//import { buyers } from "../../constant/buyersData";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import {
  emailTemplate,
  nameTemplate,
  template2,
  totalOrderTemplate,
  websiteTemplate,
} from "./dataTableTemplates";
import action from "../../assets/images/action.png";
import { Context } from "../../store/ContextProvider";

function DataTableComponent({ setShow }) {
  const [filter, setFilter] = useState(false);
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);
  const [buyersArray, setBuyersArray] = useState([]);
  const { globalState, dispatch } = useContext(Context);

  useEffect(() => {
    let buyersData = globalState.buyers.map((item, index) => ({
      ...item,
      slNo: index + 1,
    }));
    setBuyersArray(buyersData);
  }, [globalState.buyers]);

  const onCustomPage2 = (event) => {
    setFirst2(event.first);
    setRows2(event.rows);
  };

  const actionTemplate = (rowData) => {
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
              dispatch({ type: "DELETE_BUYER", payload: rowData.id });
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="datatable__container">
      <Button
        className="filter__btn"
        onClick={(e) => setFilter((prev) => !prev)}
        icon={!filter ? "pi pi-filter" : "pi pi-filter-slash"}
      />
      <Button label="Add new" className="addBuyer__btn" onClick={setShow} />
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
        autoLayout
      >
        <Column field="slNo" header="sl No" className="w-3rem slNo"></Column>
        <Column
          field="name"
          header="name"
          body={nameTemplate}
          sortable
          className="text-left"
          filter={filter}
        ></Column>
        <Column
          field="contactPerson"
          header="contact person"
          filter={filter}
          className=" text-left"
          sortable
        ></Column>
        <Column
          field="contactNumber"
          header="contact Number"
          filter={filter}
          className=" text-left"
          sortable
        ></Column>
        <Column
          field="address"
          header="Address"
          filter={filter}
          className="text-left w-15rem"
          sortable
        ></Column>
        <Column
          filter={filter}
          field="phone"
          header="phone"
          className=" text-left"
          sortable
        ></Column>
        <Column
          filter={filter}
          field="faxNo"
          header="Fax No"
          className=" text-left"
          sortable
        ></Column>
        <Column
          filter={filter}
          field="emailId"
          header="email"
          className=" text-left"
          body={emailTemplate}
          sortable
        ></Column>
        <Column
          filter={filter}
          field="website"
          header="Website"
          className=" text-left"
          body={websiteTemplate}
          sortable
        ></Column>
        <Column
          filter={filter}
          header="Total Orders"
          className=" text-left"
          body={totalOrderTemplate}
          sortable
        ></Column>
        <Column
          header="Actions"
          body={actionTemplate}
          className=" text-center"
        ></Column>
      </DataTable>
    </div>
  );
}

export default DataTableComponent;
