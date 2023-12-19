import React from "react";
import Element from "./element/Element";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Element content="Home" />
      <Element content="Services" />
      <Element content="News" />
      <Element content="Blog" />
      <Element content="Contact" />
    </div>
  );
}
