import React from "react";
import { Wrapper } from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <Wrapper.NavbarItem>
        <Wrapper.NavbarText>xayotbek-mamajonov</Wrapper.NavbarText>
      </Wrapper.NavbarItem>
      <Wrapper.NavbarItem className="active">
        <Wrapper.NavbarText>_hello</Wrapper.NavbarText>
      </Wrapper.NavbarItem>
      <Wrapper.NavbarItem>
        <Wrapper.NavbarText>_about-me</Wrapper.NavbarText>
      </Wrapper.NavbarItem>
      <Wrapper.NavbarItem>
        <Wrapper.NavbarText>_projects</Wrapper.NavbarText>
      </Wrapper.NavbarItem>
      <Wrapper.NavbarItem className="right">
        <Wrapper.NavbarText> _contact_me</Wrapper.NavbarText>
      </Wrapper.NavbarItem>
    </Wrapper>
  );
};

export default Navbar;
