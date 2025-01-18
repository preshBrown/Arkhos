import React from "react";
import HomeImage from "./StockPilingHomeImage/HomeImage";
import Components from "./StockPilingHomeImage/ImagesComponents/Components";
import classes from "./StockPiling.module.css";
import Button from "../../../../components/Interfaces/Button/Button";
import servicImg from "./StockPilingHomeImage/ImagesComponents/Img/IMG-20220629-WA0001.jpg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./StockPilingHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";

const OffsureSupply = () => {
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
      img: img,
      header: "Aggregate Stockpiling for Infrastructure Projects",
      description: (
        <>
          Provided bulk stockpiling and delivery of construction aggregates for
          a major road and bridge project, ensuring uninterrupted supply and
          smooth operations.
        </>
      ),
    },
    {
      id: 2,
      img: img,
      header: "Refurbishment of Aging Units",
      description: (
        <>
          Successfully refurbished multiple porta cabins for a logistics
          company, extending their lifecycle and improving energy efficiency
          while minimizing costs.
        </>
      ),
    },
    {
      id: 3,
      img: img,
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
      img: img,
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
      img: img,
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
      img: img,
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
      img: img,
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
      img: img,
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
      img: img,
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
      img: img,
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
      img: img,
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
      img: img,
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
      img: img,
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
      At Arkhos Oil & Gas Ltd, our stockpiling operations are backed by
      cutting-edge technology and an experienced team. We strive to exceed
      client expectations by ensuring the availability, quality, and safety of
      all materials in our care.
    </p>
  );

  return (
    <>
      <HomeImage images={Components} />

      <SectionHeader
        header1="Leading The Way In Material Handling Solutions "
        header2=""
      />
      <ServiceDescription
        serviceDescription={serviceDescription}
        img={servicImg}
      />

      <Button className={classes.OffsureSupplyBtn}>
        Click Here To Start A Convasation
      </Button>
      <ReverseImageSection
        header="Our Core Principles"
        img={servicImg}
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
        img={servicImg}
        content={whyArchos}
      />

      <ReverseImageSection
        header="Partner with Us"
        img={servicImg}
        content={partnerWithUs}
      />

      <SectionWrapper header="Project Highlight">
        <ProjectHighlight projectData={projectData} />
      </SectionWrapper>
    </>
  );
};

export default OffsureSupply;
