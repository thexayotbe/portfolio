import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { Wrapper } from "./style";
import folder1 from "../../assets/icons/folder1.svg";
import folder2 from "../../assets/icons/folder2.svg";
import folder3 from "../../assets/icons/folder3.svg";
import right from "../../assets/icons/right.svg";
import fileIcon from "../../assets/icons/file.svg";

const Sidebar = () => {
  const [active, setActive] = useState("");

  return (
    <Wrapper>
      <Wrapper.Menu
        onClick={() => setActive(1)}
        className={active === 1 && "active"}>
        <Wrapper.MenuIcon
          src={right}
          className={active === 1 && "activeIcon"}
        />
        <Wrapper.MenuIcon src={folder1} />
        <Wrapper.MenuTitle>bio</Wrapper.MenuTitle>
      </Wrapper.Menu>
      {active === 1 && (
        <Wrapper.Files>
          <Wrapper.FileItem>
            <Wrapper.MenuIcon src={fileIcon} />
            bio.txt
          </Wrapper.FileItem>
          <Wrapper.FileItem>
            <Wrapper.MenuIcon src={fileIcon} />
            bio.txt
          </Wrapper.FileItem>
        </Wrapper.Files>
      )}
      <Wrapper.Menu
        onClick={() => setActive(2)}
        className={active === 2 && "active"}>
        <Wrapper.MenuIcon
          src={right}
          className={active === 2 && "activeIcon"}
        />
        <Wrapper.MenuIcon src={folder2} />
        <Wrapper.MenuTitle>interests</Wrapper.MenuTitle>
      </Wrapper.Menu>
      {active == 2 && (
        <Wrapper.Files>
          <Wrapper.FileItem>
            <Wrapper.MenuIcon src={fileIcon} />
            interests.txt
          </Wrapper.FileItem>
        </Wrapper.Files>
      )}
      <Wrapper.Menu
        onClick={() => setActive(3)}
        className={active === 3 && "active"}>
        <Wrapper.MenuIcon
          src={right}
          className={active === 3 && "activeIcon"}
        />
        <Wrapper.MenuIcon src={folder3} />
        <Wrapper.MenuTitle>education</Wrapper.MenuTitle>
      </Wrapper.Menu>
      {active == 3 && (
        <Wrapper.Files>
          <Wrapper.FileItem>
            <Wrapper.MenuIcon src={fileIcon} />
            high-school.txt
          </Wrapper.FileItem>
        </Wrapper.Files>
      )}
    </Wrapper>
  );
};

export default Sidebar;
