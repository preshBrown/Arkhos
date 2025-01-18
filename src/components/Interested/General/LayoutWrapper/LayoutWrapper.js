import React from "react";

import classes from "./LayoutWrapper.module.css";
import { Link } from "react-router-dom";
import Reveal from "../../../Motion/Reveal/Reveal";

const LayoutWrapper = (props) => (
  <>
    <ul className={classes.CoreFeatures}>
      {props.data.map((features) => (
        <li key={features.id} className={classes.CoreFeaturesItem}>
          <Link to={features.to} className={classes.CoreFeaturesLink}>
            <div className={classes.imageWrapper}>
              <img src={features.img} alt="Loading..." />
            </div>

            <div className={classes.Description}>
              <h4>
                <Reveal>
                  {features.header}
                  </Reveal>
              </h4>
              <small>
                <Reveal>
                  {features.desc}
                  </Reveal>
              </small>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default LayoutWrapper;
