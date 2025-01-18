import React from "react";
import HomeImage from "./PlatformSupplyVesselsHomeImage/HomeImage";
import Components from "./PlatformSupplyVesselsHomeImage/ImagesComponents/Components";
import classes from "./PlatformSupplyVessels.module.css";
import Button from "../../../../components/Interfaces/Button/Button";

import projectImg1 from "./PlatformSupplyVesselsHomeImage/ImagesComponents/Img/Offshore Drilling Support Operations.jpg";
import projectImg2 from "./PlatformSupplyVesselsHomeImage/ImagesComponents/Img/Emergency Response Missions.jpg";
import projectImg3 from "./PlatformSupplyVesselsHomeImage/ImagesComponents/Img/Multi-Purpose Vessel Operations.jpg";
import projectImg4 from "./PlatformSupplyVesselsHomeImage/ImagesComponents/Img/Heavy Equipment Transport.jpg";
import projectImg5 from "./PlatformSupplyVesselsHomeImage/ImagesComponents/Img/Remote Platform Resupply.jpg";
import projectImg6 from "./PlatformSupplyVesselsHomeImage/ImagesComponents/Img/Custom Vessel Modifications.jpg";

import operation1 from "./PlatformSupplyVesselsHomeImage/ImagesComponents/Img/operation1.jpg";

import servicImg from "./PlatformSupplyVesselsHomeImage/ImagesComponents/Img/body inro.jpg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./PlatformSupplyVesselsHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";
import { useState } from "react";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import ClientForm from "../../../../components/ClientForm/ClientForm";
import { BsFire } from "react-icons/bs";
import Reveal from "../../../../components/Motion/Reveal/Reveal";

const PlatformSupplyVessels = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  const capabilityItems = [
    "Transportation of Drilling Fluids and Materials",
    "Supply of Bulk Cement and Mud Materials",
    "Fuel and Freshwater Delivery",
    "Offshore Waste Collection and Disposal",
    "Deck Cargo Transport for Heavy Equipment",
    "Specialized Cargo Handling Systems",
    "Crew Transfer and Accommodation Services",
    "Dynamic Positioning Systems (DP1 & DP2)",
    "Standby and Emergency Response Support",
    "Environmental Spill Response and Recovery",
    "Custom Vessel Modifications for Specialized Missions",
    "Night-Time and Adverse Weather Operations",
    "Shore Base Logistics and Coordination Support",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "Offshore Drilling Support Operations",
      description: (
        <>
          Deployed PSVs equipped with advanced dynamic positioning systems to
          ensure safe and efficient delivery of drilling materials, including
          mud, cement, and chemicals, to offshore platforms.
        </>
      ),
    },
    {
      id: 2,
      img: projectImg2,
      header: "Emergency Response Missions",
      description: (
        <>
          Provided immediate response and recovery services during an offshore
          spill, minimizing environmental damage and ensuring rapid restoration
          of operations.
        </>
      ),
    },
    {
      id: 3,
      img: projectImg3,
      header: "Multi-Purpose Vessel Operations",
      description: (
        <>
          Integrated cargo transport, crew transfer, and accommodation services
          in a single mission to support a major offshore exploration project,
          optimizing time and resources.
        </>
      ),
    },
    {
      id: 4,
      img: projectImg4,
      header: "Heavy Equipment Transport",
      description: (
        <>
          Executed the safe and timely delivery of large-scale offshore
          equipment, including subsea structures and machinery, to remote
          drilling locations.
        </>
      ),
    },
    {
      id: 5,
      img: projectImg5,
      header: " Remote Platform Resupply ",
      description: (
        <>
          Designed and executed specialized logistical plans for resupplying
          remote offshore platforms, ensuring uninterrupted operations despite
          challenging weather conditions.
        </>
      ),
    },
    {
      id: 6,
      img: projectImg6,
      header: "Custom Vessel Modifications",
      description: (
        <>
          Enhanced vessel capabilities with customized features to support
          unique client requirements, such as specialized tanks for hazardous
          material transport.
        </>
      ),
    },
  ];

  const serviceDescription = (
    <p>
      At Arkhos Oil & Gas, we specialize in delivering comprehensive Platform
      Supply Vessel (PSV) services tailored to the demanding needs of offshore
      energy operations. Our fleet of modern, high-capacity vessels is designed
      to provide efficient and reliable transport of essential equipment,
      supplies, and personnel to offshore platforms. By prioritizing safety,
      environmental sustainability, and operational excellence, we ensure that
      our clients’ offshore projects run smoothly and effectively, even in the
      most challenging marine environments.
    </p>
  );

  // const experienceContents = (
  //   <ul className={classes.ExperienceContents}>
  //     <li className={classes.ExperienceContent}>
  //       <h4>Efficiency</h4>
  //       <div>
  //         We optimize our stockpiling processes to ensure the right materials
  //         are always available when needed. By implementing advanced inventory
  //         management systems, we minimize delays and maximize operational
  //         efficiency.
  //       </div>
  //     </li>
  //     <li className={classes.ExperienceContent}>
  //       <h4> Sustainability</h4>
  //       <div>
  //         All stockpiled materials undergo rigorous quality checks to ensure
  //         they meet industry standards. We are committed to delivering reliable
  //         and high-quality resources for every project.
  //       </div>
  //     </li>
  //     <li className={classes.ExperienceContent}>
  //       <h4>Quality Assurance</h4>
  //       <div>
  //         All stockpiled materials undergo rigorous quality checks to ensure
  //         they meet industry standards. We are committed to delivering reliable
  //         and high-quality resources for every project.
  //       </div>
  //     </li>
  //     <li className={classes.ExperienceContent}>
  //       <h4>Safety and Compliance</h4>
  //       <div>
  //         Our stockpiling facilities are managed with strict adherence to
  //         health, safety, and environmental (HSE) standards. We ensure that all
  //         operations comply with local and international regulations,
  //         prioritizing safety for both our team and the community.
  //       </div>
  //     </li>
  //     <li className={classes.ExperienceContent}>
  //       <h4>Customer-Centric Approach</h4>
  //       <div>
  //         We tailor our stockpiling services to meet the specific needs of our
  //         clients, ensuring flexibility and reliability in every operation.
  //       </div>
  //     </li>
  //   </ul>
  // );

  // const partnerWithUs = (
  //   <p>
  //     By choosing Arkhos for your stockpiling needs, you gain a reliable partner
  //     dedicated to supporting your operations and ensuring your projects run
  //     smoothly from start to finish.
  //   </p>
  // );

  const whyArchos = (
    <p>
      <Reveal cover>
        
      With a commitment to excellence, safety, and innovation, Arkhos Oil & Gas
      Ltd is your trusted partner for reliable Platform Supply Vessel services
      that drive the success of your offshore operations.
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
        header1="Platforms, Elevating Operations"
        header2=""
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
        header=""
        img={servicImg}
        content={partnerWithUs}
      /> */}

      <SectionWrapper header="Project Highlight">
        <ProjectHighlight projectData={projectData} />
      </SectionWrapper>
    </>
  );
};

export default PlatformSupplyVessels;
