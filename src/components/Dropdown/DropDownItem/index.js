import React from "react";
import { Dropdown } from "flowbite-react";

export default function DropDownItem({ key, onClick, children }) {
  return (
    <Dropdown.Item key={key} onClick={onClick}>
      {children}
    </Dropdown.Item>
  );
}
