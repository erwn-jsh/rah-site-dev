import React from "react";
import styled from "styled-components";

import L11 from "../../../assets/images/Transfigure/compressed/L11.jpg";
import L12 from "../../../assets/images/Transfigure/compressed/L12.jpg";
import L13 from "../../../assets/images/Transfigure/compressed/L13.jpg";
import L21 from "../../../assets/images/Transfigure/compressed/L21.jpg";
import L22 from "../../../assets/images/Transfigure/compressed/L22.jpg";
import L23 from "../../../assets/images/Transfigure/compressed/L23.jpg";
import L31 from "../../../assets/images/Transfigure/compressed/L31.jpg";
import L32 from "../../../assets/images/Transfigure/compressed/L32.jpg";
import L33 from "../../../assets/images/Transfigure/compressed/L33.jpg";
import L41 from "../../../assets/images/Transfigure/compressed/L41.jpg";
import L42 from "../../../assets/images/Transfigure/compressed/L42.jpg";
import L43 from "../../../assets/images/Transfigure/compressed/L43.jpg";
import L51 from "../../../assets/images/Transfigure/compressed/L51.jpg";
import L52 from "../../../assets/images/Transfigure/compressed/L52.jpg";
import L61 from "../../../assets/images/Transfigure/compressed/L61.jpg";
import L62 from "../../../assets/images/Transfigure/compressed/L62.jpg";
import L63 from "../../../assets/images/Transfigure/compressed/L63.jpg";
import L71 from "../../../assets/images/Transfigure/compressed/L71.jpg";
import L72 from "../../../assets/images/Transfigure/compressed/L72.jpg";
import L73 from "../../../assets/images/Transfigure/compressed/L73.jpg";

const GallerySection = styled.section`
  background: #000000;
  display: flex;
  padding-right: 80px;
  padding-left: 80px;
  flex-wrap: wrap;

  transition: all 0.5s;

  img {
    width: 33%;
  }

  img:nth-of-type(14) {
    width: 66%;
  }
`;

const Gallery = () => {
  return (
    <>
      <GallerySection>
        <img loading="lazy" src={L11} />
        <img loading="lazy" src={L12} />
        <img loading="lazy" src={L13} />
        <img loading="lazy" src={L21} />
        <img loading="lazy" src={L22} />
        <img loading="lazy" src={L23} />
        <img loading="lazy" src={L31} />
        <img loading="lazy" src={L32} />
        <img loading="lazy" src={L33} />
        <img loading="lazy" src={L41} />
        <img loading="lazy" src={L42} />
        <img loading="lazy" src={L43} />
        <img loading="lazy" src={L51} />
        <img loading="lazy" src={L52} />
        <img loading="lazy" src={L61} />
        <img loading="lazy" src={L62} />
        <img loading="lazy" src={L63} />
        <img loading="lazy" src={L71} />
        <img loading="lazy" src={L72} />
        <img loading="lazy" src={L73} />
      </GallerySection>
    </>
  );
};

export default Gallery;
