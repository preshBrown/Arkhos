import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Input from "../../../components/Interfaces/Input/Input";
import classes from "./SupportForm.module.css";
import { useDispatch } from "react-redux";
import { onCloseSuccessNot, onOpenSuccessNot } from "../../../store/ui/uiActions";
import ErrorModal from "../../../components/Interfaces/ErrorModal/ErrorModal";
import SuspenseLoader from "../../../components/Interfaces/SuspenseLoader/SuspenseLoader";

const SupportForm = (props) => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    email: {
      elementType: "input",
      elementConfig: { type: "email", placeholder: "Your Email" },
      value: "",
      valid: false,
    },
    comments: {
      elementType: "textarea",
      elementConfig: { type: "text", placeholder: "Message" },
      value: "",
      valid: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitFormHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    const originalForm = { ...contact };

    
    const serviceId = "service_8yf3z6k";
    const templateId = "template_oazeumi";
    const publicKey = "1LfMFcAnHzZ0mZ-6l";

    const templateParams = {
      from_name: "Bug Support Request",
      from_email: originalForm.email.value,
      to_name: "Arkhos",
      message: originalForm.comments.value,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("🚀 ~ submitHandler ~ response.status:", response);

      if (!response.status || response.status !== 200) {
        console.log("IFF--READ");
        throw new Error("Something went wrong");
      }

      // setSuccess(true);
      for (let key in originalForm) {
        originalForm[key].value = "";
      }
      setFormIsValid(false);
      setContact(originalForm);
      dispatch(onOpenSuccessNot());
      setLoading(false);
      setTimeout(() => dispatch(onCloseSuccessNot()), 5000);
    } catch (err) {
      console.log("Error-READ");
      setLoading(false);
      setError(true);
    }
  };

  const inputChangeHandler = (event, identi) => {
    const originalContact = { ...contact };

    const updatedContact = {
      ...originalContact[identi],
      value: event.target.value,
    };
    updatedContact.valid = updatedContact.value.trim() !== "";
    originalContact[identi] = updatedContact;

    let isValid = true;
    for (let key in originalContact) {
      isValid = originalContact[key].valid && isValid;
    }

    setContact(originalContact);
    setFormIsValid(isValid);
  };
  const closeError = () => {
    setError(false);
  };

  const formElement = [];

  for (let key in contact) {
    formElement.push({
      id: key,
      config: contact[key],
    });
  }

  const Contacts = (
    <div className={classes.Contacts}>
      <form onSubmit={submitFormHandler} className={classes.Form}>
        <h1></h1>
        <div>
          {formElement.map((fm) => (
            <Input
              key={fm.id}
              className={classes.InputBackground}
              elementType={fm.config.elementType}
              elementConfig={fm.config.elementConfig}
              value={fm.config.value}
              changed={(event) => inputChangeHandler(event, fm.id)}
            />
          ))}
        </div>
        <button disabled={!formIsValid} type="sumit">
          Submit
        </button>
      </form>
    </div>
  );

  return <> <ErrorModal
  errorMessage="Something went wrong! Try Again!"
  close={closeError}
  error={error}
/>
{loading && <SuspenseLoader transparent />} 
{Contacts}</>;
};

export default SupportForm;
