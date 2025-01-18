import React from "react";

import img from "../DigImages/AI.jpg";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import classes from "./AI.module.css";

export const dropdownContent = [
  {
    id: 1,
    header: "Exploration and Drilling Optimization",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "AI systems, such as neural networks analyze geological data to predict optimal drilling locations, reducing exploration risks and costs",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "AI-powered models optimize drilling operations by predicting equipment performance, identifying potential issues in real-time (e.g., vibrations or torque limits), and improving well cleaning processes",
      },
    ],
  },
  {
    id: 2,
    header: "Predictive Maintenance",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "AI process data from equipment sensors to detect patterns signaling potential failures. This enables timely maintenance, preventing costly breakdowns and extending equipment lifespans",
      },
    ],
  },
  {
    id: 3,
    header: "Supply Chain and Logistics",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "AI-driven tools enhance supply chain efficiency by forecasting demand, optimizing procurement, and monitoring logistics, ensuring cost-effective operations",
      },
    ],
  },
  {
    id: 4,
    header: "Operational and Cost Efficiency",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "AI can automate repetitive financial tasks such as cost allocation and cash flow analysis, freeing up human resources for strategic decision-making",
      },
      {
        id: 2,
        subHeader: "",
        description:"Smart algorithms also help reduce energy consumption during refining and other processes, lowering operational costs"
      },
    ],
  },
  {
    id: 5,
    header: "Workforce and Talent Management",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"Machine learning algorithms streamline recruitment by analyzing resumes and conducting preliminary interviews, reducing HR workload."
      },
    ],
  },
  {
    id: 6,
    header: "Real-Time Decision-Making",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"By leveraging vast datasets, AI deliver actionable insights to improve decision-making, whether it’s adjusting drilling parameters, optimizing refining processes, or managing resource allocation"
      },
    ],
  },
];

const AI = () => {
  return (
 
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="AI"
        contents="Artificial Intelligence (AI) has vast potential applications in the oil and gas industry, particularly for a company like Arkhos Oil and Gas Limited."
        img={img}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default AI;
