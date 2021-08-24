import React, { useContext, useRef, useState } from "react";
import DataTableComponent from "../../components/DataTableComponent/DataTableComponent";
import "./Buyers.css";
import { Dialog } from "primereact/dialog";
import AddBuyers from "../../components/AddBuyers/AddBuyers";
import { Context } from "../../store/ContextProvider";
import { Toast } from "primereact/toast";

function Buyers() {
  const toast = useRef(null);
  const [show, setShow] = useState(true);
  const { globalState, dispatch } = useContext(Context);

  function showSuccess(summary, detail) {
    toast.current.show({
      severity: "success",
      summary,
      detail,
      life: 3000,
    });
  }

  return (
    <div>
      <Toast ref={toast} className="successStore"></Toast>
      <Dialog
        visible={show}
        onHide={(e) => {
          dispatch({ type: "EDIT_THIS", payload: false });
          setShow(false);
        }}
        header={globalState.editThis ? "Edit Buyer" : "Add buyers"}
      >
        <AddBuyers setShow={setShow} showSuccess={showSuccess} />
      </Dialog>
      <DataTableComponent setShow={setShow} />
    </div>
  );
}

export default Buyers;
