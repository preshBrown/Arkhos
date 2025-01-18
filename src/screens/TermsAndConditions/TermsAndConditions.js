import React from "react";
import PolicyHeader from "../PrivacyPolicy/PolicyHeader/PolicyHeader";
import { useNavigate } from "react-router-dom";
import PrivacyLogo from "./Privacy-Policy.png";
import PolicyCard from "../PrivacyPolicy/PolicyCard/PolicyCard";

import classes from "./TermsAndConditions.module.css";
import { termsData } from "./TermsData/TermsData";
import Reveal from "../../components/Motion/Reveal/Reveal";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/");
  };
  return (
    <>
      <PolicyHeader
        link="#"
        heading="Terms & Conditions"
        intro="Welcome to the Arkhosoilandgas.com website. This web site is owned and operated by Arkhos, a company registered in The Federal Republic Of Nigeria with registered number 7339098 whose registered office is at Plot 500 East West Road, Rumudara Port Harcourt, Rivers State, Nigeria."
        img={PrivacyLogo}
        alt="Term & Conditions"
        getStarted={getStarted.bind(this)}
      />

      <div className={classes.TermsAndConditions}>
        <p>
          <Reveal cover>
            Visitors to this web site are bound by the following terms and
            conditions, please read these carefully before you continue.{" "}
          </Reveal>
        </p>{" "}
      </div>
      {termsData.map((policies) => (
        <PolicyCard
          key={policies.title}
          title={policies.title}
          header={policies.header}
          listData={policies.listData}
          footerData={policies.footerData}
        />
      ))}
      <h4 className={classes.Effective}>
        <Reveal cover>This policy is effective as of 7 February 2025.</Reveal>
      </h4>
    </>
  );
};

export default TermsAndConditions;
