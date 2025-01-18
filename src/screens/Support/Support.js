import React from "react";
import PolicyHeader from "../PrivacyPolicy/PolicyHeader/PolicyHeader";
import { useNavigate } from "react-router-dom";
import PrivacyLogo from "./Privacy-Policy.png";
import PolicyCard from "../PrivacyPolicy/PolicyCard/PolicyCard";

import classes from "./Support.module.css";
import SupportForm from "./SupportForm/SupportForm";
// import { termsData } from "./TermsData/TermsData";

const Support = (props) => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/");
  };
  return (
    <>
      <PolicyHeader
        link="#"
        heading="Customer Service"
        intro={
          <>
            Welcome to Arkhos Customer Service, we believe that exceptional
            customer service is the cornerstone of our success. Our Customer
            Service page is designed to provide you with the support, resources,
            and information you need to connect with us seamlessly. Whether you
            have questions about our services, need assistance with a project,
            or want to share your feedback, we are here to help. <br /> <br />
            Our dedicated team of professionals is committed to ensuring your
            experience with Arkhos is smooth, efficient, and satisfactory. With
            a focus on responsiveness and personalized attention, we aim to
            address your inquiries and resolve any issues promptly.
          </>
        }
        img={PrivacyLogo}
        alt="Customer service"
        getStarted={getStarted.bind(this)}
      />

      <div>
        <SupportForm />
      </div>
    </>
  );
};

export default Support;
