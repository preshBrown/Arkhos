import React from "react";

import classes from "./SuspenseBackdrop.module.css";

const SuspenseBackdrop = (props) => {
  const { theme } = props;

  return (
    props.show && (
      <div
        onClick={props.close}
        className={[
          classes.HomeBackdrop,
          props.transparent ? classes.transparent : null,
          theme === "dark" ? classes.Dark : null,
        ].join(" ")}
      >
        {" "}
      </div>
    )
  );
};

export default SuspenseBackdrop;
