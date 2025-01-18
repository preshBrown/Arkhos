import React from "react";

import img from "../img/DesignEngineering.jpg";
import designEng from "./img/Engineeering designs.jpg";
import solutionEngineering from "./img/solutionEngineering.jpg";
import securityandcompliance from "./img/securityandcompliance.jpg";
import Quality2 from "./img/Quality2.jpg";
import QualityEngineeringAtArkhos from "./img/QualityEngineeringAtArkhos.jpg";
import LayoutWrapper from "../../../../components/Interested/General/LayoutWrapper/LayoutWrapper";
import ReverseContainer from "../../../../components/Interested/Digitalization/ReverseContainer/ReverseContainer";
import DropdownWrapper from "../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";

import classes from "./DesignEngineering.module.css";
import HeaderLayout from "../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import ServiceDescription from "../../../Services/ServiceDescription/ServiceDescription";
import ReverseImageSection from "../../../../components/ReverseImageSection/ReverseImageSection";
import InlineImageSection from "../../../../components/InlineImageSection/InlineImageSection";
import Reveal from "../../../../components/Motion/Reveal/Reveal";

const DesignEngineering = (props) => {
  const coreFeatureData = [
    {
      id: 2,
      to: "#",
      img: solutionEngineering,
      header: "Solution Engineering",
      desc: (
        <>
          Solution Engineering is responsible for designing and implementing IT
          and digital solutions in Arkhos. <br /> We use agile and waterfall
          processes to facilitate the end-to-end delivery of customer-centric
          solutions. The business analysts in the Solution Engineering Team
          partner with stakeholders to identify and frame IT requirements and
          demands in various markets as standard solutions. This team focuses on
          standardisation and provides solution consulting across functions.
        </>
      ),
    },
    {
      id: 3,
      to: "#",
      img: securityandcompliance,
      header: "Security & Compliance ",
      desc: (
        <>
          Security & Compliance is a practice designed to ensure that
          technological developments are secure and meet standards &
          requirements.
          <br /> We implement proper security and controls for effective and
          efficient operations. Our security and design analysts in our team
          advise on risk assessments, control selection and design.
        </>
      ),
    },
    {
      id: 4,
      to: "#",
      img: Quality2,
      header: "Quality Engineering ",
      desc: (
        <>
          Quality Engineering is a discipline which owns testing strategy,
          defines roadmaps, introduces market standard tools, implements
          enterprise standards and tests automation frameworks. In addition, the
          team is responsible for skills and capability development, coaching,
          assurance and building a community of practice.
          <br /> The testing centre of excellence and testing competency centres
          within quality engineering define processes, templates, and best
          practices. This team is responsible for the performance, delivery,
          review test strategy and continuous coaching to support skill
          development.
        </>
      ),
    },
  ];

  const dropdownContent = [
    {
      id: 1,
      header: "Grow your skills",
      data: [
        {
          id: 1,
          subHeader: "",
          description:
            "You have the opportunity to work at the forefront of technology, trends and practices. Be inspired to build your abilities, learn from experiences and grow the skills you need to get – and stay – ahead. You will be a part of a team of the best and the brightest colleagues who develop practical solutions, allowing you to learn and improve.",
        },
      ],
    },
    {
      id: 2,
      header: "Achieve your balance in a values-led culture",
      data: [
        {
          id: 1,
          subHeader: "",
          description:
            "We live our core values of honesty, integrity and respect, so you can work in an environment that encourages you to be the best version of yourself and respects the individual journeys each of us will take. Enjoy flexible working arrangements and receive competitive compensation & benefits.",
        },
      ],
    },
    {
      id: 3,
      header: "Collaborate with experienced colleagues",
      data: [
        {
          id: 1,
          subHeader: "",
          description:
            "Our business needs are varied and continuously evolving, providing opportunities for employees to explore different career paths. Work with professionals and leaders, each bringing their unique expertise to the table. We invite people to think differently and learn from the diversity of backgrounds, cultures, ideas and knowledge at Arkhos.",
        },
      ],
    },
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
      <Reveal cover>
      By combining cutting-edge technology with practical expertise, we deliver
      efficient and reliable designs for pipelines, fabrication systems, and oil
      and gas infrastructure. Whether it’s enhancing operational efficiency,
      optimizing processes, or ensuring the durability and safety of assets,
      Arkhos’ design engineering capabilities drive the success of our projects
      and the satisfaction of our clients. <br /> <br /> 
      </Reveal>
      <Reveal cover>

      Join us as we lead the way in transforming the oil and gas sector through innovative design and
      engineering excellence. Together, we are building solutions that meet
      today’s challenges and prepare for a brighter, more sustainable energy
      future.
      </Reveal>
    </p>
  );

  const serviceDescription2 = (
    <p>
      <Reveal cover>

      Design Engineers at Arkhos come up with innovative designs that help
      develop robust & compliant IT solutions for Arkhos Powering Progress
      strategy – designs that is both fit for purpose and are world-class. <br /> <br />
</Reveal>
<Reveal cover>

       We build cost-effective and scalable systems with excellent user experience
      to support our global operations. The team focuses on driving and adopting
      industry best practices in solution engineering, quality engineering,
      security & compliance.
      </Reveal>
    </p>
  );

  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Design Engineering"
        contents="At Arkhos Oil & Gas Ltd, design engineering is at the heart of our mission to shape the future of the oil and gas industry. Our team of skilled engineers works collaboratively to design, innovate, and implement solutions that address today’s energy demands while paving the way for a more sustainable tomorrow."
        img={img}
      />

      <ReverseImageSection img={designEng} content={serviceDescription} />

      <h1 className={classes.Explore}>Excellence in Design Engineering</h1>

      <section className={classes.SectionWrapper}>
        <LayoutWrapper data={coreFeatureData} />
      </section>

      <InlineImageSection
        // header="Why Use Arkhos"
        img={QualityEngineeringAtArkhos}
        content={serviceDescription2}
      />

      <h1 className={classes.Explore}>Working at Arkhos</h1>

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default DesignEngineering;
