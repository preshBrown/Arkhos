import React from "react";

import img from "../DigImages/ServiceDelivery.jpg";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import classes from "./EnhancedServiceDelivery.module.css";

export const dropdownContent = [
  {
    id: 1,
    header: "Seamless Integration Across Services",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"Arkhos has also focused on streamlining its service integration by connecting various business functions—logistics, procurement, and customer service—into a single cohesive system. This unified platform enhances our ability to respond to customer needs rapidly, as all departments have access to shared data and insights, improving our coordination and decision-making process."
      },
    ],
  },
  {
    id: 2,
    header: "Real-Time Monitoring and Predictive Analytics",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Through the integration of IoT sensors and real-time monitoring systems, we are able to track the status of key operations, such as equipment performance and supply chain movements, in real time. This allows us to anticipate and address potential issues before they impact service delivery. Additionally, predictive analytics help us optimize resource allocation, ensuring that our clients' needs are met without delay",
      },
    ],
  },
  {
    id: 3,
    header: "Personalized Customer Experiences",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "By leveraging AI and machine learning algorithms, Arkhos has developed systems that provide tailored services based on customer behavior, preferences, and historical data. This customer-centric approach enhances our service delivery by ensuring that each client receives a solution that is specifically aligned with their unique requirements. Whether in project management or after-sales services, we deliver a highly personalized experience, increasing client satisfaction and long-term relationships.",
      },
    ],
  },
  {
    id: 4,
    header: "Automated Communication and Support",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"To streamline interactions with clients, we have deployed chatbots and AI-powered communication tools that provide immediate responses to client inquiries. These tools not only answer common questions but also direct clients to the appropriate department for more specialized assistance, ensuring quick resolutions to service-related issues"
      },
    ],
  },
  {
    id: 5,
    header: "Efficient Workflow Management",
    data: [
      {
        id: 1,
        subHeader: "",
        description:
          "Our use of automation in project management systems has improved internal workflows, reducing human errors and accelerating the service delivery process. By automating routine tasks such as scheduling, order tracking, and invoicing, we ensure that services are executed smoothly and efficiently, which ultimately benefits our clients by providing timely and accurate results",
      },
    ],
  },
];

const EnhancedServiceDelivery = () => {
  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Enhanced Service Delivery  "
        contents="At Arkhos, we have harnessed innovative technologies and methodologies to ensure our service delivery not only meets but exceeds the expectations of our clients. By implementing advanced solutions in our operations, we have optimized both the efficiency and the responsiveness of our service processes."
        img={img}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default EnhancedServiceDelivery;
