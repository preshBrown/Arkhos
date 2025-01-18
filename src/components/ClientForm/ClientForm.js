import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Interfaces/Button/Button";
import GridInputs from "../GridInputs/GridInputs";
import {
  checkValidation,
  updateObject,
} from "../Utility/FormUtility/FormUtility";
import classes from "./ClientForm.module.css";
import QueryData from "../Utility/QueryData/QueryData";
import SuspenseLoader from "../Interfaces/SuspenseLoader/SuspenseLoader";
import ErrorModal from "../Interfaces/ErrorModal/ErrorModal";
import SuccessNotification from "../Interfaces/SuccessNotification/SuccessNotification";
import { useDispatch } from "react-redux";
import { onCloseSuccessNot, onOpenSuccessNot } from "../../store/ui/uiActions";

const mappedServices = QueryData.map((query) => {
  return { value: query.name, displayValue: query.name };
});
console.log("🚀 ~ mappedServices:", mappedServices);

const ClientForm = (props) => {
  const dispatch = useDispatch();

  const [formInfo, setFormInfo] = useState({
    // paymentMethod: {
    //   elementType: "select",
    //   classNames: "payment__method-Grid",
    //   elementConfig: {
    //     option: [
    //       { value: "Master", displayValue: "Master" },
    //       { value: "Visa", displayValue: "Visa" },
    //       { value: "Credit", displayValue: "Credit" },
    //       { value: "Debit", displayValue: "Debit" },
    //     ],
    //   },
    //   label: "PaymentMethod",
    //   value: "Master",
    //   validation: {},
    //   valid: true,
    // },

    fullName: {
      elementType: "input",
      classNames: "full__Name-Grid",
      elementConfig: {
        type: "text",
        placeholder: "name or company name",
      },
      label: "Name / Company Name",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },

    email: {
      elementType: "input",
      classNames: "email-Grid",
      note: "Not a valid email",
      elementConfig: {
        type: "email",
        placeholder: "email",
      },
      label: "Email",
      value: "",
      validation: { required: true, isEmail: true },
      valid: false,
      touched: false,
    },

    cityAndState: {
      elementType: "input",
      classNames: "full__Name-Grid",
      elementConfig: {
        type: "text",
        placeholder: "city & state",
      },
      label: "City & State",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },

    contact: {
      elementType: "contact",
      classNames: "contact-Grid",
      note: "Not a valid phone number",
      label: "Phone",
      value: "",
      validation: {
        required: true,
        isContact: true,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: "country",
      elementConfig: {
        placeholder: "Select country",
        searchable: true,
        searchPlaceholder: "Country",
      },
      classNames: "country-Grid",
      note: "Pick a residence",
      label: "Residence",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },

    areaOfIntereat: {
      elementType: "select",
      classNames: "payment__method-Grid",
      elementConfig: {
        option: mappedServices,
        //  [
        //   { value: "Master", displayValue: "Master" },
        //   { value: "Visa", displayValue: "Visa" },
        //   { value: "Credit", displayValue: "Credit" },
        //   { value: "Debit", displayValue: "Debit" },
        // ],
      },
      label: "Area Of Interest",
      value: "Structural Work",
      validation: {},
      valid: true,
    },

    howCanWeHelp: {
      elementType: "textarea",
      classNames: "bio-Grid",
      elementConfig: {
        type: "text",
        placeholder: "how can we help?",
      },
      label: "How Can We Help?",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const toggleVisibility = (visibilityType) => {
    console.log(visibilityType);

    const updated = updateObject(formInfo[visibilityType], {
      hide: !formInfo[visibilityType].hide,
      elementConfig: updateObject(formInfo[visibilityType].elementConfig, {
        type:
          formInfo[visibilityType].elementConfig.type === "password"
            ? "text"
            : "password",
      }),
    });
    const originalForm = updateObject(formInfo, {
      [visibilityType]: updated,
    });

    setFormInfo(originalForm);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const originalForm = { ...formInfo };

    const serviceId = "service_8yf3z6k";
    const templateId = "template_oazeumi";
    const publicKey = "1LfMFcAnHzZ0mZ-6l";

    const templateParams = {
      from_name: `${originalForm.fullName.value} (${originalForm.areaOfIntereat.value} services)`,
      from_email: originalForm.email.value,
      from_phone: originalForm.contact.value,
      from_cityAndState: originalForm.cityAndState.value,
      from_country: originalForm.country.value,
      from_interest: originalForm.areaOfIntereat.value,
      to_name: "Arkhos",
      message: originalForm.howCanWeHelp.value,
    };

    // emailjs
    //   .send(serviceId, templateId, templateParams, publicKey)
    //   .then((response) => {
    //     console.log("🚀 ~ .then ~ response:", response);
    //     dispatch(onOpenSuccessNot());
    //     setFormInfo(originalForm);
    //     setLoading(false);
    //     setTimeout(() => dispatch(onCloseSuccessNot()), 3000);
    //     props.close();
    //   })
    //   .catch((error) => {
    //     console.log("AN ERROR OCCURRED");
    //     setLoading(false);
    //     setError(true);
    //   });

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
      dispatch(onOpenSuccessNot());
      setLoading(false);
      setTimeout(() => dispatch(onCloseSuccessNot()), 5000);
      props.close();
    } catch (err) {
      console.log("Error-READ");
      setLoading(false);
      setError(true);
    }
  };

  const setImage = (id, file, valid) => {
    console.log("🚀 ~ setImage ~ file:", file);
    const cloneForm = { ...formInfo };
    // value: "",
    //     validation: { isFile:true},
    //     valid: false,
    //     touched: true,
    const updatedForm = updateObject(cloneForm[id], {
      value: file,
      touched: true,
    });
    updatedForm.valid = checkValidation(
      updatedForm.value,
      updatedForm.validation
    );

    const originalForm = updateObject(cloneForm, { [id]: updatedForm });

    let isValid = true;

    for (let key in originalForm) {
      isValid = originalForm[key].value && isValid;
    }
    setFormInfo(originalForm);
    setFormIsValid(isValid);
  };

  const inputHandler = (event, identi) => {
    console.log("🚀 ~ inputHandler ~ event:", event);

    // console.log(`Currently typing on  ${identi}:  ${event.target.value}`);
    // console.log(`  TERMS EVENT:  ${event.target.checked}`);
    const cloneForm = { ...formInfo };

    const updated = updateObject(cloneForm[identi], {
      validation: updateObject(cloneForm[identi].validation, {
        checked: identi === "termsAndCondition" && event.target.checked,
      }),
      value:
        identi === "termsAndCondition"
          ? "Agreed"
          : identi === "contact" ||
            identi === "country" ||
            identi === "recaptcha"
          ? event
          : event.target.value,
      touched: true,
    });

    if (identi === "password") {
      updated.note =
        updated.value.length >= 8
          ? "must  contain a Capital letter, small letter, a special character, and a digit!"
          : "must have a minimum length of 8 characters!";
      setConfirmPass(updated.value);
    }

    updated.valid = checkValidation(
      updated.value,
      updated.validation,
      confirmPass
    );

    // if (identi === "password" && updated.value.length >= 8) {
    //   updated.note =
    //     "must  contain a Capital letter, small letter, a special character, and a digit!";
    // }
    // if (identi === "password" && updated.value.length < 8) {
    //   updated.note = "must have a minimum length of 8 characters!";
    // }
    // if (identi === "password") {
    //   setConfirmPass(updated.value);
    // }

    const originalForm = updateObject(cloneForm, {
      [identi]: updated,
    });

    let valid = true;
    for (let key in originalForm) {
      valid = originalForm[key].valid && valid;
      // console.log(`${key}: ${originalForm[key].valid}`);
    }
    // console.log(`FOR ISCHECKED: ${updated.validation.isChecked} `);
    setFormInfo(originalForm);
    setFormIsValid(valid);
  };

  const closeError = () => {
    console.log("clicked");
    setError(false);
  };

  const formElements = [];
  for (let key in formInfo) {
    formElements.push({
      id: key,
      config: formInfo[key],
    });
  }

  let form = (
    <div className={classes.SignUpForm}>
      {/* <h2 className={classes["form-title__"]}>Create Account</h2> */}
      <form id={classes["form__wrapper"]} onSubmit={submitHandler}>
        {formElements.map((fm) => (
          <div key={fm.id} className={classes[fm.config.classNames]}>
            <GridInputs
              labelClass={classes.labelClass}
              elementType={fm.config.elementType}
              elementConfig={fm.config.elementConfig}
              note={fm.config.note}
              password={fm.config.password}
              hide={fm.config.hide}
              onSetImage={setImage.bind(null, fm.id)}
              toggleVisibility={toggleVisibility.bind(
                null,
                fm.config.visibilityType
              )}
              isSignUp={fm.config.isSignUp}
              shouldVal={fm.config.validation}
              invalid={!fm.config.valid}
              touched={fm.config.touched}
              value={fm.config.value}
              label={fm.config.label}
              changed={(event) => inputHandler(event, fm.id)}
            />
          </div>
        ))}

        <div className={classes["button-Grid"]}>
          <Button W-200 type="submit" disabled={!formIsValid}>
            Submit Form
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      {/* <SuccessNotification show={success} /> */}
      <ErrorModal
        errorMessage="Something went wrong! Try Again!"
        close={closeError}
        error={error}
      />
      {loading && <SuspenseLoader transparent />}{" "}
      <section className={classes.SignUpFormContainer}>{form}</section>
    </>
  );
};

export default ClientForm;
