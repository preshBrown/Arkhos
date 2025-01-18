import React from "react";

import img from "../DigImages/Collaboration.jpg";
import HeaderLayout from "../../../../../components/Interested/General/HeaderLayout/HeaderLayout";
import DropdownWrapper from "../../../../../components/Interested/Digitalization/DropdownWrapper/DropdownWrapper";
import classes from "./RemoteMonitoring.module.css";

export const dropdownContent = [
  {
    id: 1,
    header: "Enhancing Safety",
    data: [
      {
        id: 1,
        subHeader: "",
        description:"Workers can monitor hazardous operations remotely, minimizing exposure to dangerous environments like high-pressure systems or areas with hazardous gases. This eliminates unnecessary travel to remote or risky sites, thereby reducing the chance of accidents during transit or on-site."
      },
      {
        id: 2,
        subHeader: "",
        description:"Real-time alerts from sensors can notify operators of anomalies, allowing for quick responses to potentially dangerous conditions before they escalate."
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
        description:"Remote systems collect extensive operational data, helping operators monitor environmental factors such as emissions and leaks. This aids in adhering to environmental standards and reduces ecological impact."
      },
      {
        id: 2,
        subHeader: "",
        description:"By identifying issues early, such as equipment failures that could cause spills, remote monitoring ensures operations remain eco-friendly and compliant with regulations."
      },

    ],
  },
];

const RemoteMonitoring = () => {
  return (
    <section className={classes.Digitalization}>
      <HeaderLayout
        subHeader="Remote Monitoring"
        contents="Remote monitoring plays a significant role in improving safety and environmental compliance in Arkhos operations. By leveraging advanced sensors, automation, and real-time data analytics, Arkhos minimize risks and adhere to stringent regulations."
        img={img}
      />

      <section className={classes.SectionWrapper}>
        <DropdownWrapper data={dropdownContent} />
      </section>
    </section>
  );
};

export default RemoteMonitoring;
