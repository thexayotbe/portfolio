import React from "react";
import { Wrapper } from "./style";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import git from "../../assets/icons/git.svg";
const Footer = () => {
  return (
    <Wrapper>
      <Wrapper.Item>find me in:</Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Icon src={twitter} />
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Icon src={facebook} />
      </Wrapper.Item>
      <Wrapper.Item className="right">
        @thexayotbe
        <Wrapper.Icon src={git} />
      </Wrapper.Item>
    </Wrapper>
  );
};

export default Footer;
