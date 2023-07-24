import React from "react";
import { Wrapper } from "./style";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Wrapper.NavbarItem className="logo">
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
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
