import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faSubway,
  faRoute,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ContentContainer, Title } from "sharedStyles";

const LocationSection = styled.div`
  padding: 30px 15px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
`;

const LocationInfo = styled.div`
  padding: 10px 0;
`;

const LocationName = styled.h3``;

const LocationDetail = styled.p`
  font-size: 13px;
  color: #6c6c6c;
  margin: 5px 0;
`;

const IconBox = styled.div`
  margin-bottom: 10px;
`;

const IconWrapper = styled.a`
  background: #808e95;
  border-radius: 50%;
  padding: 10px;
  margin: 5px;
`;

const Location = () => {
  const onClickNav = () => {
    window.Kakao.Navi.start({
      name: "더뉴 컨벤션",
      x: 126.83688151947351,
      y: 37.556261894941336,
      coordType: "wgs84",
    });
  };

  return (
    <LocationSection>
      <ContentContainer>
        <Title>Location</Title>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.938756142339!2d126.83479841520047!3d37.55650667979986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c68bfb5c69f%3A0x220458f873585ae1!2z642U64m07Luo67Kk7IWY7Juo65Sp!5e0!3m2!1sko!2skr!4v1638077505542!5m2!1sko!2skr"
          allowfullscreen=""
          loading="lazy"
        ></Iframe>
        <LocationInfo>
          <LocationName>더뉴 컨벤션</LocationName>
          <LocationDetail>서울특별시 강서구 내발산동 655</LocationDetail>
          <LocationDetail>T. 1661-3303</LocationDetail>
        </LocationInfo>
        <IconBox>
          <IconWrapper href="tel:010-1234-1234">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="#fff" />
          </IconWrapper>
          <IconWrapper href="https://map.naver.com/v5/bus/bus-route/%EB%B0%9C%EC%82%B0%EC%97%AD?c=14119499.5167336,4517256.9217911,17,0,0,0,dh">
            <FontAwesomeIcon icon={faBus} size="lg" color="#fff" />
          </IconWrapper>
          <IconWrapper href="https://map.naver.com/v5/subway/1000/-/515/-?c=14119422.2944028,4516954.0285369,13,0,0,0,dh">
            <FontAwesomeIcon icon={faSubway} size="lg" color="#fff" />
          </IconWrapper>
          <IconWrapper
            style={{
              cursor: "pointer",
            }}
            onClick={onClickNav}
          >
            <FontAwesomeIcon icon={faRoute} size="lg" color="#fff" />
          </IconWrapper>
        </IconBox>
      </ContentContainer>
    </LocationSection>
  );
};

export default Location;
