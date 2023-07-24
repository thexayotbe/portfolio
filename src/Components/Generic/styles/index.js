import { styled } from "styled-components";

export const Container = styled.div`
  width: 1450px;
  min-height: 750px;
  background-color: #011627;
  border-radius: 8px;
  border: 1px solid #607b96;
`;
export const Sections = styled.div`
  width: 100%;
  height: 800px;
  display: grid;
  grid-template-columns: 330px 559px 560px;
`;
Sections.Item = styled.div`
  border: 1px solid #607b96;
  height: 800px;
`;
Sections.TopItem = styled.div`
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #607b96;
  direction: flex;
  align-items: center;
`;
Sections.Scrool = styled.div`
  height: 760px;
  width: 25px;
  border-left: 1px solid #607b96;
  float: right;
`;
export const TitleSection = styled.h3`
  display: flex;
  justify-content: left;
  padding-left: 15px;
  gap: 10px;
  width: 100%;
  height: 40px;
  align-items: center;
  color: #fff;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
TitleSection.Icon = styled.img``;
