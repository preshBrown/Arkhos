import React from "react";
import HomeImage from "./LogisticsHomeImage/HomeImage";
import Components from "./LogisticsHomeImage/ImagesComponents/Components";
import classes from "./Logistics.module.css";
import Button from "../../../../components/Interfaces/Button/Button";

import projectImg1 from "./LogisticsHomeImage/ImagesComponents/Img/Turnkey Logistics for Oil & Gas Projects.jpg";
import projectImg2 from "./LogisticsHomeImage/ImagesComponents/Img/Fleet Support for Construction Projects.jpeg";
import projectImg3 from "./LogisticsHomeImage/ImagesComponents/Img/Emergency Response Operations.jpg";
import projectImg4 from "./LogisticsHomeImage/ImagesComponents/Img/Corporate Transport Solutions.jpg";
import projectImg5 from "./LogisticsHomeImage/ImagesComponents/Img/Advanced Logistics Management.jpg";

import operation1 from "./LogisticsHomeImage/ImagesComponents/Img/operation-1.jpeg";
import operation2 from "./LogisticsHomeImage/ImagesComponents/Img/operation-2.jpeg";

import servicImg from "./LogisticsHomeImage/ImagesComponents/Img/body-intro.jpg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./LogisticsHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";
import { useState } from "react";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import ClientForm from "../../../../components/ClientForm/ClientForm";
import { BsFire } from "react-icons/bs";
import Reveal from "../../../../components/Motion/Reveal/Reveal";

const Logistics = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  const capabilityItems = [
    "Pick-Up Double Cabin",
    "Support Vehicle Truck with Self-Loader",
    "Coal, Iron Ore, and Mineral Stockpiling",
    "Mack Truck (Flat Bed)",
    "Mack Truck (Low Bed)",
    "Tipping Trucks",
    "Mobile Self-Priming Dewatering Pumps",
    "Generator Sets",
    "Hiace Bus",
    "Saloon Car",
    "Water Tankers",
    "Welding Machines",
    "Long-Term and Short-Term Equipment Leasing",
    "Maintenance Support for Leased Equipment",
    "On-Site Technical Assistance",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "Turnkey Logistics for Oil & Gas Projects",
      description: (
        <>
          Provided a full suite of transportation services, including personnel
          and equipment transport, to support a major oil and gas exploration
          project. The operation involved deploying low beds, flat beds, and
          support trucks across multiple locations.
        </>
      ),
    },
    {
      id: 2,
      img: projectImg2,
      header: "Fleet Support for Construction Projects",
      description: (
        <>
          Delivered 24/7 equipment leasing and maintenance support for a
          large-scale construction project, ensuring uninterrupted operations
          and adherence to tight schedules.
        </>
      ),
    },
    {
      id: 3,
      img: projectImg3,
      header: "Emergency Response Operations",
      description: (
        <>
          Deployed water tankers and dewatering pumps for emergency flood
          control at a critical infrastructure project, demonstrating agility
          and reliability in urgent situations.
        </>
      ),
    },
    {
      id: 4,
      img: projectImg4,
      header: "Corporate Transport Solutions",
      description: (
        <>
          Designed a customized fleet solution for a multinational corporation,
          offering saloon cars, buses, and pick-ups for efficient personnel
          movement.
        </>
      ),
    },
    {
      id: 5,
      img: projectImg5,
      header: " Advanced Logistics Management ",
      description: (
        <>
          Streamlined logistics for a complex pipeline installation project,
          ensuring the timely delivery of welding machines, generator sets, and
          tipping trucks to remote sites.
        </>
      ),
    },
  ];

  const serviceDescription = (
    <p>
      At Arkhos Oil & Gas Ltd, we understand that efficient logistics and
      reliable transportation are vital for seamless operations across
      industries. Our comprehensive logistics solutions and equipment leasing
      services are tailored to meet the unique demands of our clients. With a
      focus on reliability, safety, and precision, we deliver best-in-class
      services designed to ensure the successful execution of your projects.
      Whether it’s moving personnel, equipment, or essential supplies, we pride
      ourselves on being a trusted partner in logistics.
    </p>
  );

  const experienceContents = (
    <ul className={classes.ExperienceContents}>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          <h4>Modern Equipment Fleet: </h4>
          <div>
            Our diverse range of equipment ensures we can handle projects of any
            scale and complexity.
          </div>
        </Reveal>
      </li>

      <li className={classes.ExperienceContent}>
        <Reveal cover>
          <h4> Reliability: </h4>
          <div>
            All our equipment undergoes regular maintenance to ensure peak
            performance.
          </div>
        </Reveal>
      </li>

      <li className={classes.ExperienceContent}>
        <Reveal cover>
          <h4>Safety-First Approach: </h4>
          <div>
            We prioritize safety in all our logistics and leasing operations.
          </div>
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          <h4>Experienced Team: </h4>
          <div>
            Our logistics experts are skilled in planning and executing
            operations with precision.
          </div>
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          <h4>Tailored Solutions:</h4>
          <div>
            Flexible lease terms and customized service packages to meet your
            specific needs.
          </div>
        </Reveal>
      </li>
    </ul>
  );

  const partnerWithUs = (
    <p>
      By choosing Arkhos for your stockpiling needs, you gain a reliable partner
      dedicated to supporting your operations and ensuring your projects run
      smoothly from start to finish.
    </p>
  );

  const whyArchos = (
    <p>
      <Reveal cover>
        At Arkhos Oil & Gas Ltd, we don’t just provide logistics and equipment;
        we deliver peace of mind, enabling you to focus on achieving your
        project goals. Let us drive your success with our unparalleled
        commitment to excellence.
      </Reveal>
    </p>
  );

  const toggleSearch = () => {
    console.log("search clicked");
    setOpenClientForm(!openClientForm);
  };

  return (
    <>
      <FilterModal
        footerClass={classes.FilterModalFooterClass}
        contentClass={classes.contentClass}
        header={
          <span className={classes.ClientHeader}>
            Connect With Arkh
            <span className={classes.ClientHeaderIcon}>
              <BsFire />
            </span>
            s
          </span>
        }
        show={openClientForm}
        close={toggleSearch}
      >
        <ClientForm close={toggleSearch} />
      </FilterModal>

      <HomeImage images={Components} />

      <SectionHeader
        header1="Logistics and Equipment Leasing Services"
        header2="Driving Efficiency, Delivering Success."
      />
      <ServiceDescription
        serviceDescription={serviceDescription}
        img={servicImg}
      />

      <Button
        clicked={() => setOpenClientForm(!openClientForm)}
        className={classes.OffsureSupplyBtn}
      >
        Click Here To Start A Convasation
      </Button>
      <ReverseImageSection
        header="Why Choose Us"
        img={operation1}
        content={experienceContents}
      />

      <Capabilities
        header="Capability"
        // subHeader="Mechanical"
        // description="Whether new construction, renovations or retrofits, Arkhos mechanical engineering capabilities are tailored to meet today’s complex building requirements. Our team applies proven engineering methods to design mechanical systems that optimize performance, minimize operational costs and align with energy and sustainability goals."
        data={capabilityItems}
      />
      <InlineImageSection
        header="Partner with Us"
        img={operation2}
        content={whyArchos}
      />

      {/* <ReverseImageSection
        header="Partner with Us"
        img={servicImg}
        content={partnerWithUs}
      /> */}

      <SectionWrapper header="Project Highlight">
        <ProjectHighlight projectData={projectData} />
      </SectionWrapper>
    </>
  );
};

export default Logistics;
