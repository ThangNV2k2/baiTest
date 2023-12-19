import React from "react";
import "./Group.css";
export default function Group(props) {
  const { title, description, image } = props;
  return (
    <div className="group">
      <h3 className="title">{title}</h3>
      <div>
        <p>
          <img src={image} alt="contentImg" />
          {description}
        </p>
      </div>
    </div>
  );
}
