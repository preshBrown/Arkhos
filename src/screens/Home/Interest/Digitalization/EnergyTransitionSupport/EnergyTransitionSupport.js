import React from "react";

import img from "../DigImages/EnergyRenewables.jpeg";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import classes from "./EnergyTransitionSupport.module.css";

export const dropdownContent = [
  {
    id: 1,
    header: "Hybrid Power Systems",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "We have implemented hybrid power systems that combine traditional oil and gas operations with renewable energy sources, such as solar and wind. These hybrid systems reduce the dependency on fossil fuels by supplementing energy needs with cleaner, more sustainable alternatives. By harnessing renewable energy, we lower our carbon footprint and improve the environmental sustainability of our operations. These hybrid systems also offer operational flexibility, enabling us to optimize energy consumption based on demand and availability of renewable resourcesge Solutions.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          " As part of our commitment to renewable integration, Arkhos has incorporated advanced energy storage solutions to manage intermittent power generation from renewable sources. By utilizing technologies such as battery storage, we ensure a reliable and consistent energy supply, even when renewable generation fluctuates. These systems store excess renewable energy during peak generation periods, making it available during times of high demand or when renewable resources are not producing energy. This integration ensures continuity of operations without relying solely on non-renewable energy sources.",
      },
    ],
  },
  {
    id: 2,
    header: "Green Hydros",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "In line with global efforts to decarbonize the energy sector, Arkhos has invested in green hydrogen projects, utilizing renewable energy to produce hydrogen. Green hydrogen is a clean alternative to traditional fuels and has a wide range of applications, from power generation to fuel for industrial processes. By incorporating green hydrogen into our energy mix, we are not only supporting energy transition but also creating new avenues for sustainable energy generation and usage .",
      },
    ],
  },
  {
    id: 3,
    header:
      "Smart Grid Integratihe management and distribution of renewable energy across our assets.",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Arkhos has adopted smart grid technologies. These smart grids enable real-time monitoring and control of energy flows, ensuring that renewable energy is efficiently integrated into our existing infrastructure. By optimizing the use of both renewable and non-renewable resources, we can balance energy supply with operational demand, reducing waste and improving overall energy efficiency.",
      },
    ],
  },
  {
    id: 4,
    header: "Sustainability Reporting and Performance.",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Arkhos tracks the performance of its renewable energy initiatives through advanced sustainability reporting tools. These tools provide transparent, real-time data on our energy use, emissions reductions, and the share of renewable energy in our operations. By monitoring this data, we continuously refine our strategies to ensure that we are meeting both our sustainability targets and industry standards.",
      },
    ],
  },
];

const EnergyTransitionSupport = () => {
  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Integration with Renewables "
        contents="At Arkhos, we have strategically integrated renewable energy sources into our operations as part of our commitment to energy transition and sustainability. By embracing renewable technologies, we have positioned ourselves at the forefront of the industry's shift towards cleaner, more sustainable energy solutions."
        img={img}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default EnergyTransitionSupport;
