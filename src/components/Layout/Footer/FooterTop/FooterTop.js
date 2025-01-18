import React from "react";

import { RiVerifiedBadgeLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiWineBottle } from "react-icons/gi";

import { FaYoutube } from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import classes from "./FooterTop.module.css";
import FooterTopItem from "./FooterTopItem/FooterTopItem";
import Subscribe from "./FooterTopItem/Subscribe/Subscribe";
import { Link } from "react-router-dom";
import CompanyProfile from "../../../CompanyProfile/CompanyProfile";
import XStaggered from "../../../Motion/XStaggered/XStaggered";

const FooterTop = () => {
  const extra = [
    {
      id: 1,
      to: "#",
      data: "Accessibility",
    },
    {
      id: 2,
      to: "/terms-and-conditions",
      data: "Terms & conditions",
    },
    {
      id: 3,
      to: "/privacy-policy",
      data: "Privacy notices",
    },
    // {
    //   id: 4,
    //   to: "#",
    //   data: "Contact us",
    // },
  ];

  const footerData = [
    {
      id: 1,
      header: "Explore Arkhos.com",
      itemsData: [
        {
          id: 1,
          to: "/code-ethics",
          data: "Our approuch",
        },
        {
          id: 2,
          to: "/our-values",
          data: "Our values",
        },
        {
          id: 3,
          to: "#",
          data: "Our history",
        },
        {
          id: 4,
          to: "#",
          data: "Our  stories",
        },
        {
          id: 5,
          to: "#",
          data: "Annual Reports & publications",
        },
      ],
    },

    {
      id: 2,
      header: "Can we help?",
      itemsData: [
        {
          id: 1,
          to: "/contact",
          data: "Contact us",
        },
        {
          id: 2,
          to: "/about",
          data: "About Us",
        },
        {
          id: 3,
          to: "/helpline",
          data: "Helpline",
        },
      ],
    },

    {
      id: 3,
      header: "Connect with us",
      itemsData: [
        {
          id: 1,
          to: "#",
          icon: <FaSquareInstagram size={15} />,
          data: "Instagram",
        },
        {
          id: 2,
          to: "#",
          icon: <FaYoutube size={15} />,
          data: "YouTube",
        },
        {
          id: 3,
          to: "#",
          icon: <FaFacebookF size={15} />,
          data: "Facebook",
        },

        {
          id: 4,
          to: "#",
          icon: <FaLinkedinIn size={15} />,
          data: "LinkedIn",
        },
        {
          id: 5,
          to: "#",
          icon: <FaXTwitter size={15} />,
          data: "X",
        },
      ],
    },
  ];

  return (
    <div className={classes.FooterTop}>
      <Subscribe />

      <article className={classes.FooterContent}>
        {footerData.map((contents) => (
          <FooterTopItem
            header={contents.header}
            itemsData={contents.itemsData}
          />
        ))}
      </article>

      <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
        <XStaggered index={0.5}>
          <CompanyProfile className={classes.FooterCmpyProfile} />
        </XStaggered>
      </ul>
      <ul className={classes.Extra}>
        {extra.map((contents, index) => (
          <XStaggered index={index}>
            <Link to={contents.to} className={classes.extraItem}>
              {contents.data}
            </Link>
           </XStaggered>
        ))}
      </ul>
    </div>
  );
};

export default FooterTop;
