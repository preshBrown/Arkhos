import React from "react";

import img from "./img/Portfolio.jpg";

import project1 from "./img/pipline erection.jpeg";
import project2 from "./img/Installation  of piping work.jpeg";
import project3 from "./img/Installation of Knock out vessels.jpeg";
import project4 from "./img/laying of gas pipline.jpg";
import project5 from "./img/Construction of mechanical test laboratory.jpeg";


import project6 from "./img/supply of diesel.jpg";
import project7 from "./img/leasing of filling stations.jpg";
import project8 from "./img/provision for stock product materials.jpg";
import project9 from "./img/procurement of industrial equipment.jpg";
import project10 from "./img/leasing of tank farm vessels.jpg";

import project11 from "./img/Turnkey Logistics for Oil & Gas Projects.jpg";
import project12 from "./img/Fleet Support for construction projects.jpeg";
import project13 from "./img/Advanced Logistics Management.jpg";






import weldingcloseUp from "./welding-closeup.jpg";
import classes from "./PortfolioAndProject.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Interfaces/Button/Button";
import DropdownWrapper from "../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import ReverseContainer from "../../../../components/Interested/Digitalization/ReverseContainer/ReverseContainer";
import HeaderLayout from "../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import LayoutWrapper from "../../../../components/Interested/General/LayoutWrapper/LayoutWrapper";
import Reveal from "../../../../components/Motion/Reveal/Reveal";


