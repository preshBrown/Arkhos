import React from "react";
import HomeImage from "./StockPilingHomeImage/HomeImage";
import Components from "./StockPilingHomeImage/ImagesComponents/Components";
import classes from "./StockPiling.module.css";
import Button from "../../../../components/Interfaces/Button/Button";

import projectImg1 from "./StockPilingHomeImage/ImagesComponents/Img/Aggregate Stockpiling for Infrastructure Projects.jpg";
import projectImg2 from "./StockPilingHomeImage/ImagesComponents/Img/Resource Storage for Industrial Facilities.jpg";
import projectImg3 from "./StockPilingHomeImage/ImagesComponents/Img/Automated Stockpile Monitoring.jpg";
import projectImg4 from "./StockPilingHomeImage/ImagesComponents/Img/Stockpiling of Hazardous Materials.jpg";
import projectImg5 from "./StockPilingHomeImage/ImagesComponents/Img/Emergency Deployment for Disaster Recovery.jpg";
import projectImg6 from "./StockPilingHomeImage/ImagesComponents/Img/Sustainable Soil Stockpiling.jpg";
import projectImg7 from "./StockPilingHomeImage/ImagesComponents/Img/Custom Grain Storage Solutions.jpg";
import projectImg8 from "./StockPilingHomeImage/ImagesComponents/Img/Pipeline Material Stockpiling.jpg";
import projectImg9 from "./StockPilingHomeImage/ImagesComponents/Img/Lubricant Reserves.jpg";
import projectImg10 from "./StockPilingHomeImage/ImagesComponents/Img/Marine Equipment Storage.jpg";
import projectImg11 from "./StockPilingHomeImage/ImagesComponents/Img/Industrial Equipment and Tools.jpg";
import projectImg12 from "./StockPilingHomeImage/ImagesComponents/Img/Construction Material Stockpiling.png";

import servicImg from "./StockPilingHomeImage/ImagesComponents/Img/body intro.jpeg";
import operation1 from "./StockPilingHomeImage/ImagesComponents/Img/operation1.jpg";
import operation2 from "./StockPilingHomeImage/ImagesComponents/Img/operation2.jpg";
import operation3 from "./StockPilingHomeImage/ImagesComponents/Img/operation3.jpeg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./StockPilingHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";
import ClientForm from "../../../../components/ClientForm/ClientForm";
import { BsFire } from "react-icons/bs";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import { useState } from "react";
import Reveal from "../../../../components/Motion/Reveal/Reveal";

