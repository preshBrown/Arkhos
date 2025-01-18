import React from "react";
import HomeImage from "./ConstructionAndFabricationHomeImage/HomeImage";
import Components from "./ConstructionAndFabricationHomeImage/ImagesComponents/Components";
import classes from "./ConstructionAndFabrication.module.css";
import Button from "../../../../components/Interfaces/Button/Button";

import projectImg1 from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/Custom Fabrication for Unique Pipeline Needs.jpeg";
import projectImg2 from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/Structural Steel Fabrication & Installation.jpg";
import projectImg3 from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/Skid fabrication.jpg";
import projectImg4 from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/automated welding precision.jpg";
import projectImg5 from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/Environmental Impact Mitigation.jpeg";
import projectImg6 from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/Non-Destructive Testing.png";
import projectImg7 from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/High-Pressure Testing and Certification.jpeg";
import projectImg8 from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/Emergency Repair & Response Services.jpg";
import projectImg9 from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/Safety & Compliance as a Priority.png";


import servicImg from "./ConstructionAndFabricationHomeImage/ImagesComponents/Img/bodyIntro.jpg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./ConstructionAndFabricationHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import { useState } from "react";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import { BsFire } from "react-icons/bs";
import ClientForm from "../../../../components/ClientForm/ClientForm";

const OffsureSupply = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  const capabilityItems = [
    "Custom Pipeline Fabrication",
    "Pipeline Erection & Installation",
    "Gas Pipeline Systems",
    "On-Site Construction Services",
    "Pipeline Upgrades & Maintenance",
    "Specialized Coating & Corrosion Protection",
    "Structural Steel Fabrication",
    "Trenching & Backfilling Services",
    "Welding & Joint Integrity",
    "Hydrostatic & Integrity Testing",
    "Pipeline Rehabilitation & Reinforcement",
    "Environmental Management & Compliance",
    "Quality Control & Assurance",
    "Emergency Repair & Response Services",
    "Mobile Fabrication Units",
    "Modular Skid Fabrication",
    "Non-Destructive Testing (NDT)",
    "Temporary and Permanent Pipeline Support",
    "Civil Works for Pipeline Foundations",
    "Heavy Equipment & Material Handling",
    "Project Planning & Engineering Support",
    "Automated Welding Systems",
    "Safety Training & Compliance Programs",

  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "Custom Fabrication for Unique Pipeline Needs",
      description:"Our team specializes in creating customized solutions for complex pipeline layouts and configurations. With advanced fabrication techniques and rigorous quality control, we deliver custom pipeline components that integrate seamlessly and perform reliably."
    },
    {
      id: 2,
      img: projectImg2,
      header: "Structural Steel Fabrication & Installation",
      description:"We provide custom-fabricated structural supports and foundations that ensure pipelines remain stable and secure in high-stress areas. Our team coordinates on-site installations, ensuring structural reliability that meets the demands of heavy-duty pipeline applications."
    },
    {
      id: 3,
      img: projectImg3,
      header: "Modular Skid Fabrication",
      description:"Our modular skids are designed for quick installation and flexibility in complex pipeline systems. These pre-fabricated modules enable faster deployment and reduce the on-site labor requirements, saving time and costs on large-scale projects."
    },
    {
      id: 4,
      img: projectImg4,
      header: "Automated Welding Precision",
      description:"Using automated welding systems, we enhance weld quality and consistency, particularly for long pipeline stretches. This method minimizes"
    },
    {
      id: 5,
      img: projectImg5,
      header: "Environmental Impact Mitigation",
      description:"With a focus on sustainability, we implement environmentally-conscious practices throughout our projects, such as controlled trenching and restoration of vegetation. Our environmental management efforts reduce the footprint of each project and support client goals for sustainability."
    },
    {
      id: 6,
      img: projectImg6,
      header: "Non-Destructive Testing (NDT) for Integrity Assurance",
      description:"We conduct thorough non-destructive testing throughout each project phase to verify pipeline integrity without compromising structural strength. This proactive approach identifies potential issues early, ensuring a safe and efficient pipeline operation."
    },
    {
      id: 7,
      img: projectImg7,
      header: "High-Pressure Testing and Certification",
      description:"Our pipelines undergo rigorous hydrostatic and pressure testing to confirm their readiness for high-stress conditions. Each test is meticulously documented to provide clients with assurance that their pipeline systems are safe and compliant."
    },
    // {
    //   id: 8,
    //   img: img,
    //   header: "Rapid Emergency Response Services",
    //   description:"In cases of unexpected pipeline damage, our emergency response team is on standby for rapid mobilization. With a focus on quick, safe repair,"
    // },
    // {
    //   id: 9,
    //   img: img,
    //   header: "Environmentally-Conscious Construction",
    //   description:"We are committed to sustainable practices in pipeline construction. Our environmental management protocols reduce impact during installation and construction, ensuring that local ecosystems are preserved while meeting project goals."
    // },
    {
      id: 10,
      img: projectImg8,
      header: "Emergency Repair & Response Services",
      description:"Our 24/7 emergency response team is ready to address pipeline issues swiftly and safely, with rapid mobilization to repair"
    },
    {
      id: 11,
      img: projectImg9,
      header: "Safety & Compliance as a Priority",
      description:"Safety is at the core of our fabrication and construction services. Through regular training, strict safety protocols, and compliance with industry regulations, Arkhos delivers reliable pipeline solutions that protect both people and the environment."
    },
  ];

  const serviceDescription = (
    <p>
      At Arkhos Oil & Gas, we specialize in delivering comprehensive fabrication
      and construction services tailored to meet the specific needs of pipeline
      infrastructure projects. Our expertise spans from customized pipeline
      fabrication to complete construction solutions that ensure efficient,
      safe, and reliable pipeline performance. With a strong focus on quality
      and safety, we combine advanced technology with experienced professionals
      to provide seamless project execution across various pipeline
      applications. Whether it’s for cross-regional pipelines, industrial
      facilities, or natural gas transport, Arkhos is dedicated to providing
      high-quality pipeline systems that meet industry standards and exceed
      client expectations.
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
        header1="Your Vision, Our Fabrication Mastery"
        header2="Turning ideas into Structures with Precision and care"
      />
      <ServiceDescription
        serviceDescription={serviceDescription}
        img={servicImg}
      />

      <Button
              clicked={() => setOpenClientForm(!openClientForm)}
              className={classes.OffsureSupplyBtn}>
        Click Here To Start A Convasation
      </Button>

      <Capabilities
        header="Capability"
        // subHeader="Mechanical"
        // description="Whether new construction, renovations or retrofits, Arkhos mechanical engineering capabilities are tailored to meet today’s complex building requirements. Our team applies proven engineering methods to design mechanical systems that optimize performance, minimize operational costs and align with energy and sustainability goals."
        data={capabilityItems}
      />

      <SectionWrapper header="Project Highlight">
        <ProjectHighlight projectData={projectData} />
      </SectionWrapper>
    </>
  );
};

export default OffsureSupply;
