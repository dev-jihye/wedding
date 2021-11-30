import { useState } from "react";
import { ContentContainer, Title } from "sharedStyles";
import styled from "styled-components";
import Pic1 from "../assets/1.jpeg";
import Pic2 from "../assets/2.jpeg";
import Pic3 from "../assets/3.jpeg";
import Pic4 from "../assets/4.jpeg";
import Pic5 from "../assets/5.jpeg";
import Pic6 from "../assets/6.jpeg";
import Pic7 from "../assets/7.jpeg";
import Pic8 from "../assets/8.jpeg";
import Pic9 from "../assets/9.jpg";
import Modal from "./Modal";

const GallerySection = styled.div`
  padding: 20px 0;
`;

const ImgWrapper = styled.div`
  padding: 0 15px;
`;

const ImgRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const Img = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 100%;
  min-height: 100px;
`;

const Gallery = () => {
  const [src, setSrc] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const onImgClick = (src) => {
    setSrc(src);
    setModalOpen(true);
  };

  return (
    <GallerySection>
      <ContentContainer>
        <Title>Gallery</Title>
        <ImgWrapper>
          <ImgRow>
            <Img
              src={Pic1}
              onClick={() => {
                onImgClick(Pic1);
              }}
            />
            <Img
              src={Pic2}
              onClick={() => {
                onImgClick(Pic2);
              }}
            />
            <Img
              src={Pic3}
              onClick={() => {
                onImgClick(Pic3);
              }}
            />
          </ImgRow>
          <ImgRow>
            <Img
              src={Pic4}
              onClick={() => {
                onImgClick(Pic4);
              }}
            />
            <Img
              src={Pic5}
              onClick={() => {
                onImgClick(Pic5);
              }}
            />
            <Img
              src={Pic6}
              onClick={() => {
                onImgClick(Pic6);
              }}
            />
          </ImgRow>
          <ImgRow>
            <Img
              src={Pic7}
              onClick={() => {
                onImgClick(Pic7);
              }}
            />
            <Img
              src={Pic8}
              onClick={() => {
                onImgClick(Pic8);
              }}
            />
            <Img
              src={Pic9}
              onClick={() => {
                onImgClick(Pic9);
              }}
            />
          </ImgRow>
        </ImgWrapper>
      </ContentContainer>
      <Modal src={src} modalOpen={modalOpen} />
    </GallerySection>
  );
};

export default Gallery;
