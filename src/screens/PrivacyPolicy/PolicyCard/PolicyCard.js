import React from "react";

import classes from "./PolicyCard.module.css";
import Reveal from "../../../components/Motion/Reveal/Reveal";

const PolicyCard = (props) => {
  return (
    <div className={classes.PolicyCard}>
      <h3>
        <Reveal>{props.title}</Reveal>
      </h3>
      <p>
        <Reveal>{props.header}</Reveal>
      </p>
      <ul>
        {props.listData &&
          props.listData.map((data) => (
            <li key={data}>
              <Reveal>{data}</Reveal>
            </li>
          ))}
      </ul>

      <footer>{props.footerData}</footer>
    </div>
  );
};

export default PolicyCard;
