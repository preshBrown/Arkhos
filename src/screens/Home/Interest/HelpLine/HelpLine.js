import React from "react";

import img from "../img/Helpline.jpg";

import ArkhoshelplineforCustomers from "./Img/ArkhoshelplineforCustomers.jpg";
import values from "./Img/Our values.jpg";
import codeOfEthics from "./Img/codeofethics.jpg";
import classes from "./HelpLine.module.css";
import HeaderLayout from "../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";
import DropdownWrapper from "../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import { Link } from "react-router-dom";
import LayoutWrapper from "../../../../components/Interested/General/LayoutWrapper/LayoutWrapper";
import Reveal from "../../../../components/Motion/Reveal/Reveal";

const HelpLine = () => {
  const coreFeatureData = [
    {
      id: 2,
      to: "/our-values",
      img: values,
      header: "Our Values",
      desc: (
        <>
          At Arkhos, we share a set of core values – honesty, integrity and
          respect for people – which underpin all the work we do. The Arkhos
          General Business Principles, Code of Conduct, and Ethics and
          Compliance Manual help everyone at Arkhos act in line with these
          values and comply with relevant laws and regulations.
        </>
      ),
    },
    {
      id: 3,
      to: "/code-ethics",
      img: codeOfEthics,
      header: "Code of Ethics",
      desc: (
        <>
          Code of Ethics for Executive Directors and Senior Financial Officers
          of Arkhos Oil & Gas. This Code of Ethics ("this Code") should be read
          in conjunction with the Statement of General Business Principles of
          Arkhos Oil & Gas which governs how the company conducts its affairs.
        </>
      ),
    },
  ];

  const dropdownContent = [
    {
      id: 1,
      header: "What is the Arkhos Helpline?",
      data: [
        {
          id: 1,
          subHeader: "",
          description:
            "The Helpline enables Arkhos employees and others to raise concerns or dilemmas, or to seek advice on a matter related to compliance with the law and our business principles and Code of Conduct, in full confidence and without fear of retaliation.",
        },
      ],
    },
    {
      id: 2,
      header: "Who can use the Helpline?",
      data: [
        {
          id: 1,
          subHeader: "",
          description:
            "The Helpline is for all employees and contract staff in Arkhos and for third parties with whom Arkhos has a business relationship (such as customers, suppliers, agents) if they observe wrongdoing in the company or employee. This facility is not for customer service complaints or enquiries.",
        },
      ],
    },
    {
      id: 3,
      header: "How can I raise a query or concern via the Helpline?",
      data: [
        {
          id: 1,
          subHeader: "",
          description:
            "The Helpline is available 24 hours a day, 365 days a year. Calls and reports over the Helpline are received on behalf of Arkhos by an independent third party specialist Helpline provider.",
        },
      ],
    },
    {
      id: 4,
      header: "What will happen when I contact the Helpline?",
      data: [
        {
          id: 1,
          subHeader: "",
          description:
            "You can communicate anonymously, by identifying yourself and asking to communicate with just one person without your name being recorded or you can provide your name and contact details. Provide as much information as possible about your concern but keep it relevant, especially if you are making an allegation about another person.",
        },
        {
          id: 2,
          subHeader: "",
          description:
            "At the end of the telephone interview or submission of a web report, you will be given a report number and PIN code so you may call back or access the website to check if there is a response from the company, or to provide additional information. Both reporting a concern on the web or by phone will result in a report that is passed to Arkhos.",
        },
      ],
    },
    {
      id: 5,
      header: "What happens to a report when received by Arkhos?",
      data: [
        {
          id: 1,
          subHeader: "",
          description:
            "Your report is passed to a Regional Coordinator who will assess the report and allocate to a Case Manager to decide the appropriate action.",
        },
        {
          id: 2,
          subHeader: "",
          description:
            "If the report is a query, or perhaps a dilemma for which advice is sought, it will be passed to someone qualified to provide that advice, such as an appointed expert in the subject or a member of our legal team.",
        },
        {
          id: 3,
          subHeader: "",
          description:
            "If the report is in the nature of an allegation that requires careful investigation, an investigator or investigation team will be assigned. This will usually involve a suitably-trained investigator who has local expertise.",
        },
        {
          id: 4,
          subHeader: "",
          description:
            "If the reported incident requires expertise not available within Arkhos, an outside expert may be involved under similar strict confidentiality. Details of the case, and especially the identity of the person who made the report and any persons mentioned in the report, are kept confidential and only shared on a strict need-to-know basis. The investigation itself will focus on an objective, factual analysis of the case. In the event that an allegation has been found to be true, Arkhos will decide on the actions to be taken.",
        },
      ],
    },
    // {
    //   id: 3,
    //   header: "Collaborate with experienced colleagues",
    //   data: [
    //     {
    //       id: 1,
    //       subHeader: "",
    //       description:
    //         "Our business needs are varied and continuously evolving, providing opportunities for employees to explore different career paths. Work with professionals and leaders, each bringing their unique expertise to the table. We invite people to think differently and learn from the diversity of backgrounds, cultures, ideas and knowledge at Arkhos.",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   header: "Develop the energy solutions of tomorrow and today",
    //   data: [
    //     {
    //       id: 1,
    //       subHeader: "",
    //       description:
    //         "Play a role in developing solutions that support the energy transition and address the energy needs of today. Working across our diverse businesses and capabilities, you’ll have the opportunity to power progress for the world around us.",
    //     },
    //     {
    //       id: 2,
    //       subHeader: "",
    //       description:
    //         "Digitalization and the drive to extract value from data will make important contributions to the success of Arkhos’s Powering Progress strategy, which aims to accelerate the transition of our business to net-zero emissions. We are working to transform our information technology (IT) systems to support an evolving portfolio of businesses and investing in new technologies to enhance IT capabilities such as data analytics, artificial intelligence, machine learning and virtual reality. It is helping Arkhos to accelerate through the energy transition. Our increasing use of Digitalization also helps us to generate shareholder value and improve safety and transparency.",
    //     },

    //     {
    //       id: 3,
    //       subHeader: "",
    //       description:
    //         " Arkhos operates a multi-level defence strategy that is underpinned by the Arkhos IT Control Framework and advanced cyber-defence capabilities. This integrated approach is intended to improve our ability to deal with the complex cyber and data privacy threats that face major organisations. At the same time, we continuously assess and enhance our capabilities to minimise the likelihood of any cyberattack being successful.  Maintaining a cybersecurity mindset throughout the organisation is the first line of defence. Robust governance processes are embedded across Arkhos to increase cyber awareness, monitor key cyber risks and provide risk assurance. Cyber-risk strategy and risk-management protocols are regularly reviewed with the Arkhos audit committee and Board of Directors. Arkhos employees and contract staff are subject to mandatory courses and regular awareness campaigns aimed at protecting us against cyber threats.",
    //     },
    //     {
    //       id: 4,
    //       subHeader: "",
    //       description:
    //         " Maintaining a cybersecurity mindset throughout the organisation is the first line of defence. Robust governance processes are embedded across Arkhos to increase cyber awareness, monitor key cyber risks and provide risk assurance. Cyber-risk strategy and risk-management protocols are regularly reviewed with the Arkhos audit committee and Board of Directors. Arkhos employees and contract staff are subject to mandatory courses and regular awareness campaigns aimed at protecting us against cyber threats.",
    //     },

    //     // {
    //     //   id: 7,
    //     //   subHeader: "",
    //     //   description:
    //     //     "With digital tools, Arkhos enhances safety by predicting potential risks and ensuring compliance with HSE standards. Real-time monitoring and virtual simulations enable proactive decision-making, safeguarding both our workforce and assets.",
    //     // },
    //   ],
    // },
  ];

  const serviceDescription = (
    <p>
      By combining cutting-edge technology with practical expertise, we deliver
      efficient and reliable designs for pipelines, fabrication systems, and oil
      and gas infrastructure. Whether it’s enhancing operational efficiency,
      optimizing processes, or ensuring the durability and safety of assets,
      Arkhos’ design engineering capabilities drive the success of our projects
      and the satisfaction of our clients. <br /> <br /> Join us as we lead the
      way in transforming the oil and gas sector through innovative design and
      engineering excellence. Together, we are building solutions that meet
      today’s challenges and prepare for a brighter, more sustainable energy
      future.
    </p>
  );

  const whyArchos = (
    <>
      <h2>
        <Reveal cover>Is the Arkhos Helpline for customers?</Reveal>
      </h2>
      <small>
        <Reveal cover>
          The Arkhos Helpline is
          <span style={{ fontWeight: "bold" }}>
            {" "}
            not for customer complaints or enquiries
          </span>
          . Customers should:
        </Reveal>
      </small>
      <ul style={{ marginTop: "10px" }} className={classes.ExperienceContents}>
        <li className={classes.ExperienceContent}>
          <Link>
            <Reveal cover>
              Please contact your local Arkhos office or business for customer
              service related issues.
            </Reveal>
          </Link>
        </li>
        <li className={classes.ExperienceContent}>
          <Link>
            <Reveal cover>
              Find out how to react to suspected fraudulent job offers, prize
              awards and business.
            </Reveal>
          </Link>
        </li>
        <li className={classes.ExperienceContent}>
          <Link>
            <Reveal cover>
              Please find here the responsible disclosure policy for cyber
              security
            </Reveal>
          </Link>
        </li>
      </ul>
    </>
  );

  const serviceDescription2 = (
    <p>
      Design Engineers at Arkhos come up with innovative designs that help
      develop robust & compliant IT solutions for Arkhos Powering Progress
      strategy – designs that is both fit for purpose and are world-class. We
      build cost-effective and scalable systems with excellent user experience
      to support our operations. The team focuses on driving and adopting
      industry best practices in solution engineering, quality engineering,
      security & compliance.
    </p>
  );

  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Arkhos  Helpline"
        contents="Our Helpline allows employees and stakeholders to raise concerns and report instances of potential non-compliance with our values and principles."
        img={img}
      />

      <ReverseImageSection
        // header="Why Use Arkhos"
        img={ArkhoshelplineforCustomers}
        content={whyArchos}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>

      <LayoutWrapper data={coreFeatureData} />
    </section>
  );
};

export default HelpLine;
