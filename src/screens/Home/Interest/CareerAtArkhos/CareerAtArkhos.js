import React from "react";
import img from "./Img/CareerAtArkhos.jpg";
import CareerAtArkhos2 from "./Img/CareerAtArkhos-2.jpeg";
import Growth from "./Img/Opportunityforgrowth.jpeg";
import InnovativeProjects from "./Img/InnovativeProjects.jpeg";
import CultureofExcellence from "./Img/Acultureofexcellence.jpg";
import GlobalExposure from "./Img/globalexposure.jpg";
import SustainabilityandInnovation from "./Img/sustanability.png";
import values from "./Img/Our values.jpg";
import Careerpath from "./Img/Careerpath.jpeg";
import HeaderLayout from "../../../../components/Interested/General/HeaderLayout/HeaderLayout";

import classes from "./CareerAtArkhos.module.css";
import LayoutWrapper from "../../../../components/Interested/General/LayoutWrapper/LayoutWrapper";
import ServiceDescription from "../../../Services/ServiceDescription/ServiceDescription";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import Reveal from "../../../../components/Motion/Reveal/Reveal";

const CareerAtArkhos = () => {
  const coreFeatureData = [
    {
      id: 2,
      to: "#",
      img: Growth,
      header: "Opportunities for Growth",
      desc: (
        <>
          At Arkhos, we are committed to fostering your professional
          development. <br />
          Through hands-on training, mentorship programs, and continuous
          learning opportunities, we empower our team members to excel and grow
          in their careers.
        </>
      ),
    },
    {
      id: 3,
      to: "#",
      img: InnovativeProjects,
      header: "Innovative Projects",
      desc: (
        <>
          Work on cutting-edge projects in areas such as pipeline construction,
          fabrication, sandblasting, diesel and lubricant supply, marine
          services, and more. <br /> We offer an environment that encourages
          creativity and problem-solving.
        </>
      ),
    },
    {
      id: 4,
      to: "#",
      img: CultureofExcellence,
      header: "A Culture of Excellence",
      desc: (
        <>
          {" "}
          We are dedicated to upholding the highest standards of quality,
          safety, and integrity in everything we do. <br />
          At Arkhos, we take pride in our reputation for delivering exceptional
          results for our clients.
        </>
      ),
    },
    {
      id: 5,
      to: "#",
      img: GlobalExposure,
      header: " Global Exposure",
      desc: (
        <>
          Collaborate with industry leaders and partners from across the globe
          while contributing to projects that have a lasting impact on the
          energy sector.
        </>
      ),
    },
    {
      id: 6,
      to: "#",
      img: SustainabilityandInnovation,
      header: "Sustainability and Innovation",
      desc: (
        <>
          Be part of a team that is committed to driving sustainability in the
          oil and gas industry by adopting innovative technologies and
          practices.
        </>
      ),
    },
  ];

  const serviceDescription = (
    <p>
      At Arkhos Oil & Gas Ltd, we are always looking for passionate, talented,
      and driven individuals to join our team. If you’re ready to take your
      career to the next level, we invite you to explore our current
      opportunities and become part of our journey toward excellence and
      innovation in the oil and gas industry.
    </p>
  );

  const experienceContents = (
    <>
      <h3>
        <Reveal cover>
          We are guided by principles that reflect who we are:
        </Reveal>
      </h3>
      <ul className={classes.ExperienceContents}>
        <li className={classes.ExperienceContent}>
          <Reveal cover>
            <strong>Safety First:</strong> Protecting our people and the
            environment is our top priority.
          </Reveal>
        </li>

        <li className={classes.ExperienceContent}>
          <Reveal cover>
            <strong>Collaboration: </strong>We believe in the power of teamwork
            and mutual respect.
          </Reveal>
        </li>

        <li className={classes.ExperienceContent}>
          <Reveal cover>
            <strong>Integrity: </strong>Upholding ethical practices and
            transparency in all our dealings.
          </Reveal>
        </li>

        <li className={classes.ExperienceContent}>
          <Reveal cover>
            <strong>Excellence: </strong>Striving for perfection in every
            project and task.
          </Reveal>
        </li>
      </ul>
    </>
  );

  const experienceContents2 = (
    <>
      <h3>
        {" "}
        <Reveal cover>
          Whether you're an experienced professional or just starting your
          journey, Arkhos offers diverse career opportunities:
        </Reveal>
      </h3>
      <ul className={classes.ExperienceContents}>
        <li className={classes.ExperienceContent}>
          <Reveal cover>Engineering and Design</Reveal>
        </li>
        <li className={classes.ExperienceContent}>
          <Reveal cover>Project Management</Reveal>
        </li>
        <li className={classes.ExperienceContent}>
          <Reveal cover>Procurement and Supply Chain</Reveal>
        </li>
        <li className={classes.ExperienceContent}>
          <Reveal cover>Marine Operations</Reveal>
        </li>
        <li className={classes.ExperienceContent}>
          <Reveal cover>Health, Safety, and Environment (HSE)</Reveal>
        </li>
        <li className={classes.ExperienceContent}>
          <Reveal cover>Administrative and Support Services</Reveal>
        </li>
      </ul>
    </>
  );

  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Career at Arkhos"
        contents={
          <>
            At <strong>Arkhos Oil & Gas Ltd</strong>, we believe our people are
            our greatest asset. We are a company driven by innovation,
            excellence, and a passion for shaping the future of the oil and gas
            industry. Joining our team means being part of a dynamic and
            forward-thinking organization that values expertise, collaboration,
            and professional growth.
          </>
        }
        img={img}
      />
      <h1 className={classes.Explore}>Why Work with Us?</h1>

      <LayoutWrapper data={coreFeatureData} />

      <InlineImageSection
        header="Our Values"
        img={values}
        content={experienceContents}
      />
      <ReverseImageSection
        header="Career Paths"
        img={Careerpath}
        content={experienceContents2}
      />

      <ServiceDescription
        serviceDescription={serviceDescription}
        img={CareerAtArkhos2}
      />
    </section>
  );
};

export default CareerAtArkhos;
