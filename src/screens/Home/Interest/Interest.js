import React from "react";
import ServiceItem from "./ServiceItem";
import Digitalization from "./img/Digitalization-Home.jpg";
// import Digitalization from "./img/Degitalizationnew.jpg";
import Portfolio from "./img/Portfolio.jpg";
import DesignEngineering from "./img/DesignEngineering.jpg";
import CareerAtArkos from "./img/CareerAtArkos.jpg";
import Helpline from "./img/Helpline.jpg";
// import OurImage from "../Metal Fabrication, Explained.jpg";
import classes from "./Interest.module.css";
import { Link } from "react-router-dom";
import ScrollBaseZoom from "../../../components/Motion/ScrollBaseZoom/ScrollBaseZoom";

const OurServices = () => {
  const ServiceData = [
    {
      id: 3,
      link: "/design-engineering",
      img: DesignEngineering,
      header: "Design Engineering",
    },
    {
      id: 4,
      link: "/career-at-arkhos",
      img: CareerAtArkos,
      header: "Career at Arkhos",
    },
    {
      id: 5,
      link: "/helpline",
      img: Helpline,
      header: "Helpline",
    },
    // {
    //   id: 6,
    //   img: OurImage,
    //   header: "Logistics",
    //   description: "Years of experience",
    // },
    // {
    //   id: 7,
    //   img: OurImage,
    //   header: "Stock Pilling",
    //   description: "Years of experience",
    // },
    // {
    //   id: 8,
    //   img: OurImage,
    //   header: "Marine Services",
    //   description: "Years of experience",
    // },
  ];
  const coreFeatureData = [
    {
      id: 1,
      to: "/digitalization",
      img: Digitalization,
      header: "Digitization",
    },
    {
      id: 2,
      to: "/portfolio-and-projects",
      img: Portfolio,
      header: "Portfolio and other Projects ",
    },
  ];

  const coreFeatures = (
    <>
      <ul className={classes.CoreFeatures}>
        {coreFeatureData.map((features) => (
          <ScrollBaseZoom
            key={features.id}
            className={classes.CoreFeaturesItem}
          >
            <div>
              {" "}
              <Link to={features.to} className={classes.CoreFeaturesLink}>
                <div className={classes.imageWrapper}>
                  <img src={features.img} alt="Loading..." />
                </div>

                <div className={classes.Description}>
                  <h4>{features.header}</h4>
                </div>
              </Link>
            </div>
          </ScrollBaseZoom>
        ))}
      </ul>
    </>
  );

  return (
    <section className={classes.OurServices}>
      <div className={classes.weAreContentWrapper}>
        <header className={classes.WeAreHeader}>
          <div className={classes.Bar}></div>
          <h2>You may also be interested in</h2>
        </header>

        {coreFeatures}
        <ul className={classes.ServiceItems}>
          {ServiceData.map((data) => (
            <ServiceItem
              key={data.id}
              img={data.img}
              header={data.header}
              link={data.link}
              description={data.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
