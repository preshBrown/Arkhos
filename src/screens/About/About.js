import React from "react";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

import img1 from "./Images/operation3.jpg";
import img2 from "./Images/operation22.jpeg";
import img3 from "./Images/operation1.png";

import classes from "./About.module.css";
import Reveal from "../../components/Motion/Reveal/Reveal";

const About = () => {
  return (
    <section className={classes.About}>
      <div className={classes.AboutImage}>
        <h1>About Us</h1>
      </div>

      <header style={{ padding: "10px" }}>
      <Reveal cover>
        
        Arkhos Oil & Gas Ltd: A leading provider of innovative engineering,
        procurement, and energy solutions, delivering excellence and
        sustainability across the oil and gas industry.{" "}
        </Reveal>
      </header>

      <article className={classes.AboutWrapper}>
        <div className={classes.AboutImgItemsWrapper}>
          <div className={classes.ImageContainer}>
            <img className={classes.img} src={img1} alt="Arkhos1" />
          </div>
          <div className={classes.ImageContainer}>
            <img className={classes.img} src={img2} alt="Arkhos2" />
          </div>
          <div className={classes.ImageContainer}>
            <img className={classes.img} src={img3} alt="Arkhos3" />
          </div>
        </div>

        <div className={classes.AboutDescription}>
          <p style={{ padding: "10px" }}>
          <Reveal cover>
        
            At Arkhos Oil & Gas Ltd, we are a leading Nigerian company with a
            strong presence across the nation's oil and gas regions. Over the
            years, we have built a reputation as one of the foremost welding and
            fabrication companies in the industry, providing top-tier services
            in pipeline construction, engineering projects, and fabrication for
            major oil and gas companies. At Arkhos, we are driven by innovation,
            professionalism, and the vision to consistently exceed expectations
            in every project we undertake. <br /> <br />
        </Reveal>
        <Reveal cover>
        
            We offers a comprehensive range of services tailored to the needs of
            the oil and gas industry. With a deep understanding of the
            industry's unique challenges, we deliver top-notch solutions that
            span across various sectors
      </Reveal>
          </p>
        </div>
      </article>

      <div>
        <WhyChooseUs />
      </div>

      <div>{/* Explore other category  */}</div>
    </section>
  );
};

export default About;