const coreFeatureData = [
  // {
  //   id: 1,
  //   to: "/digitization-in-action",
  //   img: img,
  //   header: "Digitization in action",
  //   desc: "Digital technologies are improving the experience of our customers and making Arkhos a more efficient business.",
  // },
  {
    id: 2,
    to: "#",
    img: project1,
    header: "Pipeline Erection - ",
    desc: "Pipeline erection is a critical phase in oil and gas operations, involving the installation and assembly of pipelines that transport crude oil, natural gas, and refined products. At Arkhos Oil & Gas Ltd, we specialize in designing and constructing pipelines to ensure safe and efficient energy transportation across diverse terrains and environments.",
  },
  {
    id: 3,
    to: "# ",
    img: project2,
    header: " Installation of Piping Work - ",
    desc: "The installation of piping systems is a critical process in oil and gas operations, ensuring the efficient and safe transportation of fluids such as oil, gas, water, and chemicals across facilities. At Arkhos Oil & Gas Ltd, our piping installation services are carried out with precision, expertise, and strict adherence to industry standards.",
  },
  {
    id: 4,
    to: "#",
    img: project3,
    header: "Installation of knock-out vessels - ",
    desc: "The installation of knock-out vessels is an essential process in oil and gas operations, designed to separate liquids from gas streams, ensuring the efficient and safe handling of production fluids. At Arkhos Oil & Gas Ltd, our knock-out vessel installation services are performed with precision, expertise, and strict compliance with industry standards to optimize operational performance.",
  },

  {
    id: 5,
    to: "#",
    img: project4,
    header: "Laying of gas pipelines - ",
    desc: "The laying of gas pipelines is a critical operation in the oil and gas industry, facilitating the safe and efficient transportation of natural gas across long distances. At Arkhos Oil & Gas Ltd, our gas pipeline laying services are executed with precision, advanced technology, and strict adherence to industry standards to ensure durability, reliability, and environmental safety.",
  },
  {
    id: 6,
    to: "#",
    img: project5,
    header: "Construction of a mechanical test laboratory  - ",
    desc: "initiative to support SCN operations, providing a controlled environment for testing the mechanical properties of materials and equipment. At Arkhos Oil & Gas Ltd, we deliver state-of-the-art mechanical test laboratories designed to meet the highest industry standards, ensuring accuracy, reliability, and safety in evaluating performance under diverse operational conditions.",
  },
];
const procurement = [
  // {
  //   id: 1,
  //   to: "/digitization-in-action",
  //   img: img,
  //   header: "Digitization in action",
  //   desc: "Digital technologies are improving the experience of our customers and making Arkhos a more efficient business.",
  // },
  {
    id: 2,
    to: "#",
    img: project6,
    header: "Supply of Diesel (A.G.O) ",
    desc: "Delivering high-quality Automotive Gas Oil (AGO) to meet the energy demands of industrial, commercial, and operational activities.",
  },
  {
    id: 3,
    to: "# ",
    img: project7,
    header: "Leasing of Filling Stations",
    desc: "Providing strategic leasing solutions for filling stations, enabling businesses to access prime locations and enhance their operational capabilities.",
  },
  {
    id: 4,
    to: "#",
    img: project8,
    header: "Provision for Stock of Products or Materials",
    desc: "Managing and maintaining a reliable stockpile of essential materials, equipment, and consumables to support smooth and uninterrupted operations.",
  },

  {
    id: 5,
    to: "#",
    img: project9,
    header: "Procurement of Industrial Equipment ",
    desc: "Sourcing and delivering high-performance machinery, tools, and equipment critical to oil and gas projects, ensuring quality and compliance with industry standards.",
  },
  {
    id: 6,
    to: "#",
    img: project10,
    header: "Leasing Of Tank Farm Vessels ",
    desc: "At Arkhos Oil & Gas Ltd, we provide comprehensive leasing solutions for tank farms, designed to support bulk storage and efficient management of petroleum products, including diesel (AGO), petrol (PMS), and kerosene (DPK). Our tank farm leasing services offer businesses access to strategically located storage facilities that meet the highest industry standards.",
  },
];
const logistics = [
  // {
  //   id: 1,
  //   to: "/digitization-in-action",
  //   img: img,
  //   header: "Digitization in action",
  //   desc: "Digital technologies are improving the experience of our customers and making Arkhos a more efficient business.",
  // },
  {
    id: 2,
    to: "#",
    img: project11,
    header: "Turnkey Logistics for Oil & Gas Projects ",
    desc: " Provided a full suite of transportation services, including personnel and equipment transport, to support a major oil and gas exploration project. The operation involved deploying low beds, flat beds, and support trucks across multiple locations.",
  },

  {
    id: 3,
    to: "# ",
    img: project12,
    header: "Fleet Support for Construction Projects",
    desc: "Delivered 24/7 equipment leasing and maintenance support for a large-scale construction project, ensuring uninterrupted operations and adherence to tight schedules.",
  },
  {
    id: 4,
    to: "#",
    img: project13,
    header: "Advanced Logistics Management",
    desc: "Streamlined logistics for a complex pipeline installation project, ensuring the timely delivery of welding machines, generator sets, and tipping trucks to remote sites.",
  },
  // {
  //   id: 5,
  //   to: "#",
  //   img: img,
  //   header: "Advanced Logistics Management",
  //   desc: "Streamlined logistics for a complex pipeline installation project, ensuring the timely delivery of welding machines, generator sets, and tipping trucks to remote sites.",
  // },

];

