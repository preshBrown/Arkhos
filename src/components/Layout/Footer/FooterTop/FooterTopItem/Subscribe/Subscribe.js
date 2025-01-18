import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Input from "../../../../../Interfaces/Input/Input";
import { FaTelegramPlane } from "react-icons/fa";
import classes from "./Subscribe.module.css";
import { useDispatch } from "react-redux";
import {
  onCloseSuccessNot,
  onOpenSuccessNot,
} from "../../../../../../store/ui/uiActions";
import SuspenseLoader from "../../../../../Interfaces/SuspenseLoader/SuspenseLoader";
import ErrorModal from "../../../../../Interfaces/ErrorModal/ErrorModal";
import Map from "../../../../../../screens/Contact/Map/Map";

const Subscribe = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    elementConfig: { type: "email", placeholder: "Your Email Address" },
    value: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formData.value.trim() === "") return

    setLoading(true);
    const originalForm = { ...formData };

    const serviceId = "service_8yf3z6k";
    const templateId = "template_oazeumi";
    const publicKey = "1LfMFcAnHzZ0mZ-6l";

    const templateParams = {
      from_name: "News Letter Subscription Request",
      from_email: originalForm.value,
      from_phone: null,
      from_cityAndState: null,
      from_country: null,
      from_interest: null,
      to_name: "Arkhos",
      message: "",
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
      originalForm.value = ""
      setFormData(originalForm);
      dispatch(onOpenSuccessNot());
      setLoading(false);
      setTimeout(() => dispatch(onCloseSuccessNot()), 5000);
    } catch (err) {
      console.log("Error-READ");
      setLoading(false);
      setError(true);
    }
  };
  const inputChangeHandler = (event) => {
    const form = { ...formData };

    form.value = event.target.value;

    setFormData(form);
  };

  const updatedFormData = {
    ...formData,
  };
  const closeError = () => {
    setError(false);
  };


  return (
    <>
      <ErrorModal
        errorMessage="Something went wrong! Try Again!"
        close={closeError}
        error={error}
      />
      {loading && <SuspenseLoader transparent />} 
      <div className={classes.Subscribe}>
        <h1>
          <span>
            <FaTelegramPlane />
          </span>
          Sign Up For Newsletter
        </h1>
        <div className={classes.FormContainer}>
          {" "}
          <form className={classes.FormWrapper} onSubmit={submitHandler}>
            <Input
              className={classes.CustomInput}
              elementConfig={updatedFormData.elementConfig}
              value={updatedFormData.value}
              changed={(e) => inputChangeHandler(e)}
            />{" "}
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
