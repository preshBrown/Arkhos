import React, { useState } from "react";
import Input from "../../components/Interfaces/Input/Input";
import Map from "./Map/Map";
import classes from "./Contact.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMail, MdWifiCalling } from "react-icons/md";
import { ImNotification } from "react-icons/im";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { onCloseSuccessNot, onOpenSuccessNot } from "../../store/ui/uiActions";
import ErrorModal from "../../components/Interfaces/ErrorModal/ErrorModal";
import SuspenseLoader from "../../components/Interfaces/SuspenseLoader/SuspenseLoader";
import Reveal from "../../components/Motion/Reveal/Reveal";

const touchData = [
  {
    id: "address",
    icon: <IoHomeOutline size={20} style={{ verticalAlign: "middle" }} />,
    description:
      "Plot 500 East West Road, Rumudara Port Harcourt, Rivers State",
  },
  {
    id: "phone",
    icon: <MdWifiCalling size={20} style={{ verticalAlign: "middle" }} />,
    description: "+2347035717270 / +2348027866488",
  },
  {
    id: "mail",
    icon: <MdOutlineMail size={20} style={{ verticalAlign: "middle" }} />,
    description: "arkhosoilandgas@gmail.com",
  },
  {
    id: "work-days",
    icon: <ImNotification size={20} style={{ verticalAlign: "middle" }} />,
    description: "Monday - Saturday 8 AM - 8 PM",
  },
];

const Contact = () => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "Name / Company name" },
      value: "",
      valid: false,
    },

    email: {
      elementType: "input",
      elementConfig: { type: "email", placeholder: "Email" },
      value: "",
      valid: false,
    },
    mobileNumber: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "Mobile Number" },
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

    const serviceId = process.env.REACT_APP_SERVICE_API_KEY;
    const templateId = process.env.REACT_APP_TEMPLATE_API_KEY;
    const publicKey = process.env.REACT_APP_PUBLIC_API_KEY;


    const templateParams = {
      from_name: `${originalForm.name.value}, (Contact Service)`,
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
    <form onSubmit={submitFormHandler} className={classes.Form}>
      <h1>
        <Reveal cover>Contact</Reveal>
      </h1>
      <div>
        {formElement.map((fm) => (
          <Input
            key={fm.id}
            elementType={fm.config.elementType}
            elementConfig={fm.config.elementConfig}
            value={fm.config.value}
            changed={(event) => inputChangeHandler(event, fm.id)}
          />
        ))}
      </div>
      <button disabled={!formIsValid} type="submit">
        Submit
      </button>
    </form>
  );

  return (
    <>
      <ErrorModal
        errorMessage="Something went wrong! Try Again!"
        close={closeError}
        error={error}
      />
      {loading && <SuspenseLoader transparent />}
      <Map />
      <section className={classes.Contacts}>
        {Contacts}
        <div className={classes.InTouch}>
          <h1>
            <Reveal cover>Get in touch with us</Reveal>
          </h1>
          <ul className={classes.Items}>
            {touchData.map((data) => (
              <Reveal key={data.id} cover>
                <li className={classes.Item} >
                  <span style={{ verticalAlign: "middle" }}>{data.icon}</span>{" "}
                  <div>{data.description} </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;