export const dropdownContent = [
  {
    id: 1,
    header: "What is digitalization?",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Digitalization is defined as the use of digital technologies to create more value in core businesses, to change a business model and to provide new value producing opportunities while building the appropriate organisational capability and mindset.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "Although Digitalization is not new, the technology has become cheaper and faster and the amount of data and connectivity is increasing exponentially, which makes the application of digital technologies ready to deliver at an affordable cost.",
      },

      {
        id: 3,
        subHeader: "",
        description:
          "  Digital technologies and trends are transforming the way we live, work and interact. For Arkhos, they will help us reduce our carbon footprint, drive cost efficiency, provide new revenue opportunities, change business models and redefine our industry.",
      },
      {
        id: 4,
        subHeader: "",
        description:
          "Arkhos is a pioneer in the development and deployment of many digital technologies. Today, we use advanced information technology (IT) infrastructure and partner with some of the world’s leading tech developers, and leverage technologies like artificial intelligence, robotics, the internet of things and blockchain in innovative ways.",
      },
    ],
  },
  {
    id: 2,
    header: "What is the role of digitalization in the Oil & Gas Industry?",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Digitalization is revolutionizing the oil and gas industry, and at Arkhos Oil & Gas Ltd, it plays a critical role in enhancing efficiency, sustainability, and innovation across our operations. As we align with global trends towards a more sustainable energy future, digital technologies are at the forefront of driving change.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "Digitalization enables real-time monitoring and management of our operations, ensuring optimal performance and energy efficiency. By integrating advanced sensors, data analytics, and automation, Arkhos can track and minimize greenhouse gas emissions, manage resources more effectively, and reduce the carbon footprint of our services, such as welding, fabrication, and marine operations.",
      },

      {
        id: 3,
        subHeader: "",
        description:
          "With digital tools, Arkhos streamlines its procurement processes, ensuring timely delivery of materials, equipment, and diesel/lubricants. These technologies improve supply chain transparency, minimize delays, and enhance decision-making, reducing overall operational costs and environmental impact.",
      },
      {
        id: 4,
        subHeader: "",
        description:
          "Digital technologies allow precise control over sandblasting processes, ensuring the removal of contaminants efficiently while preserving the integrity of oil and gas infrastructure. This enhances the durability and safety of pipelines and equipment, reducing the need for frequent maintenance and replacements.",
      },
      {
        id: 5,
        subHeader: "",
        description:
          "For our marine operations, digitalization supports route optimization, fuel efficiency, and fleet management. Advanced tracking systems and analytics ensure that our services are reliable, cost-effective, and environmentally friendly.",
      },
      {
        id: 6,
        subHeader: "",
        description:
          "Digital technologies empower Arkhos to explore and implement innovative low-carbon solutions. From designing energy-efficient systems to leveraging AI and IoT for predictive maintenance, Digitalization positions Arkhos as a forward-thinking player in the oil and gas industry’s transition towards sustainability",
      },
      {
        id: 7,
        subHeader: "",
        description:
          "With digital tools, Arkhos enhances safety by predicting potential risks and ensuring compliance with HSE standards. Real-time monitoring and virtual simulations enable proactive decision-making, safeguarding both our workforce and assets.",
      },
    ],
  },
  {
    id: 3,
    header: "How can digital technology transform the Oil & Gas Industry?",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Digital technologies are changing the oil and gas sector in ways that were almost unimaginable a decade ago. At Arkhos Oil & Gas Ltd, we are embracing this digital transformation to improve efficiency, safety, and innovation across our operations, while setting the stage for a more sustainable future.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "The industry stands at a tipping point of exponential growth in technology. The Internet of Things (IoT), with its trillion interconnected sensors, is generating and sharing data that provides actionable insights. Machine learning and artificial intelligence, once the stuff of science fiction, are now automating and optimizing critical oil and gas operations. These technologies are reducing costs, creating new revenue streams, and transforming traditional business models.",
      },

      {
        id: 3,
        subHeader: "",
        description:
          "Digital tools enable Arkhos to monitor and manage operations with unparalleled precision, ensuring that every aspect of our work—from procurement to fabrication—operates efficiently and safely. Predictive analytics, powered by AI, help identify and address potential risks before they become issues, protecting both people and assets.",
      },
      {
        id: 4,
        subHeader: "",
        description:
          "Digital transformation is more than just technology—it’s a shift in how businesses operate. For Arkhos, it means adopting agile ways of working and using data-driven insights to make faster, smarter decisions. Advanced tools allow us to streamline supply chains, optimize marine logistics, and ensure our sandblasting and coating processes are cost-effective and environmentally friendly.",
      },
      {
        id: 5,
        subHeader: "",
        description:
          "For our marine operations, digitalization supports route optimization, fuel efficiency, and fleet management. Advanced tracking systems and analytics ensure that our services are reliable, cost-effective, and environmentally friendly.",
      },
      {
        id: 6,
        subHeader: "",
        description:
          "At Arkhos, we see data as a critical asset. Our experts work across disciplines to combine technical expertise, commercial insights, and advanced data analytics. This collaboration enables us to unlock value from data, improve operations, and continuously innovate.",
      },
      {
        id: 7,
        subHeader: "",
        description:
          "By integrating digital technologies, Arkhos is not only enhancing current operations but also laying the groundwork for a more sustainable future. IoT, AI, and machine learning enable us to monitor emissions, optimize energy use, and design low-carbon solutions, ensuring we remain a forward-thinking leader in the oil and gas industry.",
      },
      {
        id: 8,
        subHeader: "",
        description:
          "Digital transformation isn’t just about adopting new tools—it’s about people. At Arkhos, we foster a culture of innovation, collaboration, and adaptability. Our teams embrace agile methodologies, ensuring that we remain at the forefront of technological and operational excellence.",
      },
      // {
      //   id: 7,
      //   subHeader: "",
      //   description:
      //     "With digital tools, Arkhos enhances safety by predicting potential risks and ensuring compliance with HSE standards. Real-time monitoring and virtual simulations enable proactive decision-making, safeguarding both our workforce and assets.",
      // },
    ],
  },
  {
    id: 4,
    header: "How does Arkhos manages cyber security risk?",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "The importance of data has never been greater, and that is why Arkhos is focused on developing and deploying effective systems for cybersecurity across the organisation. Effective cybersecurity enables us to protect the efficiency and productivity of our operations and ensures that we safeguard intellectual property, meet regulatory requirements and maintain our reputation as an industry leader.",
      },
      {
        id: 2,
        subHeader: "",
        description:
          "Digitalization and the drive to extract value from data will make important contributions to the success of Arkhos’s Powering Progress strategy, which aims to accelerate the transition of our business to net-zero emissions. We are working to transform our information technology (IT) systems to support an evolving portfolio of businesses and investing in new technologies to enhance IT capabilities such as data analytics, artificial intelligence, machine learning and virtual reality. It is helping Arkhos to accelerate through the energy transition. Our increasing use of Digitalization also helps us to generate shareholder value and improve safety and transparency.",
      },

      {
        id: 3,
        subHeader: "",
        description:
          " Arkhos operates a multi-level defence strategy that is underpinned by the Arkhos IT Control Framework and advanced cyber-defence capabilities. This integrated approach is intended to improve our ability to deal with the complex cyber and data privacy threats that face major organisations. At the same time, we continuously assess and enhance our capabilities to minimise the likelihood of any cyberattack being successful.  Maintaining a cybersecurity mindset throughout the organisation is the first line of defence. Robust governance processes are embedded across Arkhos to increase cyber awareness, monitor key cyber risks and provide risk assurance. Cyber-risk strategy and risk-management protocols are regularly reviewed with the Arkhos audit committee and Board of Directors. Arkhos employees and contract staff are subject to mandatory courses and regular awareness campaigns aimed at protecting us against cyber threats.",
      },
      {
        id: 4,
        subHeader: "",
        description:
          " Maintaining a cybersecurity mindset throughout the organisation is the first line of defence. Robust governance processes are embedded across Arkhos to increase cyber awareness, monitor key cyber risks and provide risk assurance. Cyber-risk strategy and risk-management protocols are regularly reviewed with the Arkhos audit committee and Board of Directors. Arkhos employees and contract staff are subject to mandatory courses and regular awareness campaigns aimed at protecting us against cyber threats.",
      },

      // {
      //   id: 7,
      //   subHeader: "",
      //   description:
      //     "With digital tools, Arkhos enhances safety by predicting potential risks and ensuring compliance with HSE standards. Real-time monitoring and virtual simulations enable proactive decision-making, safeguarding both our workforce and assets.",
      // },
    ],
  },

  // {
  //   id: 5,
  //   subHeader: "",
  //   description:"For our marine operations, digitalization supports route optimization, fuel efficiency, and fleet management. Advanced tracking systems and analytics ensure that our services are reliable, cost-effective, and environmentally friendly."
  // },
];

