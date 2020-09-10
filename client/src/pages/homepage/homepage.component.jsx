import React from "react";

import Directory from "../../components/directory/directory.component";
import FileLoader from "../../components/file-loader/fileLoader";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
