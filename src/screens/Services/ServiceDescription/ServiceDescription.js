import React from "react";

import classes from "./ServiceDescription.module.css";
import Reveal from "../../../components/Motion/Reveal/Reveal";
import { XAxisRight } from "../../../components/Motion/DivMotion";
import { MotionTop } from "../../../components/Motion/ImageSlidesMotion/ImageSlidesMotion";

const ServiceDescription = (props) => {
  return (
    <section className={classes.ServiceDescription}>
      <div className={classes.ContentMobile}>
        <Reveal>
        {props.serviceDescription}
        </Reveal>
      </div>

      <article className={classes.Container}>
        <MotionTop delay={0.1} className={classes.ImgWrapper}>
          {/* <XAxisRight delay={0.1}> */}
          <img src={props.img} alt="Loading.." />
          {/* </XAxisRight> */}
        </MotionTop>
        <div className={classes.Suspence}>
          <Reveal>{props.serviceDescription}</Reveal>
        </div>
      </article>
    </section>
  );
};

export default ServiceDescription;
