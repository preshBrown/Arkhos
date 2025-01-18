import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ReactDOM from "react-dom";


import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {

  const errorModal = (
    <Modal
      className={classes.ErrorModal}
      headerClass={classes.ErrorHeader}
      contentClass={classes.ErrorContent}
      show={!!props.error}
      close={props.close}
      header="An Error Occurred!"
      footerClass={classes.ErrorFooter}
      footer={
        <Button W-100 StyleDanger clicked={props.close}>
          Close
        </Button>
      }
    >
      <p>{props.errorMessage}</p>
    </Modal>
  );

  return (
    <>
    {errorModal}
      {/* {ReactDOM.createPortal(
        errorModal,
        document.getElementById("error-modal-hook")
      )} */}
    </>
  );
};

export default ErrorModal;
