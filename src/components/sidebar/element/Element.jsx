import React from "react";
import "./Element.css";
export default function Element(props) {
  const { content } = props;
  return (
    <div className="element">
      <p>{content}</p>
    </div>
  );
}
