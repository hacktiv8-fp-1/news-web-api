import React from "react";

export default function Button({ type, onClick, children }) {
  return (
    <button type={type} className="bg-slate-600" onClick={onClick}>
      {children}
    </button>
  );
}
