import React from "react";
import { Wrapper } from "./style";
import bg from "../../assets/images/mainBg.png";

const Home = () => {
  return (
    <Wrapper>
      <Wrapper.TextSide>
        <Wrapper.HelloText>Hi all. I am</Wrapper.HelloText>
        <Wrapper.Name>Xayot Mamajonov</Wrapper.Name>
        <Wrapper.Job> {">"} Front-end developer</Wrapper.Job>
      </Wrapper.TextSide>
      <Wrapper.ImgSide bg={bg}>
        <Wrapper.Project></Wrapper.Project>
      </Wrapper.ImgSide>
    </Wrapper>
  );
};

export default Home;
