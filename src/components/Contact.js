import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faComment } from "@fortawesome/free-solid-svg-icons";

const ContactSection = styled.div`
  margin: 30px 0 10px 0;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 0 0;
`;

const Txt = styled.p`
  margin-right: 20px;
  padding-top: 10px;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.a`
  padding: 10px;
  margin-right: 5px;
`;

const SmWrapper = styled.div``;

const SmTxt = styled.p`
  font-size: 14px;
  padding: 40px 40px 30px 40px;
  color: #9ea7aa;
`;

const SmContactText = styled.p`
  text-align: center;
`;

const SmIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactWrapper>
        <Txt>신랑에게 연락하기</Txt>
        <IconWrapper href="tel:010-1234-1234">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            color="#999"
            size="lg"
          ></FontAwesomeIcon>
        </IconWrapper>
        <IconWrapper href="sms:+010-1234-1234">
          <FontAwesomeIcon
            icon={faComment}
            color="#999"
            size="lg"
          ></FontAwesomeIcon>
        </IconWrapper>
      </ContactWrapper>
      <ContactWrapper>
        <Txt>신부에게 연락하기</Txt>
        <IconWrapper href="tel:010-1234-1234">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            color="#999"
            size="lg"
          ></FontAwesomeIcon>
        </IconWrapper>
        <IconWrapper href="sms:+010-1234-1234">
          <FontAwesomeIcon
            icon={faComment}
            color="#999"
            size="lg"
          ></FontAwesomeIcon>
        </IconWrapper>
      </ContactWrapper>
      <ContactWrapper>
        <SmWrapper>
          <SmTxt>신랑 측 혼주</SmTxt>
          <SmContactText>신랑 아버지</SmContactText>
          <SmIconWrapper>
            <IconWrapper href="tel:010-1234-1234">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                color="#999"
                size="lg"
              ></FontAwesomeIcon>
            </IconWrapper>
            <IconWrapper href="sms:+010-1234-1234">
              <FontAwesomeIcon
                icon={faComment}
                color="#999"
                size="lg"
              ></FontAwesomeIcon>
            </IconWrapper>
          </SmIconWrapper>
          <SmContactText>신랑 어머니</SmContactText>
          <SmIconWrapper>
            <IconWrapper href="tel:010-1234-1234">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                color="#999"
                size="lg"
              ></FontAwesomeIcon>
            </IconWrapper>
            <IconWrapper href="sms:+010-1234-1234">
              <FontAwesomeIcon
                icon={faComment}
                color="#999"
                size="lg"
              ></FontAwesomeIcon>
            </IconWrapper>
          </SmIconWrapper>
        </SmWrapper>
        <SmWrapper>
          <SmTxt>신부 측 혼주</SmTxt>
          <SmContactText>신부 아버지</SmContactText>
          <SmIconWrapper>
            <IconWrapper href="tel:010-1234-1234">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                color="#999"
                size="lg"
              ></FontAwesomeIcon>
            </IconWrapper>
            <IconWrapper href="sms:+010-1234-1234">
              <FontAwesomeIcon
                icon={faComment}
                color="#999"
                size="lg"
              ></FontAwesomeIcon>
            </IconWrapper>
          </SmIconWrapper>
          <SmContactText>신부 어머니</SmContactText>
          <SmIconWrapper>
            <IconWrapper href="tel:010-1234-1234">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                color="#999"
                size="lg"
              ></FontAwesomeIcon>
            </IconWrapper>
            <IconWrapper href="sms:+010-1234-1234">
              <FontAwesomeIcon
                icon={faComment}
                color="#999"
                size="lg"
              ></FontAwesomeIcon>
            </IconWrapper>
          </SmIconWrapper>
        </SmWrapper>
      </ContactWrapper>
    </ContactSection>
  );
};

export default Contact;
