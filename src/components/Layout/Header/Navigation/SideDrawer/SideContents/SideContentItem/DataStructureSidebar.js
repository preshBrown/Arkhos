import React from "react";
import { TbListDetails, TbSocial } from "react-icons/tb";
import {
  MdConstruction,
  MdDarkMode,
  MdEngineering,
  MdLocalShipping,
} from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FaArrowTrendUp, FaBattleNet, FaCircleInfo } from "react-icons/fa6";
import { FaHome, FaProjectDiagram, FaTruckMoving } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";

import { MdManageAccounts } from "react-icons/md";
import { IoIosColorPalette, IoLogoBuffer } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { AiFillBug, AiOutlineLogout } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import { GrVmMaintenance } from "react-icons/gr";
import { useSelector } from "react-redux";

// const theme = useSelector((state) => state.ui.theme);

const DataStructureSidebar = [
  {
    title: "Services & Expertise",
    icon: <TbListDetails />,
    childrens: [
      {
        title: "Engineering & Design",
        icon: <MdEngineering />,
        childrens: [
          {
            title: "Structural Work",
            path: "/structural-work",
          },
          {
            title: "M E P",
            path: "/plumbing",
          },
        ],
      },
      {
        title: "Procurement",
        icon: <FaTruckMoving />,
        childrens: [
          {
            title: "Diesel / Lubricant supply",
            path: "/d-l-s",
          },
          {
            title: "Offshore Supply",
            path: "/offsure-supply",
          },
        ],
      },
      {
        title: "Fabrication",
        icon: <MdConstruction />,
        childrens: [
          {
            title: "Pipeline Fabrication & Installation",
            path: "pipeline-fabrication-nstallation",
          },
          {
            title: "Construction & Fabrication",
            path: "Construction-fabrication",
          },
          {
            title: "Fabrication of Porta-Cabin",
            path: "porta-cabin",
          },
          {
            title: "Structural Work",
            path: "structural-work",
          },
        ],
      },
      {
        title: "Construction",
        icon: <LuConstruction />,
        childrens: [
          {
            title: "Construction & Fabrication",
            path: "Construction-fabrication",
          },
          {
            title: "Stockpiling",
            path: "stockpiling",
          },
          {
            title: "Pipeline Fabrication & Installation",
            path: "pipeline-fabrication-nstallation",
          },
        ],
      },
      {
        title: "Maintenance",
        icon: <GrVmMaintenance />,
        childrens: [
          {
            title: "Sandblasting & Painting",
            path: "sandblasting-and-painting",
          },
          {
            title: "Stockpilling",
            path: "stockpiling",
          },
          {
            title: "Porta-Cabin",
            path: "porta-cabin",
          },
        ],
      },
      {
        title: "Logistics / Marine Services",
        icon: <IoLogoBuffer />,
        childrens: [
          {
            title: "Logistics",
            path: "logistics",
          },
          {
            title: "Platform Supply Vessls",
            path: "platform-supply-vessls",
          },
          {
            title: "Crew Boat",
            path: "crewboat",
          },
        ],
      },
    ],
  },
  {
    title: "Projects",
    icon: <FaProjectDiagram />,
    path: "/projects",
  },
  {
    title: "Sustanability",
    icon: <ImProfile />,
    path: "/sustanability",
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp />,
    childrens: [
      {
        title: "Theme",
        icon: (
          <IoIosColorPalette
            // style={{ color: theme === "light" ? "yellow" : " rgb(9, 24, 9)" }}
          />
        ),
        childrens: [
          {
            title: "light",
            icon: <CiLight style={{ color: "white" }} size={17} />,
            type: "Theme",
          },
          {
            title: "dark",
            icon: <MdDarkMode style={{ color: "black" }} size={14.5} />,
            type: "Theme",
          },
        ],
      },
      {
        title: "Language",
        icon: <FaLanguage />,
        childrens: [
          {
            title: "Eng",
            type: "Language",
          },
          {
            title: "Ger",
            type: "Language",
          },
          {
            title: "Fre",
            type: "Language",
          },
          {
            title: "Esp",
            type: "Language",
          },
          {
            title: "Ita",
            type: "Language",
          },
          {
            title: "Chn",
            type: "Language",
          },
        ],
      },
    ],
  },
  {
    title: "Support",
    icon: <BiSupport />,
    path: "/support",
  },

  {
    title: "Report Bug",
    icon: <AiFillBug />,
    path: "/report-bug",
  },
];

export default DataStructureSidebar;
