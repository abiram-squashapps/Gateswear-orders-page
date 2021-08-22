import React, { useEffect, useState } from "react";
import "./DataTableComponent.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { buyers } from "../../constant/buyersData";
import { Button } from "primereact/button";
import { nameTemplate, template2 } from "./dataTableTemplates";

function DataTableComponent({ setShow }) {
  const [filter, setFilter] = useState(false);
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);
  const [buyersArray, setBuyersArray] = useState([]);
  useEffect(() => {
    let buyersData = buyers.data.map((item, index) => ({
      ...item,
      slNo: index + 1,
    }));
    setBuyersArray(buyersData);
  }, []);
  const onCustomPage2 = (event) => {
    setFirst2(event.first);
    setRows2(event.rows);
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
      >
        <Column field="slNo" header="sl No" className="w-3rem slNo"></Column>
        <Column
          field="name"
          header="name"
          body={nameTemplate}
          sortable
          filter={filter}
        ></Column>
        <Column
          field="contactPerson"
          header="contact person"
          filter={filter}
          sortable
        ></Column>
        <Column
          field="contactNumber"
          header="contact Number"
          filter={filter}
          sortable
        ></Column>
        <Column
          field="address"
          header="Address"
          filter={filter}
          sortable
        ></Column>
        <Column
          filter={filter}
          field="phone"
          header="phone"
          className="w-6rem"
          sortable
        ></Column>
        <Column
          filter={filter}
          field="faxNo"
          header="Fax No"
          className="w-5rem"
          sortable
        ></Column>
        <Column
          filter={filter}
          field="emailId"
          header="email"
          className="min-w-max"
          sortable
        ></Column>
        <Column
          filter={filter}
          field="website"
          header="Website"
          className="min-w-max"
          sortable
        ></Column>
        <Column
          filter={filter}
          field="totalOrers"
          header="Total Orders"
          className="w-5rem"
          sortable
        ></Column>
        <Column header="Actions" className="w-3rem"></Column>
      </DataTable>
    </div>
  );
}

export default DataTableComponent;
