import React from "react";
import image from "./IMG-20220629-WA0001.jpg";
import classes from "./HowItWorks.module.css";
import HContent from "./HContent/HContent";

const HowItWorks = (props) => {
  return (
    <section className={classes.HowItWorks}>
         <div className={classes.ContentMobile}>
        {/* <HContent /> */}
        {props.serviceDescription}
      </div>


      
      <article className={classes.Container}>
        <div className={classes.ImgWrapper}>
          <img src={image} alt="Loading.." />
        </div>
        <div className={classes.Suspence}>
          {/* <HContent /> */}
         {props.serviceDescription}
        </div>
      </article>

   
    </section>
  );
};

export default HowItWorks;
