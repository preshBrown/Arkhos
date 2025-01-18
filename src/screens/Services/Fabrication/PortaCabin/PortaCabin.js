import React from "react";
import HomeImage from "./PortaCabinHomeImage/HomeImage";
import Components from "./PortaCabinHomeImage/ImagesComponents/Components";
import classes from "./PortaCabin.module.css";
import Button from "../../../../components/Interfaces/Button/Button";

import projectImg1 from "./PortaCabinHomeImage/ImagesComponents/Img/Custom modular.jpg";
import projectImg2 from "./PortaCabinHomeImage/ImagesComponents/Img/Refurbishment of Aging Units.jpg";
import projectImg3 from "./PortaCabinHomeImage/ImagesComponents/Img/Rapid Response for Emergency Housing.jpeg";
import projectImg4 from "./PortaCabinHomeImage/ImagesComponents/Img/Integration of Advanced HVAC Systems.jpg";
import projectImg5 from "./PortaCabinHomeImage/ImagesComponents/Img/On-Site Maintenance and Repairs.jpg";
import projectImg6 from "./PortaCabinHomeImage/ImagesComponents/Img/Electrical and Plumbing Services.jpeg";
import projectImg7 from "./PortaCabinHomeImage/ImagesComponents/Img/Customization and Upgrades.jpg";

import servicImg from "./PortaCabinHomeImage/ImagesComponents/Img/body intro.jpg";
import operation1 from "./PortaCabinHomeImage/ImagesComponents/Img/operation-1.jpg";
import operation2 from "./PortaCabinHomeImage/ImagesComponents/Img/operation-2.jpeg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./PortaCabinHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
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
    "Custom Porta Cabin Fabrication",
    "Temporary and Permanent Accommodation Units",
    "Portable Office Solutions",
    "Modular Storage Facilities",
    "Labor Camps and Worker Housing",
    "Prefabricated Restrooms and Sanitary Units",
    "Educational and Healthcare Units",
    "Portable Cafeterias and Kitchens",
    "Plumbing and Electrical Installations",
    "HVAC System Integration",
    "Routine Maintenance Services",
    "Refurbishment and Upgrades",
    "Transportation and On-Site Installation",
    "Emergency Repairs and Inspection Services",
    "Eco-Friendly and Energy-Efficient Designs",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "Custom Modular Design for Industrial Camps",
      description:
        "Delivered and installed bespoke porta cabins for a large industrial project, providing fully equipped housing and office solutions that enhanced workforce productivity.",
    },
    {
      id: 2,
      img: projectImg2,
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
      img: projectImg3,
      header: "Rapid Response for Emergency Housing",
      description: (
        <>
          Deployed portable accommodations for a disaster relief operation,
          ensuring immediate, secure housing solutions for affected individuals.
        </>
      ),
    },
    {
      id: 4,
      img: projectImg4,
      header: "Integration of Advanced HVAC Systems",
      description: (
        <>
          Installed state-of-the-art climate control systems in porta cabins
          designed for extreme environmental conditions, enhancing user comfort
          and safety.
        </>
      ),
    },
    {
      id: 5,
      img: projectImg5,
      header: "On-Site Maintenance and Repairs",
      description: (
        <>
          Executed a full maintenance schedule for an oilfield company's
          portable facilities, including structural repairs, plumbing fixes, and
          electrical system updates.
        </>
      ),
    },
    {
      id: 6,
      img: projectImg6,
      header: "Electrical and Plumbing Services:",
      description: (
        <>
          Our expert technicians handle all electrical and plumbing
          requirements, ensuring that the cabins are equipped with safe and
          functional systems. From wiring and lighting to plumbing fixtures, we
          ensure seamless operation.
        </>
      ),
    },
    {
      id: 7,
      img: projectImg7,
      header: "Customization and Upgrades:",
      description: (
        <>
          We understand that different clients have unique needs. Whether you
          require interior customization, additional security features, or
          energy-efficient upgrades, we provide tailored solutions to meet your
          specifications.
        </>
      ),
    },
  ];

  const serviceDescription = (
    <p>
      At Arkhos, we specialize in the fabrication and maintenance of
      high-quality porta cabins designed to meet diverse industry requirements.
      Our solutions provide robust, durable, and customizable structures for
      various uses such as offices, accommodations, storage facilities, and
      more. <br /> <br />
      With a focus on innovation and sustainability, we ensure each porta cabin
      is tailored to specific needs while maintaining the highest safety and
      quality standards. Partner with us for cost-effective, efficient, and
      adaptable porta cabin solutions that cater to your operational demands.
    </p>
  );

  const experienceContents = (
    <ul className={classes.ExperienceContents}>
      <p>
        <Reveal cover>
          By focusing on innovative solutions and comprehensive services, Arkhos
          ensures seamless porta cabin fabrication and maintenance tailored to
          meet your unique requirements. Let us help you create portable spaces
          that deliver excellence and efficiency.
        </Reveal>
      </p>

      <li className={classes.ExperienceContent}>
        <h4>
          <Reveal cover>Expertise and Experience:</Reveal>
        </h4>

        <div>
          <Reveal cover>
            With years of experience in the industry, we possess in-depth
            knowledge and expertise, allowing us to deliver high-quality
            maintenance services.
          </Reveal>
        </div>
      </li>
      <li className={classes.ExperienceContent}>
        <h4>
          <Reveal cover>Client-Centric Approach:</Reveal>
        </h4>
        <div>
          <Reveal cover>
          We prioritize customer satisfaction, tailoring our services to meet
          the unique requirements of each client. Our transparent communication
          and responsive approach set us apart.
          </Reveal>
        
        </div>
      </li>

      <li className={classes.ExperienceContent}>
        <h4><Reveal cover>Quality Workmanship:</Reveal>
          </h4>
        <div>
        <Reveal cover>
        Our skilled technicians are trained to deliver superior workmanship,
          ensuring that every maintenance task is completed with precision and
          attention to detail.
          </Reveal>
       
        </div>
      </li>
      <li className={classes.ExperienceContent}>
        <h4>
        <Reveal cover>Sustainability Focus:</Reveal>
          </h4>
        <div>
        <Reveal cover>
        We are committed to sustainable practices. Our maintenance services
          not only enhance the longevity of portable cabins but also promote
          environmental responsibility.
          </Reveal>
          
        </div>
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
      <Reveal cover>
        Arkhos assures your best value{" "}
      </Reveal>
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
        header1="Fabrication of Portable Cabin & Maintenance Services"
        header2="Enhancing Comfort and Sustainability"
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
        header="Why Choose Us?"
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
