import React from "react";

import SuspenseBackdrop from "./SuspenseBackdrop";
import classes from "./SuspenseLoader.module.css";

const SuspenseLoader = (props) => {
  const {theme} = props

  return (
    <>
      <SuspenseBackdrop transparent={props.transparent} theme={theme} show />
      <div className={classes.HomeLoadingSpinner}>
        <div className={classes.Loader}></div> 
      </div>
    </>
  );
};

export default SuspenseLoader;


/* HTML: <div class="loader"></div> */
