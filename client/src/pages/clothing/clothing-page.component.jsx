import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import FileLoader from "../../components/file-loader/fileLoader.js";
import $ from "jquery";

import "./clothing-page.styles.css";

gsap.registerPlugin(Draggable);

const ClothingPage = () => {
  const pictureRef = useRef(null);

  useEffect(() => {
    Draggable.create(".draggable");
    // $(pictureRef).resizable();
  });
  return (
    <div>
      <h1>ClothingPage</h1>

      <img
        className="draggable resizable"
        src={require("./png-pictures/cloth1.png")}
      ></img>

      <img src={require("./png-pictures/cloth2.png")}></img>
      <FileLoader />
    </div>
  );
};

export default ClothingPage;
