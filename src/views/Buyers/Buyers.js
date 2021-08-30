import React, { useContext, useRef, useState, lazy, Suspense } from "react";
import DataTableComponent from "../../components/DataTableComponent/DataTableComponent";
import "./Buyers.css";
import { Dialog } from "primereact/dialog";
import { Context } from "../../store/ContextProvider";
import { Toast } from "primereact/toast";

const AddBuyers = lazy(() => import("../../components/AddBuyers/AddBuyers"));

function Buyers() {

  const toast = useRef(null);

  const [show, setShow] = useState(false);

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
        
        <Suspense fallback={
          <div class="center1">

            <img src="squash-logo.svg" alt="squash apps.." />

          </div>
        }>
          <AddBuyers setShow={setShow} showSuccess={showSuccess} />
        </Suspense>
      </Dialog>
      <DataTableComponent setShow={setShow} />
    </div>
  );
}

export default Buyers;