const PortfolioAndProject = (props) => {
  const navigate = useNavigate();

  const navigateOnclick = (address) => {
    console.log("🚀 ~ navigateOnclick ~ address:", address);
    navigate(address);
  };

  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Portfolio and major projects"
        contents={
          <>
            We pride ourselves on delivering excellence across a wide range of
            projects in the oil and gas industry. Our portfolio showcases our
            expertise, commitment to innovation, and ability to execute complex
            projects with precision and efficiency. From pipeline erection and
            maintenance to the supply of critical resources and advanced
            engineering solutions, each project reflects our dedication to
            quality, safety, and client satisfaction. <br /> <br />
            With a proven track record of success and a reputation for
            reliability, Arkhos Oil & Gas Ltd continues to set the benchmark in
            the industry, driving growth and sustainability through every
            endeavor. Explore our portfolio to discover the impact and scale of
            our major projects.
          </>
        }
        img={img}
      />

      <h1 className={classes.Explore}>
      <Reveal cover>
        
        Fabrication & Construction Services
        </Reveal>
      </h1>
      <p className={classes.ExploreP}>
        {" "}
        <Reveal>
        
        Arkhos continues to offer a unique and diverse group of services for all
        your project construction requirements. Arkhos has the equipment,
        manpower, resources, and expertise to schedule, manage, and construct
        pipelines of any size and length in all terrains in the country.
      </Reveal>
      </p>

      <section className={classes.SectionWrapper}>
        <LayoutWrapper data={coreFeatureData} />
      </section>

      <h1 className={classes.Explore}>
      <Reveal cover>
        
        Procurement
        </Reveal>
      </h1>
      <p className={classes.ExploreP}>
        {" "}
        <Reveal>
        
        At Arkhos Oil & Gas Ltd, we deliver professional procurement solutions
        that ensure the seamless supply of essential resources and services to
        drive operational excellence in the oil and gas sector.{" "}
      </Reveal>
      </p>
      <section className={classes.SectionWrapper}>
        <LayoutWrapper data={procurement} />
      </section>

      <h1 className={classes.Explore}>
      <Reveal cover>
        Logistics
        </Reveal>
      </h1>
      <p className={classes.ExploreP}>
        {" "}
        <Reveal>
        we understand that efficient logistics and reliable transportation are
        vital for seamless operations across industries. Our comprehensive
        logistics solutions and equipment leasing services are tailored to meet
        the unique demands of our clients.
      </Reveal>
      </p>

      <section className={classes.SectionWrapper}>
        <LayoutWrapper data={logistics} />
      </section>


















{/* 



      <section className={classes.SectionWrapper}>
        <ReverseContainer
          header="	Enhanced Service Delivery"
          desc="Automation in customer service and personalized experiences streamline the supply chain for B2B and B2C customers."
          btnContent="Read the article on service delivery"
          img={weldingcloseUp}
          clicked={navigateOnclick.bind(null, "/enhanced-service-delivery")}
        />
      </section>

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>

      <section className={classes.SectionWrapper}>
        <ReverseContainer
          header="Energy Transition Support"
          desc="Integration with Renewables: Digital platforms facilitate the integration of renewable energy into oil and gas portfolios, supporting diversification and energy transition goals."
          btnContent="Read the article on energy transition"
          img={weldingcloseUp}
          clicked={navigateOnclick.bind(null, "/energy-transition-support")}
        />
      </section> */}
    </section>
  );
};

export default PortfolioAndProject;
