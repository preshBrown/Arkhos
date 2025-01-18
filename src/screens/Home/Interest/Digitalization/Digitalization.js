import React from "react";

// import img from "../img/Digitalization.jpg";
import img from "../img/Degitalizationnew.jpg";
import remoteMornitoring from "./DigImages/Remote mornitoring.jpg";
import SustainabilityTracking from "./DigImages/Sustainablity tracking.jpg";
import collaboration from "./DigImages/Collaboration.jpg";
import AI from "./DigImages/AI.jpg";
import Blockhain from "./DigImages/Blockhain.jpeg";
import Iot from "./DigImages/IOT.jpeg";
import AVRV from "./DigImages/AVRV.jpg";
import SupplyChainOpt from "./DigImages/Supplychainopt.jpg";
import ServiceDelivery from "./DigImages/ServiceDelivery.jpg";
import EnergyRenewables from "./DigImages/EnergyRenewables.jpeg";
import weldingcloseUp from "./welding-closeup.jpg";
import classes from "./Digitalization.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Interfaces/Button/Button";
import DropdownWrapper from "../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import ReverseContainer from "../../../../components/Interested/Digitalization/ReverseContainer/ReverseContainer";
import HeaderLayout from "../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import LayoutWrapper from "../../../../components/Interested/General/LayoutWrapper/LayoutWrapper";


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
    to: "/remote-monitoring",
    img: remoteMornitoring,
    header: "Remote Monitoring",
    desc: " Sensors and drones monitor hazardous environments, reducing risks to human workers.",
  },
  {
    id: 3,
    to: "/sustainability-tracking ",
    img: SustainabilityTracking,
    header: "Sustainability Tracking ",
    desc: "Digital systems track emissions and enable compliance with environmental regulations, aligning operations with global sustainability goals.",
  },
  {
    id: 4,
    to: "/collaboration-and-open-innovation",
    img: collaboration,
    header: "Collaboration and open innovation",
    desc: "Cloud platforms and digital workspaces enhance communication and coordination across global teams.",
  },
  {
    id: 5,
    to: "/a-i",
    img: AI,
    header: "AI",
    desc: "From machine learning to computer vision, deep learning to virtual assistants and autonomous vehicles to robotics, Arkhos has been focused on a range of technologies that have supported advances in AI.",
  },
  {
    id: 6,
    to: "/blockchain",
    img: Blockhain,
    header: "Blockchain",
    desc: "At Arkhos,  we are leveraging blockchain technology to reimagine current processes, create new value propositions and establish new markets.",
  },
  {
    id: 7,
    to: "/automation-and-iot",
    img: Iot,
    header: "Automation and IoT",
    desc: "Digital tools like Internet of Things (IoT) devices monitor equipment performance in real time, reducing downtime and improving predictive maintenance",
  },
  {
    id: 8,
    to: "/ar-vr",
    img: AVRV,
    header: "AR/VR",
    desc: "Augmented and virtual reality technologies provide immersive training for workers, reducing learning curves and improving safety.",
  },
  {
    id: 9,
    to: "/supply-chain-optimization",
    img: SupplyChainOpt,
    header: "Supply Chain Optimization",
    desc: "Advanced analytics streamline logistics and inventory management, reducing operational costs.",
  },
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


const Digitalization = (props) => {

  const navigate = useNavigate()


  const navigateOnclick = (address) => {
    console.log("🚀 ~ navigateOnclick ~ address:", address)
    navigate(address)
  }


  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Digital Transformation in the Oil & Gas Industry"
        contents=" Digitalization is significantly transforming the oil and gas sector by enhancing efficiency, reducing costs, and improving decision-making processes."
        img={img}
      />

      <h1 className={classes.Explore}>Explore</h1>

      <section className={classes.SectionWrapper}>
        <LayoutWrapper data={coreFeatureData} />
      </section>

      <section className={classes.SectionWrapper}>
        <ReverseContainer
          header="	Enhanced Service Delivery"
          desc="Automation in customer service and personalized experiences streamline the supply chain for B2B and B2C customers."
          btnContent="Read the article on service delivery"
          img={ServiceDelivery}
          clicked={navigateOnclick.bind(null,"/enhanced-service-delivery")}
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
          img={EnergyRenewables}
          clicked={navigateOnclick.bind(null,"/energy-transition-support")}
        />
      </section>
    </section>
  );
};

export default Digitalization;
