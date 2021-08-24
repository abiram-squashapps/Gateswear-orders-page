import React from "react";
import { Button } from "primereact/button";
import "./ConfirmationToast.css";

export const showConfirm = (toast, dispatch, rowData) => {
  const close = () => {
    toast.current.clear();
  };

  toast.current.show({
    severity: "warn",
    sticky: true,
    className: "container",
    contentClassName: "contentClassName btn",
    closable: false,
    content: (
      <div className="p-flex p-flex-column w-full h-5rem ">
        <div className="p-text-center bg-yellow-500">
          <h4>Are you sure?</h4>
        </div>
        <div className="p-grid grid p-fluid">
          <div className="col-6">
            <Button
              type="button"
              label="Yes"
              className="btn w-full danger"
              onClick={(e) => {
                dispatch({ type: "DELETE_BUYER", payload: rowData.id });
                close();
              }}
            />
          </div>
          <div className="col-6 btn">
            <Button
              type="button"
              label="No"
              className="btn w-full success"
              onClick={close}
            />
          </div>
        </div>
      </div>
    ),
  });
};
