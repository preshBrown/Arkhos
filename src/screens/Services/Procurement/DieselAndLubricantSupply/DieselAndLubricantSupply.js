import React from "react";
import HomeImage from "./DLSHomeImage/HomeImage";
import Components from "./DLSHomeImage/ImagesComponents/Components";
import classes from "./DieselAndLubricantSupply.module.css";
import Button from "../../../../components/Interfaces/Button/Button";
import servicImg from "./DLSHomeImage/ImagesComponents/Img/BodyIntro.jpg";
import SectionWrapper, {
  SectionHeader,
} from "../../../../components/SectionWrapper/SectionWrapper";

import projectImg1 from "./DLSHomeImage/ImagesComponents/Img/RegionalDistribution.jpg";
import projectImg2 from "./DLSHomeImage/ImagesComponents/Img/HighqualityLubricantProduct.jpg";
import projectImg3 from "./DLSHomeImage/ImagesComponents/Img/FuelOnDemand.png";
import projectImg4 from "./DLSHomeImage/ImagesComponents/Img/Convenient and Logistical Fuel Storag.jpg";
import projectImg5 from "./DLSHomeImage/ImagesComponents/Img/Highest Quality Products at a Competitive Price.jpg";

import ServiceDescription from "../../ServiceDescription/ServiceDescription";
import Capabilities from "../../../../components/Capabilities/Capabilities";
import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";
import img from "./DLSHomeImage/ImagesComponents/logistics-truck-frachtschiff-3125131-e1591180897636.jpg";
import FilterModal from "../../../ProductsStore/FilterLayout/FilterModal/FilterModal";
import { BsFire } from "react-icons/bs";
import ClientForm from "../../../../components/ClientForm/ClientForm";
import { useState } from "react";

const DieselAndLubricantSupply = () => {
  const [openClientForm, setOpenClientForm] = useState(false);

  const capabilityItems = [
    "Fuels",
    "Diesel Engine Oils",
    "A G O",
    "Natural Gas Engine Oils",
    "Passenger Car Motor Oils",
    "Gear / Differential Oils",
    "Transmission / Dt Oils",
    "Coolants / Chemicals",
    "Circulating Oils",
    "Filters",
  ];

  const projectData = [
    {
      id: 1,
      img: projectImg1,
      header: "REGIONAL DISTRIBUTION",
      description:
        "Our modern delivery equipment and regional distribution centers together empower us to get you the product you need exactly when you need it.",
    },
    {
      id: 2,
      img: projectImg2,
      header: "High Quality Lubricant Products",
      description:
        "A modern lubrication program starts with high-quality products. However, it’s not just about delivering your gear lubes, greases, motor oils, or transmission fluids.  Our team can analyze your oil program and, in addition, provide expertise, equipment, and other services to help extend the life of your equipment.",
    },
    {
      id: 3,
      img: projectImg3,
      header: "Fuel on Demand",
      description:
        "Our trucks deliver fuel on demand to customers requiring either bobtail or full transports across multiple states. We are proud to put the control of time and cost back into the hands of the customers.",
    },
    {
      id: 4,
      img: projectImg4,
      header: "Convenient and Logistical Fuel Storage",
      description:
        "site bulk fuel storage is all about convenience for our customers and logistical control for those who need to save time while monitoring operating expenses.",
    },
    {
      id: 5,
      img: projectImg5,
      header: "Highest Quality Products at a Competitive Price",
      description:
        "Arkhos has been the distributor of choice in the Southwest for decades. We only carry the highest quality products at the most competitive price possible. Our brands themselves are market leaders offering a variety of options and price points",
    },
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
      Arkhos Oil & Gas is a trusted provider of high-quality diesel and
      lubricant products, dedicated to supporting industries with the reliable
      fuel solutions they need to operate at peak performance. Our team combines
      expertise, innovation, and a commitment to excellence to deliver on-site
      fueling, bulk lubricant distribution, and tailored service plans that keep
      your operations running smoothly and efficiently. Whether you require fuel
      for heavy machinery, fleet vehicles, or industrial equipment, our
      solutions ensure optimal performance and minimized downtime. Discover the
      difference with Arkhos Oil & Gas — your partner for dependable, top-tier
      energy solutions
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
        header1="Ready To Deliver"
        header2="Diesel and Lubricant Solutions for Efficient Performance"
      />
      <ServiceDescription
        serviceDescription={serviceDescription}
        img={servicImg}
      />

      <Button
        clicked={() => setOpenClientForm(!openClientForm)}
        className={classes.DlsBtn}
      >
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

export default DieselAndLubricantSupply;
