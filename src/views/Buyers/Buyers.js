import React, { useContext, useState } from "react";
import DataTableComponent from "../../components/DataTableComponent/DataTableComponent";
import "./Buyers.css";
import { Dialog } from "primereact/dialog";
import AddBuyers from "../../components/AddBuyers/AddBuyers";
import { Context } from "../../store/ContextProvider";

function Buyers() {
  const [show, setShow] = useState(true);
  const { globalState, dispatch } = useContext(Context);

  return (
    <div>
      <Dialog
        visible={show}
        onHide={(e) => {
          dispatch({ type: "EDIT_THIS", payload: false });
          setShow(false);
        }}
        header={globalState.editThis ? "Edit Buyer" : "Add buyers"}
      >
        <AddBuyers setShow={setShow} />
      </Dialog>
      <DataTableComponent setShow={setShow} />
    </div>
  );
}

export default Buyers;
