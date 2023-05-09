import React from "react";
import { Dropdown } from "flowbite-react";
import DropDownItem from "./DropDownItem";

export default function DropDown({ lists, onClick }) {
  return (
    <Dropdown label="Dropdown">
      {lists?.map((item, i) => (
        <DropDownItem key={i} onClick={() => onClick(item)}>
          {item?.value}
        </DropDownItem>
      ))}
    </Dropdown>
  );
}
