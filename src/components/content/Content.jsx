import React from "react";
import "./Content.css";
import contentImage from "../../assets/images/content/logoNCC1.png";
import img1 from "../../assets/images/content/css-icon1.png";
import img2 from "../../assets/images/content/html-icon1.png";
import img3 from "../../assets/images/content/url-icon1.png";
import Group from "./group/Group";
export default function Content() {
  const title = "Lorem ipsum dolor sit amet?";
  const des =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.";
  return (
    <div className="content">
      <div className="img">
        <img src={contentImage} alt="contentImg" />
      </div>
      <div className="description">
        <h3 className="title">Lorem ipsum dolor sit asmet?</h3>
        <span className="des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </span>
      </div>
      <div className="groups">
        <Group title={title} image={img1} description={des} />
        <Group title={title} image={img2} description={des} />
        <Group title={title} image={img3} description={des} />
      </div>
    </div>
  );
}
