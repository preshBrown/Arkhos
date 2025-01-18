import React from "react";
import PolicyHeader from "../PrivacyPolicy/PolicyHeader/PolicyHeader";
import { useNavigate } from "react-router-dom";
import PrivacyLogo from "./Code Bugs.png";
// import PrivacyLogo from "./Privacy-Policy.png";
import PolicyCard from "../PrivacyPolicy/PolicyCard/PolicyCard";

import classes from "./ReportBug.module.css";
import SupportForm from "./SupportForm/SupportForm";
import { AiFillBug } from "react-icons/ai";
// import { termsData } from "./TermsData/TermsData";

const ReportBug = (props) => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/");
  };
  return (
    <>
      <PolicyHeader
        link="#"
        heading={
          <>
            Report A Bug <AiFillBug className={classes.BugIcon} />
          </>
        }
        intro={
          <>
            At Arkhos Oil & Gas Ltd, we are committed to delivering a seamless
            and reliable digital experience for our clients and stakeholders.
            However, we understand that occasional technical issues may arise.
            Our Report a Bug page is here to ensure that any challenges you
            encounter are addressed promptly and efficiently. <br /> <br /> If
            you notice any bugs, glitches, or functionality issues on our
            website or within our digital systems, we encourage you to let us
            know. Your feedback is invaluable in helping us improve and maintain
            the quality of our services.
            <br /> <br />
            Submitting a bug report is quick and straightforward. Provide us
            with details about the issue, including what you experienced, where
            it occurred, and any relevant screenshots or descriptions. Our
            technical team will review your report and work diligently to
            resolve the issue as soon as possible.
          </>
        }
        img={PrivacyLogo}
        alt="Bug"
        getStarted={getStarted.bind(this)}
      />

      <div>
        <SupportForm />
      </div>
    </>
  );
};

export default ReportBug;
