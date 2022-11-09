import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

import DownWriteArrow from "../../assets/lotties/down-white-arrow";
import AboutSectionText from "./AboutSectionText";

const AboutSect = styled.section`
  background: black;
  color: white;

  display: flex;
  flex-direction: column;

  iframe {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MarqueeContainer = styled.section`
  h3 {
    color: #808080 !important;
    font-size: 7rem;
    font-weight: 100;
    font-family: "Roboto Slab", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.8rem;
  }
`;

const AboutSection = () => {
  return (
    <AboutSect>
      <DownWriteArrow />
      <MarqueeContainer>
        <Marquee gradient={false} style={{ overflow: "hidden" }} speed={50}>
          <h3>
            Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;
            Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;Focused&nbsp;
          </h3>
        </Marquee>
      </MarqueeContainer>
      <MarqueeContainer>
        <Marquee gradient={false} style={{ overflow: "hidden" }} speed={50}>
          <h3>
            Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;Meticulous&nbsp;
          </h3>
        </Marquee>
      </MarqueeContainer>
      <MarqueeContainer>
        <Marquee gradient={false} style={{ overflow: "hidden" }} speed={50}>
          <h3>
            Uncompromising&nbsp;Uncompromising&nbsp;Uncompromising&nbsp;Uncompromising&nbsp;
            Uncompromising&nbsp;Uncompromising&nbsp;Uncompromising&nbsp;Uncompromising&nbsp;
            Uncompromising&nbsp;Uncompromising&nbsp;
          </h3>
        </Marquee>
      </MarqueeContainer>
      <AboutSectionText />
    </AboutSect>
  );
};

export default AboutSection;
