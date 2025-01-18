import React from "react";

import PolicyCard from "./PolicyCard/PolicyCard";
import { policyData } from "./PolicyData/PolicyData";
import PrivacyLogo from "./Privacy-Policy.png";

import classes from "./PrivacyPolicy.module.css";
import PolicyHeader from "./PolicyHeader/PolicyHeader";
import { useNavigate } from "react-router-dom";
import Reveal from "../../components/Motion/Reveal/Reveal";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/");
  };

  return (
    <>
      <PolicyHeader
        link="#"
        heading="Privacy Policy"
        intro="This Privacy Policy applies to Arhos Oil & Gas LTD, available at [https://www.Arkhosoilandgas.com] (the Website)"
        img={PrivacyLogo}
        alt="Privacy-Policy"
        getStarted={getStarted.bind(this)}
      />
      <div className={classes.PrivacyPolicy}>
        <p>
          <Reveal cover>
            This page informs you of our policies regarding the collection, use,
            and disclosure of Personal Information when you use our Service. We
            will not use or share your information with anyone except as
            described in this Privacy Policy. We use your Personal Information
            for providing and improving the Service. By using the Service, you
            agree to the collection and use of information in accordance with
            this policy. <br /> <br />
          </Reveal>
          <Reveal cover>
            Unless otherwise defined in this Privacy Policy, terms used in this
            Privacy Policy have the same meanings as in our Terms and
            Conditions, accessible here.
          </Reveal>
        </p>{" "}
      </div>
      {policyData.map((policies) => (
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

export default PrivacyPolicy;
