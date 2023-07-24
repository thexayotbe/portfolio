import React from "react";
import { TitleSection } from "../styles";
import bottom from "../../../assets/icons/bottom.svg";
const Title = ({ children }) => {
  return (
    <TitleSection>
      {" "}
      <TitleSection.Icon src={bottom} />
      {children}
    </TitleSection>
  );
};

export default Title;
