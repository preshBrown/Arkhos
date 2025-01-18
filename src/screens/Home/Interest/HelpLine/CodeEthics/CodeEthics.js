import React from "react";

import img from "./Img/codeofethics.jpg";

import Integrety from "./Img/Integrety.jpg";
import RespectEdit from "./Img/RespectEdit.jpeg";
import compliance from "./Img/compliance.jpeg";
import HSE from "./Img/HSE.jpeg";
import Confidencialityindataprotections from "./Img/Confidencialityindataprotections.jpg";

import FairCompetitionandantiCorruption from "./Img/FairCompetitionandantiCorruption.jpeg";
import Accountability from "./Img/Accountability.jpg";
import committed from "./Img/Comited.jpg";
import ReportingUneticalEdited from "./Img/ReportingUneticalEdited.jpeg";

// import iim from "./Img/"
// import iim from "./Img/"
import classes from "./CodeEthics.module.css";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import LayoutWrapper from "../../../../../components/Interested/General/LayoutWrapper/LayoutWrapper";
import InlineImageSection from "../../../../../components/InlineImageSection/InlineImageSection";
import ReverseImageSection from "../../../../../components/ReverseImageSection/ReverseImageSection";
import Reveal from "../../../../../components/Motion/Reveal/Reveal";

export const dropdownContent = [
  {
    id: 1,
    header: "Enhancing Safety",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Workers can monitor hazardous operations remotely, minimizing exposure to dangerous environments like high-pressure systems or areas with hazardous gases. This eliminates unnecessary travel to remote or risky sites, thereby reducing the chance of accidents during transit or on-site.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "Real-time alerts from sensors can notify operators of anomalies, allowing for quick responses to potentially dangerous conditions before they escalate.",
      },
    ],
  },
  {
    id: 2,
    header: "Supporting Environmental Compliance",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Remote systems collect extensive operational data, helping operators monitor environmental factors such as emissions and leaks. This aids in adhering to environmental standards and reduces ecological impact.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "By identifying issues early, such as equipment failures that could cause spills, remote monitoring ensures operations remain eco-friendly and compliant with regulations.",
      },
    ],
  },
];

const experienceContents = (
  <>
    <h3> We are guided by principles that reflect who we are:</h3>
    <ul className={classes.ExperienceContents}>
      <li className={classes.ExperienceContent}>
        <strong>Safety First:</strong> Protecting our people and the environment
        is our top priority.
      </li>
      <li className={classes.ExperienceContent}>
        <strong>Collaboration: </strong>We believe in the power of teamwork and
        mutual respect.
      </li>
      <li className={classes.ExperienceContent}>
        <strong>Integrity: </strong>Upholding ethical practices and transparency
        in all our dealings.
      </li>
      <li className={classes.ExperienceContent}>
        <strong>Excellence: </strong>Striving for perfection in every project
        and task.
      </li>
    </ul>
  </>
);

const experienceContents2 = (
  <>
    <h3>
      {" "}
      Whether you're an experienced professional or just starting your journey,
      Arkhos offers diverse career opportunities:
    </h3>
    <ul className={classes.ExperienceContents}>
      <li className={classes.ExperienceContent}>Engineering and Design</li>
      <li className={classes.ExperienceContent}>Project Management</li>
      <li className={classes.ExperienceContent}>
        Procurement and Supply Chain
      </li>
      <li className={classes.ExperienceContent}>Marine Operations</li>
      <li className={classes.ExperienceContent}>
        Health, Safety, and Environment (HSE)
      </li>
      <li className={classes.ExperienceContent}>
        Administrative and Support Services
      </li>
    </ul>
  </>
);

const CodeEthics = () => {
  const coreFeatureData = [
    {
      id: 2,
      to: "#",
      img: Integrety,
      header: "Integrity",
      desc: (
        <>
          We are honest, trustworthy, and transparent in all our dealings. We
          uphold our commitments and adhere to the highest ethical standards,
          ensuring that our actions align with our words.
        </>
      ),
    },
    {
      id: 3,
      to: "#",
      img: RespectEdit,
      header: "Respect for People ",
      desc: (
        <>
          We value diversity and foster an inclusive environment where everyone
          is treated with respect, dignity, and fairness. <br />
          We are committed to promoting a workplace that is free from
          discrimination, harassment, and any form of bias.
        </>
      ),
    },
    {
      id: 4,
      to: "#",
      img: compliance,
      header: "Compliance with Laws and Regulations",
      desc: (
        <>
          We operate in full compliance with all applicable local and
          international laws, standards, and industry regulations. <br /> We are
          steadfast in our commitment to legal and ethical business practices.
        </>
      ),
    },
    {
      id: 5,
      to: "#",
      img: HSE,
      header: "Health, Safety, and Environment (HSE) ",
      desc: (
        <>
          We prioritize the well-being of our employees, clients, and
          communities. We are committed to maintaining a safe and healthy work
          environment while minimizing our impact on the environment through
          sustainable practices.
        </>
      ),
    },
    {
      id: 6,
      to: "#",
      img: Confidencialityindataprotections,
      header: "Confidentiality and Data Protection ",
      desc: (
        <>
          We respect the confidentiality of information entrusted to us by
          clients, partners, and employees. We are dedicated to safeguarding
          sensitive data and upholding the highest standards of data protection.
        </>
      ),
    },
    {
      id: 7,
      to: "#",
      img: FairCompetitionandantiCorruption,
      header: "Fair Competition and Anti-Corruption ",
      desc: (
        <>
          We conduct our business with fairness and integrity, rejecting any
          form of corruption, bribery, or anti-competitive behavior. We believe
          in creating a level playing field in all our business dealings.
        </>
      ),
    },
    {
      id: 8,
      to: "#",
      img: Accountability,
      header: "Accountability ",
      desc: (
        <>
          Every member of Arkhos Oil & Gas Ltd is responsible for upholding our
          Code of Ethics. We encourage open communication and provide mechanisms
          for reporting unethical behavior without fear of retaliation.
        </>
      ),
    },
  ];

  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Code of Ethics"
        contents={
          <>
            At Arkhos Oil & Gas Ltd, our commitment to excellence extends beyond
            delivering world-class solutions—it is deeply rooted in upholding
            the highest ethical standards. Our Code of Ethics serves as the
            foundation of our business conduct, guiding every decision and
            interaction to ensure we operate with integrity, transparency, and
            respect.
          </>
        }
        img={img}
      />

      <h1 className={classes.Explore}>Our Core Principles</h1>

      <LayoutWrapper data={coreFeatureData} />

      <InlineImageSection
        header="Commitment to Ethical Business Practices"
        img={committed}
        content={
          <>
            <Reveal cover>
              At Arkhos, ethics are more than just words—they are the essence of
              how we operate. We hold ourselves accountable to these standards
              and expect the same from our partners, suppliers, and
              stakeholders.
            </Reveal>
          </>
        }
      />
      <ReverseImageSection
        header="Reporting Concerns"
        img={ReportingUneticalEdited}
        content={
          <>
            <Reveal cover>
              If you witness or suspect any breach of our Code of Ethics, we
              encourage you to report it through our designated channels. We are
              committed to addressing concerns promptly and confidentially while
              protecting whistleblowers from any form of retaliation.
            </Reveal>
          </>
        }
      />

      {/* <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section> */}
    </section>
  );
};

export default CodeEthics;
