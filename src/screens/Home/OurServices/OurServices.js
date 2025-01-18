import React from "react";

import classes from "./OurServices.module.css";
import CustomSlider from "../CustomSlider/CustomSlider";

const Interesting = () => {


  return (
    <section style={{ marginTop: "25px", marginBottom: "20px" }}>
      <div className={classes.IntContentWrapper}>
        <header className={classes.IntHeader}>
          <div className={classes.Bar}></div>
          <h2>Our Services</h2>
        </header>
<CustomSlider />
      </div>
    </section>
  );
};

export default Interesting;
