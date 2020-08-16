import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
// import FileLoader from "../../components/file-loader/fileLoader.js";

import "./clothing-page.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/png-pictures/shopping-bag2.svg";

gsap.registerPlugin(Draggable);

const ClothingPage = () => {
  var image = useRef(null);

  useEffect(() => {
    Draggable.create(".image");
  });
  return (
    <div>
      <h1>ClothingPage</h1>

      <ShoppingIcon className="image" />
    </div>
  );
};

export default ClothingPage;
