import React from "react";
import DropdownCard from "./DropdownCard/DropdownCard";
import { useState } from "react";

const DropdownWrapper = (props) => {
  const [isDropOpen, setIsDropOpen] = useState("");

  const limitDropdown = (id) => {
    setIsDropOpen(id);
  };

  const closeLimitDropdown = () => {
    setIsDropOpen("");
  };

  return (
    <>

    {props.data.map( content => (
      <DropdownCard
      key={content.id}
        limitDropdown={limitDropdown}
        closeLimitDropdown={closeLimitDropdown}
        isDropOpen={isDropOpen}
        header={content.header}
        id={content.id}
        data={content.data}
      />
    ))}
      
    </>
  );
};

export default DropdownWrapper;
