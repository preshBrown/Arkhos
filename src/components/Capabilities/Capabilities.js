import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

import classes from "./Capabilities.module.css";
import Staggered from "../Motion/Staggered/Staggered";

const Capabilities = (props) => {
  return (
    <SectionWrapper
      className={`${classes.CapabilitiesSection} ${props.className}`}
      header={props.header}
    >
      {props.subHeader && (
        <div style={{paddingLeft: "20px"}}>
          <h2>{props.subHeader}</h2>
          <p>{props.description}</p>
        </div>
      )}
      <ul className={classes.Capabilities}>
        {props.data.map((items, index) => (
          <Staggered index={index} key={items} className={classes.CapabilitiesItem}>
            {items}
          </Staggered>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default Capabilities;
