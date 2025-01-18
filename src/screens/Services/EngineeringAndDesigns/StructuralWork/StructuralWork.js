import React, { useState } from "react";
import HomeImage from "./StructuralWorkHomeImage/HomeImage";
import Button from "../../../../components/Interfaces/Button/Button";
import Components from "./StructuralWorkHomeImage/ImagesComponents/Components";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import classes from "./StructuralWork.module.css";
import projectImg1 from "./StructuralWorkHomeImage/ImagesComponents/Img/ProjectH-1.jpeg";
import projectImg2 from "./StructuralWorkHomeImage/ImagesComponents/Img/ProjectH-2.jpg";
import projectImg3 from "./StructuralWorkHomeImage/ImagesComponents/Img/projectH-3.jpg";
import projectImg4 from "./StructuralWorkHomeImage/ImagesComponents/Img/projectH-4.jpeg";
import servicImg from "./StructuralWorkHomeImage/ImagesComponents/Img/body-Intro-2.jpg";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import ClientForm from "../../../../components/ClientForm/ClientForm";
import { BsFire } from "react-icons/bs";
import Staggered from "../../../../components/Motion/Staggered/Staggered";

const StructuralWork = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  
  const data = [
    "Buildings",
    "Constructor services",
    "Culverts",
    "Pedestrian Bridges",
    "Special Bridges",
    "SpecialStructures",
    "Tanks",
    "Tunnels",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "Walking Bridge Replacement ",
      description:
        " Arkhos provided damage investigation, claim support, design, permitting, material procurement, and engineering support services during the construction of a approximately 104 FT span walking bridge to replace a pile bent supported walkway that was damaged by an aberrant barge at this petroleum facility.",
    },
    {
      id: 2,
      img: projectImg2,
      header: "Sewer Design Improvements",
      description:
        "Design engineering services for sewer improvement projects. Work includes data collec-tion and initial assessments, coordination of survey and geotechnical engineering, utility coordination, sewer align-ments and profiles, structural design, compliance with IEPA water sewer separation requirements, cross sec-tions/typical sections, traffic control and detours, surface drainage design, OUC submittals and approvals, and permitting. ",
    },
    // {
    //   id: 3,
    //   img: img,
    //   header: "Confidential Filter Infrastructure",
    //   description:
    //     " Arkhos provided the concrete slabs, foundations, and anchor designs for new infrastructure for the expansion of the Hydromet area to allow the SX/EW facili-ties to handle increased throughput. This work included the structural design and drawings, identifying civil components such as tops of concrete on footings and slabs, ensuring drainage to the existing drain sump and the addition of a contain-ment curb to improve capture of spills.",
    // },
    {
      id: 4,
      img: projectImg3,
      header: "Four Roses Bourbon Distillery",
      description:
        "Arkhos provided 3-D laser scanning, planning and zoning expertise, landscape architecture, survey, site civil engineering, structural engineering and comprehensive construction administration/observation services.",
    },
    {
      id: 5,
      img: projectImg4,
      header: "Structural Engineering Services for 7 Structures",
      description:
        "Phase I and Phase II included engineering design services for the repair and maintenance of seven separate structures. Work included the determination of appropriate repair and maintenance activities for each structure based on recent Bridge Condition Reports, discussions with KDOT staff, and other improvements determined during Phase II engineering.",
    },
  ];
  const serviceDescription = (
    <p>
      While civil engineering focuses on designing the world around us,
      structural engineering plays a crucial role in crafting the ‘bones and
      muscles’ of structures, defining their shape and form. This specialized
      field ensures that structures are robust enough to bear their intended
      loads, making it an indispensable component of many civil engineering
      projects. <br /> <br /> At Arkhos, we offer a comprehensive range of
      structural engineering services, covering every phase from conceptual
      design to construction administration and project management. Our in-house
      structural engineers collaborate closely with designers, planners, and
      other engineers to deliver fully integrated solutions across diverse
      project types. Whether it's transportation infrastructure, parks,
      recreation facilities, commercial and residential buildings, or wastewater
      systems, our team of over 500 professionals is dedicated to exceeding
      expectations. We strive to provide peace of mind to our clients by
      delivering exceptional service and efficient, streamlined results.{" "}
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

      <SectionHeader
        header1="Structural Engineering"
        header2="Shaping The Built Environment"
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

      <SectionWrapper
        className={classes.CapabilitiesSection}
        header="Capabilities"
      >
        <ul className={classes.Capabilities}>
          {data.map((items, index) => (
            <Staggered index={index} key={items} className={classes.CapabilitiesItem}>
              {items}
            </Staggered>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper header="Project Highlight">
        <ProjectHighlight projectData={projectData} />
      </SectionWrapper>
    </>
  );
};

export default StructuralWork;
