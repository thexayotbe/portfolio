import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 56px;
  align-items: center;
  border-bottom: 1px solid #607b96;
  .right {
    margin-left: auto;
    border: none;
    border-left: 1px solid #607b96;
  }
  .active {
    border-bottom: 3px solid #fea55f;
  }
  .logo {
    text-align: left;
    width: 330px;
  }
`;
Wrapper.NavbarItem = styled.div`
  border-right: 1px solid #607b96;
  height: 56px;
  padding: 0 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
Wrapper.NavbarText = styled.h3`
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;
