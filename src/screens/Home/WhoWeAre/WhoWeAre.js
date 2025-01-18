import React from "react";

import display from "./Oil-and-Gas-who we are.jpg";

import classes from "./WhoWeAre.module.css";
import Button from "../../../components/Interfaces/Button/Button";
import DivMotion from "../../../components/Motion/DivMotion";
import Reveal from "../../../components/Motion/Reveal/Reveal";
import { MotionLeft } from "../../../components/Motion/ImageSlidesMotion/ImageSlidesMotion";

const WhoWeAre = (props) => {
  return (
    <section style={{ marginTop: "25px", marginBottom: "20px" }}>
      <div className={classes.weAreContentWrapper}>
        <header className={classes.WeAreHeader}>
          <div className={classes.Bar}></div>
          <h2>Who we are</h2>
        </header>

        <div className={classes.ItemsWrapper}>
          <article className={classes.imageContainer}>
            <MotionLeft delay={0.1}>
              <div className={classes.Background}>
                <div className={classes.imageWrapper}>
                  <img src={display} alt="description" />
                </div>
              </div>
            </MotionLeft>
          </article>

          <article className={classes.Description}>
          <Reveal cover>
            <p>
              {" "}
              At Arkhos Oil & Gas Ltd, we are a leading Nigerian company with a
              strong presence across the nation's oil and gas regions. Over the
              years, we have built a reputation as one of the foremost welding
              and fabrication companies in the industry, providing top-tier
              services in pipeline construction, engineering projects, and
              fabrication for major oil and gas companies. <br />
              At Arkhos, we are driven by innovation, professionalism, and the
              vision to consistently exceed expectations in every project we
              undertake.
            </p>
            </Reveal>
            <Reveal cover>
            <Button className={classes.Description_Btn} to={props.path}>
              Read More
            </Button>
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
