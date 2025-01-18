import React from "react";
import img from "../Images/body intro.png";
import classes from "./WhyChooseUs.module.css";
import { MdHighQuality, MdPayment } from "react-icons/md";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import { GiCardPickup, GiRelationshipBounds } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import { IoPricetag } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import { FaConnectdevelop, FaHelmetSafety } from "react-icons/fa6";
import Reveal from "../../../components/Motion/Reveal/Reveal";

const WhyChooseUs = () => {
  const items = [
    {
      id: 1,
      header: " Unmatched Expertise",
      icon: (
        <>
          <FaConnectdevelop size={26} />
        </>
      ),
      description: (
        <>
          With years of experience in the oil and gas sector, we bring
          unparalleled technical knowledge and industry insights to every
          project.
        </>
      ),
    },
    {
      id: 2,
      header: "Commitment to Quality",
      icon: (
        <>
          <MdHighQuality size={26} />
        </>
      ),
      description: (
        <>
          We deliver exceptional results by adhering to the highest industry
          standards and ensuring meticulous attention to detail in every
          operation.
        </>
      ),
    },
    {
      id: 3,
      header: "	Innovative Solutions",
      icon: (
        <>
          <GiCardPickup size={26} />
        </>
      ),
      description:
        "Leveraging cutting-edge technology and innovative approaches, we provide tailored solutions to meet the unique needs of our clients.",
    },
    {
      id: 4,
      header: "Reliable and Timely Delivery.",
      icon: (
        <>
          <IoIosTimer size={26} />
        </>
      ),
      description: (
        <>
          Our proven track record of completing projects on schedule and within
          budget makes us a dependable partner for your operations.
        </>
      ),
    },
    {
      id: 5,
      header: "	Safety and Compliance",
      icon: (
        <>
          <FaHelmetSafety size={26} />
        </>
      ),
      description: (
        <>
          We prioritize safety in all aspects of our work, ensuring strict
          compliance with regulatory requirements and environmental standards.
        </>
      ),
    },
    {
      id: 6,
      header: "Comprehensive Service Offering",
      icon: (
        <>
          <GrCompliance size={26} />{" "}
        </>
      ),
      description: (
        <>
          From engineering and procurement to pipeline maintenance and
          stockpiling, our wide range of services ensures we can handle diverse
          client needs.
        </>
      ),
    },
    {
      id: 7,
      header: "Client-Centric Approach",
      icon: (
        <>
          <GiRelationshipBounds size={26} />{" "}
        </>
      ),
      description: (
        <>
          We build lasting relationships by putting our clients first,
          understanding their goals, and delivering solutions that exceed
          expectations.
        </>
      ),
    },
  ];

  return (
    <>
      <article style={{ textAlign: "center", paddingTop: "25px" }}>
        <h1 className={classes.AboutHeaders}>
        <Reveal cover>
        
          Why Choose Us
        </Reveal>
        </h1>
        {/* <p>
          Our main goal is to ensure you buy original drinks. In addition to the
          peace of mind we provide when you buy original drinks,
        </p> */}
      </article>

      <article className={classes.WhyChooseUs}>
        {items.map((item) => (
          <div key={item.id} className={classes.Item}>
            <header>
            <Reveal>
        
              <span style={{ verticalAlign: "middle" }}> {item.icon}</span>{" "}
              <span>{item.header}</span>
        </Reveal>
            </header>
            <p>
            <Reveal>
        
              {item.description}
        </Reveal>
            </p>
          </div>
        ))}
      </article>

      <article className={classes.Diff}>
        <div className={classes.DiffImgWrapper}>
          <img src={img} alt="Differences" />
        </div>
        <h1 className={classes.AboutHeaders}>
        <Reveal cover>
          What Makes Us Different
        </Reveal>
        </h1>
        <p style={{ padding: "10px" }}>
        <Reveal>
        
          At Arkhos Oil & Gas Ltd, we stand out by delivering unmatched
          expertise, innovative solutions, and unwavering commitment to
          excellence in the oil and gas sector. Our ability to combine
          industry-leading technology with a deep understanding of client needs
          sets us apart. We prioritize innovation, leveraging digital
          technologies to enhance efficiency, safety, and sustainability in all
          our operations.
          <br /> <br />
        </Reveal>
        <Reveal>
        
          What truly differentiates us is our client-centric approach. We
          understand that each project is unique, and we work closely with our
          clients to develop tailored solutions that address their specific
      </Reveal>
        </p>
      </article>
    </>
  );
};

export default WhyChooseUs;
