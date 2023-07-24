import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #607b96;
  .right {
    margin-left: auto;
    border: none;
    border-left: 1px solid #607b96;
  }
`;
Wrapper.Item = styled.div`
  border-right: 1px solid #607b96;
  height: 50px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;
Wrapper.Icon = styled.img``;
