import React from "react";

import img from "./Img/Our values.jpg";

import RespectEdit from "./Img/RespectEdit.jpeg"
import Honesty from "./Img/Honesty.jpeg"
import Integrety from "./Img/Integrety.jpg"
import BusinessIntegrety from "./Img/BusinessIntegrety.jpg"
import employeewellbeing from "./Img/employeewellbeingEdit.jpeg"

import classes from "./OurValues.module.css";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import LayoutWrapper from "../../../../../components/Interested/General/LayoutWrapper/LayoutWrapper";
import { Link } from "react-router-dom";
import ReverseContainer from "../../../../../components/Interested/Digitalization/ReverseContainer/ReverseContainer";

export const dropdownContent = [
  {
    id: 1,
    header: "How we conduct our business",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "The Arkhos General Business Principles are central to how we conduct our business and living by them is crucial to our continued success. We are judged by how we act and how we live up to our core values of honesty, integrity and respect for people. Our Business Principles are based on these. They promote trust, openness, teamwork and professionalism, as well as pride in what we do and how we conduct business. description",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "We were one of the first global companies to state and share our beliefs when we published our General Business Principles in 1976. As part of these principles, we commit to contribute to sustainable development, balancing short and long-term interests and integrating economic, environmental and social considerations into our decision-making.",
      },
      {
        id: 3,
        subHeader: "",
        description:
          " All Arkhos employees and contractors, and those at joint ventures we operate, are expected to understand and continually behave in line with our Business Principles. We expect suppliers, and joint ventures that we do not operate, to apply equivalent principles.",
      },
    ],
  },
  // {
  //   id: 2,
  //   header: "Supporting Environmental Compliance",
  //   data: [
  //     {
  //       id: 1,
  //       subHeader: "",
  //       description:
  //         "Remote systems collect extensive operational data, helping operators monitor environmental factors such as emissions and leaks. This aids in adhering to environmental standards and reduces ecological impact.",
  //     },
  //     {
  //       id: 2,
  //       subHeader: "",
  //       description:
  //         "By identifying issues early, such as equipment failures that could cause spills, remote monitoring ensures operations remain eco-friendly and compliant with regulations.",
  //     },
  //   ],
  // },
];
export const dropdownContent2 = [
  {
    id: 1,
    header: "What we expect of our people",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Our Code of Conduct supports every employee and contractor who works for or on behalf of Arkhos. It sets out expected behaviours and how they relate to out Business Principles and Core Values.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "Our Ethics and Compliance Manual builds on the Arkhos General Business Principles and the Arkhos Code of Conduct to provide practical advice on how to comply with laws and regulations and how to relate to customers, communities and colleagues. The Ethics and Compliance Manuals offers detailed guidance on being compliant, helping our staff do the right thing every day.",
      },
      {
        id: 3,
        subHeader: "",
        description:
          " All Arkhos employees and contractors, and those at joint ventures we operate, are expected to understand and continually behave in line with our Business Principles. We expect suppliers, and joint ventures that we do not operate, to apply equivalent principles.",
      },
    ],
  },
  {
    id: 2,
    header: "Download the Arkhos Code of Conduct ",
    data: [
      {
        id: 1,
        subHeader: "",
        description: <Link>Download</Link>,
      },
    ],
  },
];

const coreFeatureData = [
  {
    id: 2,
    to: "#",
    img: RespectEdit,
    header: "Respect",
    desc: (
      <>
        Our people have the opportunity to progress irrespective of gender,
        ethnicity, or other differences.
      </>
    ),
  },
  {
    id: 3,
    to: "#",
    img: Honesty,
    header: "Honesty ",
    desc: (
      <>
        Staff and business partners are encouraged to speak up and celebrate
        those who do the right thing.
      </>
    ),
  },
  {
    id: 4,
    to: "#",
    img: Integrety,
    header: "Integrity",
    desc: (
      <>
        By committing to our policies and rules, we empower our staff and
        business partners to make the right decisions.
      </>
    ),
  },
  {
    id: 5,
    to: "#",
    img: BusinessIntegrety,
    header: "Business integrity ",
    desc: (
      <>
        Our core values are honesty, integrity and respect for people. These are
        reflected in the Arkhos General Business Principles, which set out our
        responsibilities to shareholders, customers, employees, business
        partners and society.
      </>
    ),
  },
];

const OurValues = () => {
  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Our Values"
        contents="
        At Arkhos, we share a set of core values – honesty, integrity and respect for people – which underpin all the work we do. The Arkhos General Business Principles, Code of Conduct, and Ethics and Compliance Manual help everyone at Arkhos act in line with these values and comply with relevant laws and regulations."
        img={img}
      />

      <LayoutWrapper data={coreFeatureData} />


      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>


      <section className={classes.SectionWrapper}>
        <ReverseContainer
          header="Employee Health & Wellbeing"
          desc="
          Caring for the wellbeing of our employees is critical to our success as individuals, as teams and as a company. Performing competitively in the evolving energy system requires healthy, capable people working safely togather across Arkhos."
          // btnContent="Read the article on energy transition"
          img={employeewellbeing}
          // clicked={navigateOnclick.bind(null,"/energy-transition-support")}
        />
      </section>
      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent2} />
      </section>
    </section>
  );
};

export default OurValues;
