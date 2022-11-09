import React, { useEffect } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

const MarqueeContainer = styled.section`
  h3 {
    color: #808080 !important;
    font-size: 7rem;
    font-weight: 100;
    font-family: "Roboto Slab", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.8rem;
    line-height: 7.5rem;
  }
`;

const ProjectMarquee = () => {
  return (
    <>
      <MarqueeContainer>
        <Marquee gradient={false} style={{ overflow: "hidden" }} speed={40}>
          <h3>
            RAH &amp; Prince Marell @ Drag Race Ph 2022&nbsp;RAH &amp; Prince
            Marell @ Drag Race Ph 2022&nbsp;RAH &amp; Prince Marell @ Drag Race
            Ph 2022&nbsp;
          </h3>
        </Marquee>
      </MarqueeContainer>
      <MarqueeContainer>
        <Marquee gradient={false} style={{ overflow: "hidden" }} speed={40}>
          <h3>
            Feature @ Nylon Magazine November 3, 2021&nbsp;Feature @ Nylon
            Magazine November 3, 2021
          </h3>
        </Marquee>
      </MarqueeContainer>
      <MarqueeContainer>
        <Marquee gradient={false} style={{ overflow: "hidden" }} speed={40}>
          <h3>
            Bench Competition @ Manila 2019&nbsp;Bench Competition @ Manila
            2019&nbsp;Bench Competition @ Manila 2019&nbsp;
          </h3>
        </Marquee>
      </MarqueeContainer>
    </>
  );
};

export default ProjectMarquee;
