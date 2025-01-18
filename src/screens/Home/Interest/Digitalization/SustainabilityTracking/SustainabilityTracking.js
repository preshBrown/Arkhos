import React from "react";

import img from "../DigImages/Sustainablity tracking.jpg";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import classes from "./SustainabilityTracking.module.css";

export const dropdownContent = [
  {
    id: 1,
    header: "Emission Monitoring",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Advanced sensors track greenhouse gas emissions (CO2 and methane), flaring, and venting",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "Companies use tools like satellite imaging, drones, and IoT devices to detect leaks and measure emission intensity",
      },
    ],
  },
  {
    id: 2,
    header: "Energy Usage Optimization",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Monitoring energy consumption in extraction, production, and distribution phases helps reduce waste.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "Integration with renewable energy sources further supports sustainability goals.",
      },
    ],
  },
  {
    id: 3,
    header: "Lifecycle Analysis",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Digital tools provide insights into the environmental impact of operations from resource extraction to final use.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "Helps identify opportunities to improve efficiency and reduce the carbon footprint.",
      },
    ],
  },
  {
    id: 4,
    header: "Compliance and Reporting",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"Sustainability tracking systems align operations with frameworks like the Global Reporting Initiative (GRI) and Science-Based Targets initiative (SBTi)."
      },
      {
        id: 2,
        subHeader: "",
        description:"These systems provide accurate data for Environmental, Social, and Governance (ESG) reports"
      },
    ],
  },
];

const SustainabilityTracking = () => {
  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Sustainability Tracking"
        contents="Sustainability tracking focuses on monitoring and managing the environmental impact of operations, ensuring compliance with global standards, and promoting sustainable practices."
        img={img}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default SustainabilityTracking;
