import { styled } from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.TextSide = styled.div`
  width: 500px;
`;
Wrapper.HelloText = styled.p`
  color: #e5e9f0;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;
Wrapper.Name = styled.h3`
  color: #e5e9f0;
  font-family: Fira Code;
  font-size: 52px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
Wrapper.Job = styled.h3`
  color: #4d5bce;
  font-family: Fira Code;
  font-size: 32px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;
Wrapper.ImgSide = styled.div`
  width: 700px;
  height: 700px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.Project = styled.div`
  width: 510px;
  height: 475px;
  border-radius: 8px;
  border: 1px solid #0c1616;
  background: linear-gradient(
    154deg,
    rgba(23, 85, 83, 0.4) 0%,
    rgba(67, 217, 173, 0.02) 100%
  );
  box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.3) inset;
  backdrop-filter: blur(18px);
`;
