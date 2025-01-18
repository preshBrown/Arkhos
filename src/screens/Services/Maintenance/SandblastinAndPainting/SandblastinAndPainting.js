import React from "react";
import HomeImage from "./SandblastinAndPaintingHomeImage/HomeImage";
import Components from "./SandblastinAndPaintingHomeImage/ImagesComponents/Components";
import classes from "./SandblastinAndPainting.module.css";
import Button from "../../../../components/Interfaces/Button/Button";

import projectImg1 from "./SandblastinAndPaintingHomeImage/ImagesComponents/Img/pipline restoration and coating.jpg";
import projectImg2 from "./SandblastinAndPaintingHomeImage/ImagesComponents/Img/marine vessel maintenance.jpg";
import projectImg3 from "./SandblastinAndPaintingHomeImage/ImagesComponents/Img/Industrial tanks refurbishments.jpeg";
import projectImg4 from "./SandblastinAndPaintingHomeImage/ImagesComponents/Img/Structural steel coating.jpg";
import projectImg5 from "./SandblastinAndPaintingHomeImage/ImagesComponents/Img/onsite equipment painting.jpg";
import projectImg6 from "./SandblastinAndPaintingHomeImage/ImagesComponents/Img/storage tank restoration.jpeg";
// import projectImg7 from "./SandblastinAndPaintingHomeImage/ImagesComponents/Img/Customization and Upgrades.jpg";

import operation1 from "./SandblastinAndPaintingHomeImage/ImagesComponents/Img/operation-1.png";

import servicImg from "./SandblastinAndPaintingHomeImage/ImagesComponents/Img/body -intro.jpg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./SandblastinAndPaintingHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";
import ClientForm from "../../../../components/ClientForm/ClientForm";
import { BsFire } from "react-icons/bs";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import { useState } from "react";
import Reveal from "../../../../components/Motion/Reveal/Reveal";

const SandblastinAndPainting = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  const capabilityItems = [
    "Abrasive blasting to remove rust, paint, and contaminants",
    "Precise surface profiling for optimal adhesion of coatings",
    "Wet and dry blasting techniques to suit environmental conditions",
    "High-performance industrial paint systems for corrosion resistance",
    "Epoxy and polyurethane coatings for extreme durability",
    "Fireproof and heat-resistant coatings for safety-critical environments",
    "Pipeline sandblasting and coating",
    "Marine vessel painting, including hulls and decks",
    "Storage tank preparation and lining",
    "Structural steel painting for construction projects",
    "Tailored paint systems to meet project specifications",
    "Mobile and on-site services for convenience and efficiency",
    "Environmentally friendly practices using eco-compliant materials",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "Pipeline Restoration and Coating",
      description: (
        <>
          Completed sandblasting and application of corrosion-resistant coatings
          on pipelines for an oil and gas facility, ensuring durability and
          compliance with industry standards.
        </>
      ),
    },
    {
      id: 2,
      img: projectImg2,
      header: "Marine Vessel Maintenance",
      description: (
        <>
          Delivered sandblasting and repainting services for a fleet of offshore
          vessels, enhancing performance, fuel efficiency, and longevity in
          harsh marine conditions.
        </>
      ),
    },
    {
      id: 3,
      img: projectImg3,
      header: "Industrial Tank Refurbishment",
      description: (
        <>
          Executed internal and external sandblasting and painting of storage
          tanks, ensuring long-term protection against corrosion and chemical
          exposure.
        </>
      ),
    },
    {
      id: 4,
      img: projectImg4,
      header: "Structural Steel Coating",
      description: (
        <>
          Prepared and coated steel structures for a large-scale construction
          project, providing a durable, visually appealing finish that
          withstands environmental stressors.
        </>
      ),
    },
    {
      id: 5,
      img: projectImg5,
      header: " On-Site Equipment Painting ",
      description: (
        <>
          Provided sandblasting and painting services for heavy machinery,
          extending operational life and maintaining a professional appearance.
        </>
      ),
    },
    {
      id: 6,
      img: projectImg6,
      header: " Storage Tank Restoration",
      description: (
        <>
          Completed internal and external sandblasting of large storage tanks to
          remove residues, rust, and contaminants, ensuring compliance with
          industry standards.
        </>
      ),
    },
  ];

  const serviceDescription = (
    <p>
      At Arkhos Oil & Gas Ltd, we specialize in comprehensive sandblasting and
      painting solutions designed to protect and enhance the longevity of
      industrial equipment, structures, and surfaces. Our services are tailored
      to meet the unique demands of each project, delivering exceptional surface
      preparation, corrosion resistance, and aesthetically superior finishes.
      With a focus on quality, safety, and efficiency, our experienced team is
      equipped to handle diverse projects across industries.
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
    <ul className={classes.ExperienceContents}>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          <h4>Advanced Equipment:</h4>
          <div>
            State-of-the-art sandblasting and painting tools for precision and
            efficiency.
          </div>
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          <h4> Certified Team:</h4>
          <div>
            Skilled professionals trained in the latest techniques and safety
            protocols.{" "}
          </div>
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          <h4>Customized Solutions: </h4>
          <div>
            Services tailored to specific operational and aesthetic
            requirements.
          </div>
        </Reveal>
      </li>
      <li className={classes.ExperienceContent}>
        <Reveal cover>
          <h4>Eco-Friendly Practices:</h4>
          <div>Commitment to environmentally safe materials and methods.</div>
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
        header1="From Corrosion to Perfection – We’ve Got You Covered "
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
        header="Why Choose Us?"
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

export default SandblastinAndPainting;
