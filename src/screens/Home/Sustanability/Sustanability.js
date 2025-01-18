import React from "react";

import img from "./img/Sustainablity tracking.jpg";
import project1 from "./img/Environmental Stewardship.jpeg";
import project2 from "./img/Community Engagement .jpeg";
import project3 from "./img/Operational Excellence and Safety.jpg";
import project4 from "./img/Commitment to Innovation.jpg";
import project5 from "./img/Our Vision for the Future.jpg";

import project6 from "./img/Environmental Considerations.jpg";
import project7 from "./img/Social Responsibility.jpg";
import project8 from "./img/Efficient Resource Management.jpeg";
import project9 from "./img/Safety and Compliance.jpg";
import project10 from "./img/inovative driven.jpg";
import project11 from "./img/6-Metal-Fabrication-Safety-Tips-1200x720.jpg";

import weldingcloseUp from "./welding-closeup.jpg";
import classes from "./Sustanability.module.css";
import { Link, useNavigate } from "react-router-dom";
import LayoutWrapper from "../../../components/Interested/General/LayoutWrapper/LayoutWrapper";
import ReverseContainer from "../../../components/Interested/Digitalization/ReverseContainer/ReverseContainer";
import HeaderLayout from "../../../components/Interested/General/HeaderLayout/HeaderLayout";
import ReverseImageSection from "../../../components/ReverseImageSection/ReverseImageSection";
import InlineImageSection from "../../../components/InlineImageSection/InlineImageSection";

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
    header: "Environmental Stewardship",
    desc: (
      <>
        We are dedicated to minimizing our environmental footprint through
        innovative practices and technologies. From reducing greenhouse gas
        emissions in our operations to ensuring the safe handling of resources,
        we prioritize the protection of ecosystems and the efficient use of
        natural resources. Our focus on sustainable energy solutions aligns with
        global efforts to transition to a lower-carbon future.
      </>
    ),
  },
  {
    id: 3,
    to: "# ",
    img: project2,
    header: "Community Engagement ",
    desc: (
      <>
        At Arkhos, we believe in creating shared value. We actively invest in
        the communities where we operate, fostering economic growth, supporting
        local businesses, and empowering individuals through training and
        employment opportunities. By building strong, lasting relationships, we
        strive to leave a positive and enduring legacy.
      </>
    ),
  },
  {
    id: 4,
    to: "#",
    img: project3,
    header: "Operational Excellence and Safety",
    desc: (
      <>
        Sustainability starts with safety. Our operations are guided by rigorous
        safety standards to protect our people, assets, and the environment. We
        continually adopt best practices and innovative solutions to enhance the
        efficiency and resilience of our supply chains, ensuring the delivery of
        quality services without compromise.
      </>
    ),
  },
  {
    id: 5,
    to: "#",
    img: project4,
    header: "Commitment to Innovation",
    desc: (
      <>
        We recognize that innovation is key to sustainability. Through research,
        development, and the adoption of cutting-edge technologies, we drive
        improvements in energy efficiency and operational performance. Our
        pursuit of innovation ensures that we remain at the forefront of
        sustainable energy practices.
      </>
    ),
  },
  {
    id: 6,
    to: "#",
    img: project5,
    header: "Our Vision for the Future",
    desc: (
      <>
        As we look to the future, Arkhos Oil & Gas Ltd is dedicated to becoming
        a sustainability leader in the industry. By balancing energy production
        with environmental preservation and community development, we aim to
        contribute to a sustainable world where energy drives progress without
        compromise.
      </>
    ),
  },
];

const Sustanability = () => {
  const navigate = useNavigate();

  const navigateOnclick = (address) => {
    console.log("🚀 ~ navigateOnclick ~ address:", address);
    navigate(address);
  };

  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Sustanability"
        contents="At Arkhos Oil & Gas Ltd, sustainability is at the core of everything we do. As a leading player in the oil and gas industry, we are committed to driving positive environmental, social, and economic impacts while delivering energy solutions that meet the needs of today and tomorrow."
        img={img}
      />

      <h1 className={classes.Explore}> </h1>

      <section className={classes.SectionWrapper}>
        <LayoutWrapper data={coreFeatureData} />
      </section>

      <h1 className={classes.Explore}>
        Integrating Sustainability into Our Projects{" "}
      </h1>





      <ReverseImageSection
        header="Environmental Considerations"
        img={project6}
        content={<>
            Sustainability begins with environmental stewardship. We integrate advanced technologies and best practices to minimize emissions, reduce waste, and conserve natural resources. By conducting comprehensive environmental impact assessments, we ensure that our projects are designed and executed with minimal disruption to local ecosystems and biodiversity.
            </>}
      />   
      <InlineImageSection
        header="Social Responsibility"
        img={project7}
        content={<>
            Our projects are designed with the communities in mind. We work to create shared value by providing employment opportunities, supporting local businesses, and investing in social infrastructure. Arkhos prioritizes building partnerships with stakeholders to address social challenges and ensure that our operations contribute to community well-being.
            </>}
      />



<ReverseImageSection
        header="Efficient Resource Management"
        img={project8}
        content={<>

We emphasize the efficient use of energy and materials in all our projects. By adopting innovative processes and leveraging digital technologies, we optimize resource utilization while delivering cost-effective and sustainable outcomes.
            </>}
      />
<InlineImageSection
        header="Safety and Compliance"
        img={project9}
        content={<>

Sustainability is incomplete without safety and adherence to regulatory standards. Our robust safety protocols and compliance measures ensure that our projects are executed responsibly, protecting our workforce, communities, and the environment.
            </>}
      />





      
<ReverseImageSection
        header="Innovation-Driven Solutions"
        img={project10}
        content={<>


Innovation is at the heart of our sustainability efforts. We incorporate cutting-edge technologies to improve energy efficiency, enhance operational performance, and reduce the environmental impact of our projects. Our commitment to research and development enables us to stay ahead in providing sustainable solutions for the oil and gas sector.
            </>}
      />
{/* <InlineImageSection
        header="Safety and Compliance"
        img={img}
        content={<>

Sustainability is incomplete without safety and adherence to regulatory standards. Our robust safety protocols and compliance measures ensure that our projects are executed responsibly, protecting our workforce, communities, and the environment.
            </>}
      /> */}


      <section className={classes.SectionWrapper}>
        <ReverseContainer
          header=""
          desc={
            <strong className={classes.Strong}>
              At Arkhos Oil & Gas Ltd, sustainability is not just a goal; it is
              a fundamental principle that drives the way we plan, design, and
              deliver projects, ensuring a better future for all.
            </strong>
          }
          //   btnContent="Read the article on service delivery"
          img={project11}
          clicked={navigateOnclick.bind(null, "/enhanced-service-delivery")}
        />
      </section>
    </section>
  );
};

export default Sustanability;
