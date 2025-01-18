import React from "react";

import img from "../DigImages/IOT.jpeg";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import classes from "./AutomationAndIoT.module.css";

export const dropdownContent = [
  {
    id: 1,
    header: "Automation",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"Automated systems improve the accuracy and efficiency of critical processes like drilling and refining. For instance, robotic systems like Houston Mechatronics’ Aquanaut perform underwater inspections and maintenance tasks, significantly reducing costs and risks associated with human divers."
      },
      {
        id: 2,
        subHeader: "",
        description:"Advanced algorithms analyze data from equipment to predict maintenance needs, reducing downtime and extending the life of machinery"
      },
    ],
  },
  {
    id: 2,
    header: "IoT",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"IoT sensors collect and analyze data on equipment conditions, such as pressure, temperature, and vibration, allowing companies to identify issues before they escalate. This helps ensure seamless operations and improves equipment lifespan."
      },
      {
        id: 2,
        subHeader: "",
        description:"These are virtual replicas of physical assets that provide real-time insights. For example, a digital twin of a pipeline can detect leaks or inefficiencies, enabling swift corrective actions"
      },
      {
        id: 3,
        subHeader: "",
        description:"IoT enables remote monitoring of hazardous sites, reducing the need for human presence in risky areas. Real-time alerts help mitigate potential disasters quickly"
      },
      {
        id: 4,
        subHeader: "",
        description:"By integrating IoT into supply chain management, companies can monitor shipments, optimize routes, and reduce losses due to inefficiencies or theft."
      },
    ],
  },
];

const AutomationAndIoT = () => {
  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="AutomationAndIoT"
        contents="Automation and the Internet of Things (IoT) are revolutionizing the oil and gas industry by streamlining operations, enhancing safety, and optimizing resources."
        img={img}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default AutomationAndIoT;
