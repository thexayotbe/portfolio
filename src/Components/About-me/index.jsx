import React from "react";
import { Sections } from "../Generic/styles";
import Sidebar from "../Sidebar";
import Title from "../Generic/Title";
const AboutMe = () => {
  return (
    <Sections>
      <Sections.Item>
        <Sections.TopItem>
          <Title>personal-info</Title>
        </Sections.TopItem>
        <Sidebar />
      </Sections.Item>
      <Sections.Item>
        <Sections.TopItem></Sections.TopItem>
        <Sections.Scrool />
      </Sections.Item>
      <Sections.Item>
        <Sections.TopItem></Sections.TopItem>
        <Sections.Scrool />
      </Sections.Item>
    </Sections>
  );
};

export default AboutMe;
