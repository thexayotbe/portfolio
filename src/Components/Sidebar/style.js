import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0%;
  color: #607b96;
  transition: all ease-in 0.3s;
  .active {
    color: #fff;
  }

  .activeIcon {
    transform: rotate(90deg);
  }
`;
Wrapper.Menu = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  align-items: center;
  gap: 13px;
  padding-left: 18px;
  cursor: pointer;
`;
Wrapper.MenuIcon = styled.img``;
Wrapper.MenuTitle = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
Wrapper.Files = styled.div``;
Wrapper.FileItem = styled.div`
  display: flex;
  gap: 13px;
  padding-left: 38px;
  cursor: pointer;
`;
