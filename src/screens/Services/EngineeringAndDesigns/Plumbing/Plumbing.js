import React from "react";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import HomeImage from "./PlumbingWorkHomeImage/HomeImage";
import Components from "./PlumbingWorkHomeImage/ImagesComponents/Components";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Button from "../../../../components/Interfaces/Button/Button";
import projectImg1 from "./PlumbingWorkHomeImage/ImagesComponents/Img/ProjectH-1.jpg";
import projectImg2 from "./PlumbingWorkHomeImage/ImagesComponents/Img/ProjectH-2.jpeg";
import projectImg3 from "./PlumbingWorkHomeImage/ImagesComponents/Img/ProjectH-3.jpg";
import projectImg4 from "./PlumbingWorkHomeImage/ImagesComponents/Img/ProjectH-4.jpeg";
import projectImg5 from "./PlumbingWorkHomeImage/ImagesComponents/Img/ProjectH-5.jpg";
import projectImg6 from "./PlumbingWorkHomeImage/ImagesComponents/Img/ProjectH-6.jpg";
import servicImg from "./PlumbingWorkHomeImage/ImagesComponents/Img/Bodyintro.jpg";

import classes from "./Plumbing.module.css";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import { BsFire } from "react-icons/bs";
import ClientForm from "../../../../components/ClientForm/ClientForm";
import { useState } from "react";

const Plumbing = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  const mechanical = [
    "Central Plant",
    "HVAC",
    "Geothermal",
    "Smoke Control & Evacuation",
    "System Evaluation & Analysis",
    "Energy Modeling",
  ];

  const electrical = [
    "Lighting",
    "Medium/Low Voltage Distribution",
    "Fire / Life Safety",
    "Lightning Protection",
    "Power Generation & Distribution",
    "UPS Systems",
    "Arc Flash Analysis",
    "Building Evaluation Reports",
  ];

  const plumbing = [
    "Domestic Water",
    "Sanitary/Storm",
    "Sprinkler (including Pre-Action)",
    "Medical Gas Distribution",
    "Medical Vacuum System",
    "Building Evaluation Reports",
    "Rainwater Harvesting",
    "Irrigation Design",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "M E P",
      description:
        "The project involves the design and construction administration for four floors of corporate office space, including five SCIF spaces. The design modified the existing base building VAV system to meet the new tenant layout, and design new dedicated units to serve the new mission critical spaces.",
    },
    {
      id: 2,
      img: projectImg2,
      header: "M E P",
      description: "The project consisted of the MEP design of a multi-story.",
    },
    {
      id: 3,
      img: projectImg3,
      header: "M E P",
      description:
        "Arkhos provided mechanical, electrical and plumbing design engineering for the interior renovation of the training facility.",
    },
    {
      id: 4,
      img: projectImg4,
      header: "M E P",
      description:
        "Arkhos was responsible for the mechanical, electrical, and plumbing engineering services for the new 97,000 sq. ft. Cisco project. The office project includes the design and construction administration of corporate office space.",
    },
    {
      id: 5,
      img: projectImg5,
      header: "",
      description:
        "Arkhos has been an on-call contract mechanical and electrical engineering service provider to the City of PortHarcourt, providing MEP design.",
    },
    {
      id: 6,
      img: projectImg6,
      header: "Structural Engineering Services for 7 Structures",
      description:
        "High school with student capacity of 636. The team provided mechanical, plumbing and fire protection design. The scope included all new HVAC system, nine variable refrigerant systems and three single zone VAV rooftop units.",
    },
  ];
  const serviceDescription = (
    <p>
      Mechanical, electrical and plumbing (MEP) engineering transforms how we
      live, work and play and serves as the brains behind the built environment.
      State-of-the-art MEP systems emphasize operational efficiencies,
      sustainability and comfort to make our lives easier and provide optimal
      cost savings to all users. Arkhos MEP experts incorporate the latest
      technology and best practices to support these systems across all stages
      of the design and construction process on a wide variety of facilities
      including commercial, educational, healthcare, municipal and industrial.
      Whether it is planning and designing a new certified building or
      performing energy analyses to determine the most effective way to upgrade
      and retrofit an existing building’s system, Arkhos engineers have the
      experience and expertise to deliver functional, high-quality projects
      ranging from a technically challenging infrastructure to a simple office
      fit-out.{" "}
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
        header1="M E P "
        header2="Innovative M E P Engineering for Efficiency and Sustanability"
      />
      <ServiceDescription
        serviceDescription={serviceDescription}
        img={servicImg}
      />

      <Button
        clicked={() => setOpenClientForm(!openClientForm)}
        className={classes.StructuralWorkBtn}
      >
        Click Here To Start A Convasation
      </Button>

      <Capabilities
        className={classes.CustomClass}
        header="Capability"
        subHeader="Mechanical"
        description="Whether new construction, renovations or retrofits, Arkhos mechanical engineering capabilities are tailored to meet today’s complex building requirements. Our team applies proven engineering methods to design mechanical systems that optimize performance, minimize operational costs and align with energy and sustainability goals."
        data={mechanical}
      />
      <Capabilities
        className={classes.CustomClass}
        subHeader="Electrical"
        description="Arkhos electrical engineers provide reliable and energy-efficient solutions to meet the diverse power and infrastructure needs of commercial, industrial and institutional clients. Everything is designed to the latest codes and safety standards, resulting in electrical systems that are both dependable and adaptable to evolving industry requirements."
        data={electrical}
      />
      <Capabilities
        subHeader="Plumbing"
        description="Our plumbing solutions are designed for easy integration into mechanical and electrical infrastructure to promote seamless coordination across building systems. Arkhos integrated approach not only simplifies construction but optimizes building performance."
        data={plumbing}
      />

      <SectionWrapper header="Project Highlight">
        <ProjectHighlight projectData={projectData} />
      </SectionWrapper>
    </>
  );
};

export default Plumbing;
