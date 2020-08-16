import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
// import FileLoader from "../../components/file-loader/fileLoader.js";

import "./clothing-page.styles.scss";

gsap.registerPlugin(Draggable);

const ClothingPage = () => {
  var image = useRef(null);

  useEffect(() => {
    Draggable.create(image);
  });
  return (
    <div>
      <h1>ClothingPage</h1>

      <img
        ref={(el) => (image = el)}
        className="picture"
        src={require("../../assets/png-pictures/cloth1.png")}
      ></img>
    </div>
  );
};

export default ClothingPage;
