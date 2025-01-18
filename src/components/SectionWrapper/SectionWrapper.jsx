import React from "react";
import classes from "./SectionWrapper.module.css";
import Reveal from "../Motion/Reveal/Reveal";

export const SectionHeader = (props) => (
  <header className={classes.SectionHeader}>
    <h1>
      <Reveal cover>{props.header1}:</Reveal>
    </h1>
    <h1>
      <Reveal cover>{props.header2}</Reveal>
    </h1>
  </header>
);

const SectionWrapper = (props) => {
  return (
    <section className={[classes.OurServices, props.className].join(" ")}>
      <div className={classes.weAreContentWrapper}>
        {props.header && (
          <header className={classes.WeAreHeader}>
            <div className={classes.Bar}></div>
            <h2>{props.header}</h2>
          </header>
        )}
        {props.children}
      </div>
    </section>
  );
};

export default SectionWrapper;
