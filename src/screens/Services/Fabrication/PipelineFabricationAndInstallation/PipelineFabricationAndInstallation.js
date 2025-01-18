import React from "react";
import HomeImage from "./PipelineFabricationAndInstallationHomeImage/HomeImage";
import Components from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Components";
import classes from "./PipelineFabricationAndInstallation.module.css";
import Button from "../../../../components/Interfaces/Button/Button";
import projectImg1 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/Pipeline Erection & Maintenance.jpeg";
import projectImg2 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/Installation of Pipelines.jpg";
import projectImg3 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/Gas Pipeline Systems.jpg";
import projectImg4 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/Pipeline Maintenance & Upgrades.jpg";
import projectImg5 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/Custom Pipeline Fabrication.jpeg";
import projectImg6 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/Pipeline Testing & Quality Control.jpg";
import projectImg7 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/Emergency Pipeline Repair & Leak Response.jpg";
import projectImg8 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/EnvironmentalSafety.jpg";
// import projectImg9 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/Emergency Pipeline Repair & Leak Response.jpg";
import servicImg from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/PiplineFabricationandInstallationExpertice.jpg";
import operation1 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/operations.png";
import operation2 from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/Img/operation2.jpeg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./PipelineFabricationAndInstallationHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";
import { useState } from "react";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import { BsFire } from "react-icons/bs";
import ClientForm from "../../../../components/ClientForm/ClientForm";
import Reveal from "../../../../components/Motion/Reveal/Reveal";

const OffsureSupply = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  const capabilityItems = [
    "Pipe bending",
    "Pipe reconditioning",
    "Pipe replacement",
    "Decommissioning",
    "Demolition",
    "Pipeline and facility maintenance",
    "ROW clearing and maintenance",
    "ROW clearing and maintenance",
    "Revetment work",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "Pipeline Erection & Maintenance",
      description:
        "Our team offers full-service pipeline erection, from initial fabrication to site installation. With precise planning and state-of-the-art technology, we ensure safe, efficient erection of pipelines to meet project specifications and industry standards. Our maintenance services include regular inspections, integrity assessments, and repairs to prevent downtime and maximize operational efficiency.",
    },
    {
      id: 2,
      img: projectImg2,
      header: "Installation of Pipelines",
      description:
        "We specialize in installing pipelines of various sizes and complexities, tailored to different terrains and environmental conditions. Our installation process includes everything from trenching and welding to coating, testing, and commissioning, ensuring robust and durable connections. Each installation project is handled with strict adherence to safety protocols and regulatory requirements, ensuring reliable service for our clients.",
    },
    {
      id: 3,
      img: projectImg3,
      header: "Gas Pipeline Systems",
      description:
        "For gas pipeline projects, we bring expertise in designing, installing, and maintaining pipelines that can safely and efficiently transport natural gas. Our services cover both high-pressure and low-pressure systems, with specialized coatings and fittings to prevent corrosion and ensure long-lasting performance in various operating conditions.",
    },
    {
      id: 4,
      img: projectImg4,
      header: "Pipeline Maintenance & Upgrades",
      description:
        "To extend the lifespan of existing pipelines, we provide comprehensive maintenance and upgrade services. These include leak detection, corrosion control, structural reinforcements, and system upgrades to meet evolving regulatory and operational standards. Our upgrade services are designed to optimize pipeline performance while minimizing environmental impact and operational downtime.",
    },
    {
      id: 5,
      img: projectImg5,
      header: "Custom Pipeline Fabrication",
      description:
        "Our in-house fabrication facilities allow us to create custom pipelines to meet specific project needs. From prefabricated sections to complex bends and junctions, our team delivers precise and durable pipeline components that enhance installation efficiency and project quality.",
    },
    {
      id: 6,
      img: projectImg6,
      header: "Pipeline Testing & Quality Control",
      description:
        "Ensuring pipeline integrity is crucial to the longevity and safety of any project. We provide hydrostatic testing, X-ray, and ultrasonic inspection services to detect potential weaknesses before a pipeline goes live. Our rigorous quality control protocols guarantee that each pipeline meets industry standards and client expectations. Trenching, Backfilling,",
    },
    {
      id: 7,
      img: projectImg7,
      header: "Emergency Pipeline Repair & Leak Response",
      description:
        "We provide rapid-response repair services for pipeline leaks and damages, helping to minimize environmental and operational impacts. With 24/7 availability, our emergency response team is prepared to address issues swiftly and effectively, restoring full functionality in the shortest possible time.",
    },
    {
      id: 8,
      img: projectImg8,
      header: "Environmental Compliance & Safety",
      description:
        "Our approach to pipeline projects prioritizes environmental protection and safety at every step. We implement robust safety programs, regularly train our crews, and conduct ongoing environmental impact assessments to ensure each project aligns with regulatory standards and best practices.",
    },
  ];

  const serviceDescription = (
    <p>
      Arkhos Oil & Gas ltd is an innovator and leader in mainline cross-regional
      pipeline construction specializing in gas transmission, liquids, and
      products pipelines up to 42” in diameter. Arkhos continues to offer a
      unique and diverse group of services for all your project construction
      requirements. Arkhos has the equipment, manpower, resources, and expertise
      to schedule, manage, and construct pipelines of any size and length in all
      terrains in the country. Arkhos has developed a group of experienced
      industry professionals with each having their own following of craftsmen
      and helpers. Arkhos construction teams are focused on safety, quality, and
      efficiency resulting
    </p>
  );

  const experienceContents = (
    <ul className={classes.ExperienceContents}>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Projects from small replacement to major pipeline installations
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>New installation to 200 mile length; 42” diameter</Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Project management, planning, scheduling, & execution
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Work for most major & independent pipeline operating & transmission
          companies
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Work within the gas transmission, liquids, and products pipeline
          industries
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Work in all terrains; extreme elevation changes, rock, marsh, & swamp
        </Reveal>
      </li>
    </ul>
  );

  const whyArchos = (
    <ul style={{ marginTop: "10px" }} className={classes.ExperienceContents}>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Excellent safety record assures least time lost from injury{" "}
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Planning, scheduling, and execution expertise assuring on-time
          completion{" "}
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Resources; equipment and personnel all with one contract{" "}
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Large geographical footprint for your expansion and maintenance across
          the country companies
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          Unique group of diversified services; one-stop contractor for onshore,
          marine, HDD, and station construction expertise{" "}
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>Arkhos assures your best value </Reveal>
      </li>
    </ul>
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
        header1="Pipeline Construction For Any Terrain"
        header2="Innovative Pipeline Solution, Built For Excellence"
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
        header="Our Experience Include"
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
        header="Why Use Arkhos"
        img={operation2}
        content={whyArchos}
      />
      <SectionWrapper header="Project Highlight">
        <ProjectHighlight projectData={projectData} />
      </SectionWrapper>
    </>
  );
};

export default OffsureSupply;
