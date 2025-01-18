import React from "react";
import { FiDownload } from "react-icons/fi";

import classes from "./CompanyProfile.module.css";
import Button from "../Interfaces/Button/Button";

const CompanyProfile = (props) => (
  <a
    className={[classes.DownloadBtn, props.className].join(" ")}
    href="ARKHOS OIL & GAS PROFILE.pdf"
    download={true}
    // target="_blank"
    // rel="noreferrer"
  >
    Download company profile
    <span>
      <FiDownload size={19} />
    </span>
  </a>
);

export default CompanyProfile;
