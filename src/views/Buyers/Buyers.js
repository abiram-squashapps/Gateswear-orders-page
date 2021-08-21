import React, { useState } from "react";
import DataTableComponent from "../../components/DataTableComponent/DataTableComponent";
import "./Buyers.css";
import { Dialog } from "primereact/dialog";
import AddBuyers from "../../components/AddBuyers/AddBuyers";

function Buyers() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Dialog visible={show} onHide={(e) => setShow(false)} header="Add buyers">
        <AddBuyers />
      </Dialog>
      <DataTableComponent setShow={setShow} />
    </div>
  );
}

export default Buyers;
