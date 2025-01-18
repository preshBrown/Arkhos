import React from "react";

import img from "../DigImages/Supplychainopt.jpg";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import classes from "./SupplyChainOptimization.module.css";

export const dropdownContent = [
  {
    id: 1,
    header: "Foster seamless operations ",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"Arkhos emphasizes strong communication channels within our supply chain. This ensures collaboration across diverse suppliers, geographies, and regulatory environments, reducing risks such as inventory shortages or misaligned documentation"
      },
   
    ],
  },
  {
    id: 2,
    header: "Our holistic approach",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"This integrates dynamic scheduling, predictive analytics, and IoT-driven insights to streamline operations, maintain high responsiveness, and deliver superior outcomes for clients and stakeholders."
      },
     
    ],
  },
];

const SupplyChainOptimization = () => {
  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Supply Chain Optimization"
        contents="At Arkhos, our implementation of supply chain optimization leverages advanced technologies and strategic practices to enhance efficiency, reduce costs, and improve decision-making across our operations. By integrating digital tools like Transportation Management Systems (TMS), we achieve real-time visibility into supplier activities, inventory, and logistics. This enables us to reduce safety stock levels, minimize lead times, and optimize order cycle times, directly benefiting operational efficiency"
        img={img}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default SupplyChainOptimization;
