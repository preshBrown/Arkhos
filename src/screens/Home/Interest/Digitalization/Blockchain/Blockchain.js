import React from "react";

import img from "../DigImages/Blockhain.jpeg";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import classes from "./Blockchain.module.css";

export const dropdownContent = [
  {
    id: 1,
    header: "Supply Chain Tracking",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "We leverage blockchain for dynamic tracking of our supply chain, enabling real-time visibility of tools, products, and logistics. This improves inventory management and builds trust among partners by providing transparent and immutable records",
      },
    ],
  },
  {
    id: 2,
    header: "Cybersecurity",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Blockchain secures our critical data by preventing tampering and ensuring safe communication channels. It also enhances device security through unique digital certificates, significantly reducing vulnerability to cyber threats.",
      },
    ],
  },
  {
    id: 3,
    header: "Energy Market Operations",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"Blockchain opens new avenues in energy market transactions, including digitizing the trade lifecycle and reducing inefficiencies in over-the-counter trading. This has helped us stay competitive in a rapidly evolving market"
      },
    ],
  },
  {
    id: 4,
    header: "Sustainability and Compliance",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"By recording and verifying emissions data on blockchain, we meet regulatory requirements while ensuring environmental accountability, strengthening our commitment to sustainable practices"
      },
    ],
  },
];

const Blockchain = () => {
  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Blockchain"
        contents="At Arkhos Oil & Gas Limited, blockchain technology is already transforming our operations, enhancing efficiency, transparency, and security across various business processes. Here's how we utilize this cutting-edge technology"
        img={img}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default Blockchain;
