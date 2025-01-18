import React from "react";

import img from "../DigImages/AVRV.jpg";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import classes from "./ARVR.module.css";

export const dropdownContent = [
  {
    id: 1,
    header: "1.	Immersive Emergency Simulations",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Our VR platforms simulate high-risk scenarios such as gas leaks, fires, and equipment malfunctions, allowing employees to practice emergency response protocols without facing real-world hazards. This hands-on training boosts confidence and ensures preparedness for critical situations, mirroring the actual challenges faced in the oil and gas sector.",
      },
    ],
  },
  {
    id: 2,
    header: "Enhanced Skill Retention",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "The interactive nature of AR/VR fosters emotional and cognitive engagement, reinforcing learning through real-world replication. Workers experience heightened awareness and problem-solving during these sessions, which translates into improved long-term performance on the job.",
      },
    ],
  },
  {
    id: 3,
    header: "Efficient and Scalable Training",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"By utilizing AR/VR, we have streamlined the training process, delivering consistent and repeatable training experiences globally. Whether addressing routine operations or complex offshore activities, these tools ensure that every team member receives high-quality training tailored to their role."
      },
    ],
  },
  {
    id: 4,
    header: "Collaborative Learning Environments",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"Arkhos fosters teamwork through collaborative VR sessions. Employees participate in role-based exercises, such as coordinated responses to simulated pipeline malfunctions or equipment breakdowns. This teamwork-centric approach enhances communication, problem-solving, and leadership skills across our workforce."
      },
    ],
  },
  {
    id: 5,
    header: "Safety-Focused Training with Sensory Feedback",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"With AR/VR systems offering sensory inputs like vibrations and environmental changes, our teams gain a realistic understanding of on-site conditions. These simulations prepare them for critical tasks, from handling volatile materials to navigating offshore platforms under adverse weather conditions."
      },
    ],
  },
];

const ARVR = () => {
  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Training Through AR/VR at Arkhos Oil and Gas Limited"
        contents="At Arkhos, the integration of Augmented Reality (AR) and Virtual Reality (VR) technologies has redefined our approach to workforce training, ensuring our employees are equipped with cutting-edge skills in a safe, controlled, and immersive environment."
        img={img}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default ARVR;
