import React from "react";

import classes from "./ServiceItem.module.css";
import { Link } from "react-router-dom";
import ScrollBaseZoom from "../../../components/Motion/ScrollBaseZoom/ScrollBaseZoom";

const ServiceItem = (props) => {
  const { header, img, description } = props;

  return (
    <ScrollBaseZoom className={classes.ServiceItem}>
      <div>
      <Link className={classes.ServiceItemLink} to={props.link}>
        <div className={classes.imageWrapper}>
          <img src={img} alt="Loading..." />
        </div>

        <div className={classes.Description}>
          <h4>{header}</h4>
          {/* <small>{description}</small> */}
        </div>
      </Link>
      </div>
    </ScrollBaseZoom>
  );
};

export default ServiceItem;
