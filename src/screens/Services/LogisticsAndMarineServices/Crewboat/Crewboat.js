import React from "react";
import HomeImage from "./CrewboatHomeImage/HomeImage";
import Components from "./CrewboatHomeImage/ImagesComponents/Components";
import classes from "./Crewboat.module.css";
import Button from "../../../../components/Interfaces/Button/Button";

import projectImg1 from "./CrewboatHomeImage/ImagesComponents/Img/Efficient Crew Transfers.jpg";
import projectImg2 from "./CrewboatHomeImage/ImagesComponents/Img/Emergency Medevac Operations.jpg";
import projectImg3 from "./CrewboatHomeImage/ImagesComponents/Img/Platform-to-Vessel Shuttle Services.jpeg";
import projectImg4 from "./CrewboatHomeImage/ImagesComponents/Img/Adverse Weather Operations.jpg";
import projectImg5 from "./CrewboatHomeImage/ImagesComponents/Img/Integrated Offshore Support.jpg";
import projectImg6 from "./CrewboatHomeImage/ImagesComponents/Img/Customized Vessel Upgrades.png";


import operation1 from "./CrewboatHomeImage/ImagesComponents/Img/operation1.jpeg";

import servicImg from "./CrewboatHomeImage/ImagesComponents/Img/body intro.jpg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./CrewboatHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";
import { useState } from "react";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import { BsFire } from "react-icons/bs";
import ClientForm from "../../../../components/ClientForm/ClientForm";
import Reveal from "../../../../components/Motion/Reveal/Reveal";

const Crewboat = () => {

  const [openClientForm, setOpenClientForm] = useState(false);

  const capabilityItems = [
    "Personnel Transportation to Offshore Installations",
    "Light Cargo and Equipment Transport",
    "Emergency Medical Evacuation Support (Medevac)",
    "Dynamic Positioning for Safe Docking and Operations",
    "Standby and Safety Services for Offshore Activities",
    "Shuttle Services Between Platforms and Vessels",
    "Night-Time and Adverse Weather Operations",
    "High-Speed Crew Transfers",
    "Integrated Communication and Navigation Systems",
    "Accommodation for Short-Term Offshore Assignments",
    "Maintenance Support for Offshore Platforms",
    "Environmental Spill Monitoring and Support",
    "Fuel and Supply Transport for Small-Scale Operations",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "Efficient Crew Transfers",
      description: (
        <>
          Ensured the timely and safe transportation of over 500 personnel to
          multiple offshore installations over a six-month period, optimizing
          project timelines.
        </>
      ),
    },
    {
      id: 2,
      img: projectImg2,
      header: "Emergency Medevac Operations",
      description: (
        <>
          Deployed a crew boat equipped with medical facilities to provide
          immediate evacuation and care during an offshore medical emergency,
          ensuring personnel safety and well-being.
        </>
      ),
    },
    {
      id: 3,
      img: projectImg3,
      header: "Platform-to-Vessel Shuttle Services",
      description: (
        <>
          Facilitated continuous operations by providing shuttle services
          between offshore platforms and drilling vessels, ensuring
          uninterrupted workflows.
        </>
      ),
    },
    {
      id: 4,
      img: projectImg4,
      header: "Adverse Weather Operations",
      description: (
        <>
          Successfully executed crew transfers and equipment transport during
          challenging weather conditions, demonstrating reliability and
          operational resilience.
        </>
      ),
    },
    {
      id: 5,
      img: projectImg5,
      header: " Integrated Offshore Support ",
      description: (
        <>
          Provided a comprehensive support solution, including crew transfers,
          light cargo transport, and standby safety services, for a major
          offshore maintenance project.
        </>
      ),
    },
    {
      id: 6,
      img: projectImg6,
      header: "Customized Vessel Upgrades",
      description: (
        <>
          Enhanced vessel capabilities with tailored modifications, including
          additional seating and advanced communication systems, to meet
          specific client requirements.
        </>
      ),
    },
  ];

  const serviceDescription = (
    <p>
      At Arkhos Oil & Gas, we provide specialized Crew Boat services tailored to
      meet the critical needs of offshore operations. Our fleet of modern,
      high-performance vessels ensures the safe and efficient transportation of
      personnel, equipment, and light cargo between shore bases and offshore
      installations. With a focus on safety, reliability, and operational
      excellence, we are committed to supporting our clients’ offshore projects
      with seamless crew transfers and logistical solutions.
    </p>
  );

  const experienceContents = (
    <ul className={classes.ExperienceContents}>
      <li className={classes.ExperienceContent}>
        <h4>Efficiency</h4>
        <div>
          We optimize our stockpiling processes to ensure the right materials
          are always available when needed. By implementing advanced inventory
          management systems, we minimize delays and maximize operational
          efficiency.
        </div>
      </li>
      <li className={classes.ExperienceContent}>
        <h4> Sustainability</h4>
        <div>
          All stockpiled materials undergo rigorous quality checks to ensure
          they meet industry standards. We are committed to delivering reliable
          and high-quality resources for every project.
        </div>
      </li>
      <li className={classes.ExperienceContent}>
        <h4>Quality Assurance</h4>
        <div>
          All stockpiled materials undergo rigorous quality checks to ensure
          they meet industry standards. We are committed to delivering reliable
          and high-quality resources for every project.
        </div>
      </li>
      <li className={classes.ExperienceContent}>
        <h4>Safety and Compliance</h4>
        <div>
          Our stockpiling facilities are managed with strict adherence to
          health, safety, and environmental (HSE) standards. We ensure that all
          operations comply with local and international regulations,
          prioritizing safety for both our team and the community.
        </div>
      </li>
      <li className={classes.ExperienceContent}>
        <h4>Customer-Centric Approach</h4>
        <div>
          We tailor our stockpiling services to meet the specific needs of our
          clients, ensuring flexibility and reliability in every operation.
        </div>
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
      With an unwavering commitment to safety, efficiency, and client
      satisfaction, Arkhos Oil & Gas Ltd delivers world-class Crew Boat services
      that are integral to the success of offshore operations.
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
              <BsFire  />
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

      <SectionHeader header1="Navigating Excellence, Powering Offshore Success Connecting" header2="" />
      <ServiceDescription
        serviceDescription={serviceDescription}
        img={servicImg}
      />

      <Button         clicked={() => setOpenClientForm(!openClientForm)}
 className={classes.OffsureSupplyBtn}>
        Click Here To Start A Convasation
      </Button>
      {/* <ReverseImageSection
        header="Our Core Principles"
        img={servicImg}
        content={experienceContents}
      /> */}

      <Capabilities
        header="Capability"
        // subHeader="Mechanical"
        // description="Whether new construction, renovations or retrofits, Arkhos mechanical engineering capabilities are tailored to meet today’s complex building requirements. Our team applies proven engineering methods to design mechanical systems that optimize performance, minimize operational costs and align with energy and sustainability goals."
        data={capabilityItems}
      />
      <InlineImageSection
        header="Partner with Us"
        img={operation1}
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

export default Crewboat;