const OffsureSupply = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  const capabilityItems = [
    "Material Handling and Storage",
    "Bulk Stockpiling of Construction Aggregates",
    "Coal, Iron Ore, and Mineral Stockpiling",
    "Energy Resource Management (Oil, Gas, and Fuels)",
    "Grain and Agricultural Product Storage",
    "Custom-Built Storage Solutions for Hazardous Materials",
    "Environmental Stockpiling for Contaminated Soils",
    "Automated Stockpile Management Systems",
    "Space Optimization and Inventory Planning",
    "Long-Term Preservation of Raw Materials",
    "Safety and Environmental Compliance Monitoring",
    "On-Site Stockpiling for Large-Scale Construction Projects",
    "Loading, Transport, and Distribution Services",
    "Emergency Stockpile Deployment and Restoration",
    "Stockpile Maintenance and Rehabilitation",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "Aggregate Stockpiling for Infrastructure Projects",
      description: (
        <>
          Provided bulk stockpiling and delivery of construction aggregates for
          a major road and bridge project, ensuring uninterrupted supply and
          smooth operations.
        </>
      ),
    },
    // {
    //   id: 2,
    //   img: img,
    //   header: "Refurbishment of Aging Units",
    //   description: (
    //     <>
    //       Successfully refurbished multiple porta cabins for a logistics
    //       company, extending their lifecycle and improving energy efficiency
    //       while minimizing costs.
    //     </>
    //   ),
    // },
    {
      id: 3,
      img: projectImg2,
      header: "Energy Resource Storage for Industrial Facilities",
      description: (
        <>
          Managed on-site stockpiling of diesel and natural gas for a power
          generation plant, optimizing inventory levels to support continuous
          energy production.
        </>
      ),
    },
    {
      id: 4,
      img: projectImg3,
      header: "Automated Stockpile Monitoring",
      description: (
        <>
          Implemented advanced tracking systems for a mining operation, enabling
          real-time data collection, inventory accuracy, and improved
          operational efficiency.
        </>
      ),
    },
    {
      id: 5,
      img: projectImg4,
      header: " Stockpiling of Hazardous Materials ",
      description: (
        <>
          Developed specialized containment solutions for a chemical plant to
          safely stockpile hazardous materials while adhering to strict
          environmental regulations.
        </>
      ),
    },
    {
      id: 6,
      img: projectImg5,
      header: "Emergency Deployment for Disaster Recovery",
      description: (
        <>
          Delivered rapid stockpile management services during a natural
          disaster, providing essential materials and logistical support to
          restore community infrastructure.
        </>
      ),
    },
    {
      id: 7,
      img: projectImg6,
      header: "Sustainable Soil Stockpiling",
      description: (
        <>
          Collaborated on an environmental remediation project by safely
          stockpiling and treating contaminated soils, supporting land
          restoration efforts.
        </>
      ),
    },
    {
      id: 8,
      img: projectImg7,
      header: "Custom Grain Storage Solutions",
      description: (
        <>
          Designed and managed a high-capacity stockpile system for an
          agricultural client, preserving grain quality and reducing losses
          during harvest seasons.
        </>
      ),
    },
    {
      id: 9,
      img: projectImg8,
      header: "Pipeline Material Stockpiling",
      description: (
        <>
          Secure storage and management of pipes, fittings, and other essential
          materials for pipeline construction projects.
        </>
      ),
    },
    {
      id: 10,
      img: projectImg9,
      header: "Diesel and Lubricant Reserves",
      description: (
        <>
          Strategic stockpiling of automotive gas oil (AGO) and lubricants to
          ensure uninterrupted supply for operations.
        </>
      ),
    },
    {
      id: 11,
      img: projectImg10,
      header: "Marine Equipment Storage",
      description: (
        <>
          Specialized storage solutions for marine tools, spare parts, and
          equipment used in offshore and marine services.
        </>
      ),
    },
    {
      id: 12,
      img: projectImg11,
      header: "Industrial Equipment and Tools",
      description: (
        <>
          Stockpiling of critical tools and equipment necessary for efficient
          project execution and maintenance activities.
        </>
      ),
    },
    {
      id: 13,
      img: projectImg12,
      header: "Construction Material Stockpiling",
      description: (
        <>
          Comprehensive storage of materials required for construction projects,
          including steel, sand, and fabricated components.
        </>
      ),
    },
  ];

  const serviceDescription = (
    <p>
      At Arkhos Oil & Gabs, we specialize in providing comprehensive stockpiling
      solutions tailored to the unique needs of diverse industries. Our
      expertise lies in efficiently managing, storing, and maintaining essential
      materials and resources to ensure seamless operations for our clients.
      With a focus on safety, precision, and sustainability, we offer innovative
      stockpiling strategies that optimize space, reduce costs, and enhance
      productivity. Whether for construction, manufacturing, or energy projects,
      our stockpiling services are designed to exceed expectations and deliver
      unmatched reliability.
    </p>
  );

  const experienceContents = (
    <ul className={classes.ExperienceContents}>
      <li className={classes.ExperienceContent}>
        <h4>
          <Reveal cover>Efficiency</Reveal>
        </h4>
        <div>
          <Reveal cover>
            We optimize our stockpiling processes to ensure the right materials
            are always available when needed. By implementing advanced inventory
            management systems, we minimize delays and maximize operational
            efficiency.
          </Reveal>
        </div>
      </li>
      <li className={classes.ExperienceContent}>
        <h4>
          <Reveal cover>Sustainability</Reveal>
        </h4>

        <div>
          <Reveal cover>
            All stockpiled materials undergo rigorous quality checks to ensure
            they meet industry standards. We are committed to delivering
            reliable and high-quality resources for every project.
          </Reveal>
        </div>
      </li>

      <li className={classes.ExperienceContent}>
        <h4>
          <Reveal cover>Quality Assurance</Reveal>
        </h4>
        <div>
          <Reveal cover>
            All stockpiled materials undergo rigorous quality checks to ensure
            they meet industry standards. We are committed to delivering
            reliable and high-quality resources for every project.
          </Reveal>
        </div>
      </li>

      <li className={classes.ExperienceContent}>
        <h4>
          <Reveal cover>Safety and Compliance</Reveal>
        </h4>
        <div>
          <Reveal cover>
            Our stockpiling facilities are managed with strict adherence to
            health, safety, and environmental (HSE) standards. We ensure that
            all operations comply with local and international regulations,
            prioritizing safety for both our team and the community.
          </Reveal>
        </div>
      </li>

      <li className={classes.ExperienceContent}>
        <h4>
          <Reveal cover> Customer-Centric Approach</Reveal>
        </h4>
        <div>
          <Reveal cover>
            We tailor our stockpiling services to meet the specific needs of our
            clients, ensuring flexibility and reliability in every operation.
          </Reveal>
        </div>
      </li>
    </ul>
  );

  const partnerWithUs = (
    <p>
       <Reveal cover>
      By choosing Arkhos for your stockpiling needs, you gain a reliable partner
      dedicated to supporting your operations and ensuring your projects run
      smoothly from start to finish.
       </Reveal>
    </p>
  );

  const whyArchos = (
    <p>
      <Reveal cover>
      At Arkhos Oil & Gas Ltd, our stockpiling operations are backed by
      cutting-edge technology and an experienced team. We strive to exceed
      client expectations by ensuring the availability, quality, and safety of
      all materials in our care.
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
        header1="Leading The Way In Material Handling Solutions "
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
      <ReverseImageSection
        header="Our Core Principles"
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
        header="Commitment to Excellence"
        img={operation2}
        content={whyArchos}
      />

      <ReverseImageSection
        header="Partner with Us"
        img={operation3}
        content={partnerWithUs}
      />

      <SectionWrapper header="Project Highlight">
        <ProjectHighlight projectData={projectData} />
      </SectionWrapper>
    </>
  );
};

export default OffsureSupply;
