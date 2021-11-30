import BgImg from "../assets/bg2.jpeg";
import styled from "styled-components";

const OpenSection = styled.div`
  position: relative;
`;

const Img = styled.div`
  background: url(${BgImg}) center;
  background-size: cover;
  height: 100vh;
`;

const Title = styled.h2`
  font-family: "Noto Serif KR", serif;
  font-weight: 300;
  position: absolute;
  top: 160px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title2 = styled(Title)`
  top: 190px;
  font-size: 24px;
  color: #ad8ea6;
`;

const Title3 = styled(Title)`
  top: 220px;
`;

const SubTitle = styled.p`
  position: absolute;
  bottom: 37px;
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #fff;
`;

const SubTitle2 = styled(SubTitle)`
  bottom: 17px;
`;

const Opening = () => {
  return (
    <OpenSection>
      <Img />
      <Title>HANBIN</Title>
      <Title2>&amp;</Title2>
      <Title3>JIHYE</Title3>
      <SubTitle>2023. 3. 19 SAT PM 12:30</SubTitle>
      <SubTitle2>더뉴 컨벤션 르노브홀</SubTitle2>
    </OpenSection>
  );
};

export default Opening;
