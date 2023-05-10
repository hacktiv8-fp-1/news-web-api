import React from "react";

export default function Button({ className, type, onClick, children }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
