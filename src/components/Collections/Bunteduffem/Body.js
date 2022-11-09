import React from "react";
import styled from "styled-components";

import MenuManager from "../../ProjectMenu/MenuManager";
import Menu from "../../ProjectMenu";
import ExploreButton from "../../ProjectMenu/ExploreButton/ExploreButton";

import L11 from "../../../assets/images/Bunteduffem/candidates/L11.jpg";
import L12 from "../../../assets/images/Bunteduffem/candidates/L12.jpg";
import L21 from "../../../assets/images/Bunteduffem/candidates/L21.jpg";
import L22 from "../../../assets/images/Bunteduffem/candidates/L22.jpg";
import L31 from "../../../assets/images/Bunteduffem/candidates/L31.jpg";
import L32 from "../../../assets/images/Bunteduffem/candidates/L32.jpg";
import L41 from "../../../assets/images/Bunteduffem/candidates/L41.jpg";
import L42 from "../../../assets/images/Bunteduffem/candidates/L42.jpg";
import L51 from "../../../assets/images/Bunteduffem/candidates/L51.jpg";
import L52 from "../../../assets/images/Bunteduffem/candidates/L52.jpg";
import L61 from "../../../assets/images/Bunteduffem/candidates/L61.jpg";
import L62 from "../../../assets/images/Bunteduffem/candidates/L62.jpg";
import L71 from "../../../assets/images/Bunteduffem/candidates/L71.jpg";
import L72 from "../../../assets/images/Bunteduffem/candidates/L72.jpg";
import L81 from "../../../assets/images/Bunteduffem/candidates/L81.jpg";
import L82 from "../../../assets/images/Bunteduffem/candidates/L82.jpg";
import L91 from "../../../assets/images/Bunteduffem/candidates/L91.jpg";
import L92 from "../../../assets/images/Bunteduffem/candidates/L92.jpg";
import L101 from "../../../assets/images/Bunteduffem/candidates/L101.jpg";
import L102 from "../../../assets/images/Bunteduffem/candidates/L102.jpg";
import L111 from "../../../assets/images/Bunteduffem/candidates/L111.jpg";
import L112 from "../../../assets/images/Bunteduffem/candidates/L112.jpg";
import L121 from "../../../assets/images/Bunteduffem/candidates/L121.jpg";
import L122 from "../../../assets/images/Bunteduffem/candidates/L122.jpg";
import L131 from "../../../assets/images/Bunteduffem/candidates/L131.jpg";
import L132 from "../../../assets/images/Bunteduffem/candidates/L132.jpg";
import L141 from "../../../assets/images/Bunteduffem/candidates/L141.jpg";
import L142 from "../../../assets/images/Bunteduffem/candidates/L142.jpg";
import L151 from "../../../assets/images/Bunteduffem/candidates/L151.jpg";
import L152 from "../../../assets/images/Bunteduffem/candidates/L152.jpg";
import L161 from "../../../assets/images/Bunteduffem/candidates/L161.jpg";
import L162 from "../../../assets/images/Bunteduffem/candidates/L162.jpg";

export const Gallery = styled.section`
  width: 100%;
  background: #000;
  overflow: hidden;

  display: flex;
  flex-wrap: wrap;
  padding-right: 250px;
  padding-left: 250px;

  img {
    height: 100vh;
    width: 50%;
    object-fit: cover;
  }
`;

const Body = () => {
  return (
    <>
      <MenuManager>
        <Menu />
        <Gallery>
          <img src={L11} />
          <img src={L12} />
          <img src={L21} />
          <img src={L22} />
          <img src={L31} />
          <img src={L32} />
          <img src={L41} />
          <img src={L42} />
          <img src={L51} />
          <img src={L52} />
          <img src={L61} />
          <img src={L62} />
          <img src={L71} />
          <img src={L72} />
          <img src={L81} />
          <img src={L82} />
          <img src={L91} />
          <img src={L92} />
          <img src={L101} />
          <img src={L102} />
          <img src={L111} />
          <img src={L112} />
          <img src={L121} />
          <img src={L122} />
          <img src={L131} />
          <img src={L132} />
          <img src={L141} />
          <img src={L142} />
          <img src={L151} />
          <img src={L152} />
          <img src={L161} />
          <img src={L162} />
        </Gallery>
        <ExploreButton invert={true} />
      </MenuManager>
    </>
  );
};

export default Body;
