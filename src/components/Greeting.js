import { TopDownPadding } from "sharedStyles";
import styled from "styled-components";
import FImg from "../assets/flower4.png";

const GreetingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffcccb;
  padding-bottom: 50px;
`;

const FlowerImg = styled.div`
  background: url(${FImg}) center;
  width: 100px;
  height: 80px;
  background-size: cover;
  margin: 10px 0;
`;

const Txt = styled.p`
  font-family: "Noto Serif KR", serif;
  letter-spacing: -0.05rem;
  width: 100%;
  text-align: center;
  margin: 10px 0;
`;

const Greeting = () => {
  return (
    <GreetingSection>
      <FlowerImg />
      <Txt>서로가 마주보며 다져온 사랑을</Txt>
      <Txt>이제 함께 한 곳을 바라보며</Txt>
      <Txt>걸어갈 수 있는 큰 사랑으로 키우고자 합니다.</Txt>
      <Txt>저희 두 사람이 사랑의 이름으로</Txt>
      <Txt>지켜나갈 수 있게 앞날을</Txt>
      <Txt>축복해 주시면 감사하겠습니다.</Txt>
    </GreetingSection>
  );
};

export default Greeting;
