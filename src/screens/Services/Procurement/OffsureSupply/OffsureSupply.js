import React from "react";
import HomeImage from "./OffsureSupplyHomeImage/HomeImage";
import Components from "./OffsureSupplyHomeImage/ImagesComponents/Components";
import classes from "./OffsureSupply.module.css";
import Button from "../../../../components/Interfaces/Button/Button";
import projectImg1 from "./OffsureSupplyHomeImage/ImagesComponents/Img/ondemandFueling.jpg";
import projectImg2 from "./OffsureSupplyHomeImage/ImagesComponents/Img/Streamlined Offshore Storage Solutions.jpg";
import projectImg3 from "./OffsureSupplyHomeImage/ImagesComponents/Img/Exceptional Quality at Competitive Rates.jpg";
import projectImg4 from "./OffsureSupplyHomeImage/ImagesComponents/Img/Regional Supply and Distribution.jpg";
// import projectImg5 from "./OffsureSupplyHomeImage/ImagesComponents/Img/Highest Quality Products at a Competitive Price.jpg";
import servicImg from "./OffsureSupplyHomeImage/ImagesComponents/Img/bodyintro3.jpg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";
import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./OffsureSupplyHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import { useState } from "react";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import { BsFire } from "react-icons/bs";
import ClientForm from "../../../../components/ClientForm/ClientForm";

const OffsureSupply = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  const capabilityItems = [
    "Fuel Supply",
    "Lubricants",
    "Marine & Industrial Chemicals",
    "Specialized Equipment & Materials",
    "Logistical Support",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "On-Demand Fueling",
      description:
        "With an agile fleet and strategically located distribution points, we provide on-demand fuel deliveries, tailored to match the scale and urgency of your operations. Whether full transport or small-scale deliveries, we put control back into your hands with responsive and cost-effective fueling solutions",
    },
    {
      id: 2,
      img: projectImg2,
      header: "Streamlined Offshore Storage Solutions ",
      description:
        "Our on-site storage options offer convenient bulk fuel storage, giving our clients enhanced logistical control and reducing the time needed for resupply, while providing consistent monitoring of operating expenses.",
    },
    {
      id: 3,
      img: projectImg3,
      header: "Exceptional Quality at Competitive Rates",
      description:
        "Arkhos Oil & Gas is the partner of choice for offshore supply in the region, offering a wide range of high-quality products at competitive prices. Our selection of market-leading brands provides reliable options that fit various needs and budgets.",
    },
    {
      id: 4,
      img: projectImg4,
      header: "Regional Supply and Distribution",
      description:
        "With state-of-the-art delivery equipment and regional distribution centers, we ensure timely and accurate deliveries directly to offshore sites, empowering your operations with the supplies they need exactly when needed.",
    },
    // {
    //   id: 5,
    //   img: img,
    //   header: "Highest Quality Products at a Competitive Price",
    //   description:
    //     "Arkhos has been the distributor of choice in the Southwest for decades. We only carry the highest quality products at the most competitive price possible. Our brands themselves are market leaders offering a variety of options and price points",
    // },
    // {
    //   id: 6,
    //   img: img,
    //   header: "Structural Engineering Services for 7 Structures",
    //   description:
    //     "A new elementary with student capacity of 636. The team provided mechanical, plumbing and fire protection design. The scope included all new HVAC system, nine variable refrigerant systems and three single zone VAV rooftop units.",
    // },
  ];

  const serviceDescription = (
    <p>
      At Arkhos Oil & Gas, we specialize in delivering comprehensive offshore
      supply solutions designed to support the demanding needs of offshore
      operations. Our services include the provision of essential equipment,
      materials, and fuel, with a focus on quality, safety, and reliability. We
      understand the unique challenges of offshore environments and are
      committed to providing timely, efficient deliveries to minimize downtime
      and keep your operations productive. Partner with us to ensure seamless
      access to the supplies you need, whether for energy production, marine
      vessels, or specialized offshore projects—Arkhos Oil & Gas is here to
      power your success, offshore and beyond.
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
        header1="Ready To Deliver"
        header2="Reliable Offshore Supply Services for Uninterrupted Operations "
      />
      <ServiceDescription
        serviceDescription={serviceDescription}
        img={servicImg}
      />

      <Button         clicked={() => setOpenClientForm(!openClientForm)}
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
