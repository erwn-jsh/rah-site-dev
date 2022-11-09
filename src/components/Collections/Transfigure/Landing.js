import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import MenuManager from "../../ProjectMenu/MenuManager";
import Menu from "../../ProjectMenu";
import ExploreButton from "../../ProjectMenu/ExploreButton/ExploreButton";
import landingImage from "../../../assets/images/Transfigure/compressed/20.jpg";

const LandingSection = styled.section`
  background: #000000;
  overflow: hidden;

  img {
    transform: scale(1.05);
    display: block;
    margin-bottom: auto;
    height: 100%;
    width: 100%;
  }

  h1 {
    top: 500px;
    left: 100px;
    position: absolute;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 100;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 1.5rem;
  }
`;

const Landing = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "2000px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  let variants = (delayDuration) => {
    let variant = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delayDuration,
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      },
      hidden: {
        opacity: 0,
        y: 72,
      },
    };
    return variant;
  };

  return (
    <>
      <MenuManager>
        <Menu />
        <LandingSection>
          <motion.img
            src={landingImage}
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(0.2)}
          />
          <motion.h1
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(0.6)}
          >
            Trans/&#40;f&#41;igure
          </motion.h1>
          <ExploreButton />
        </LandingSection>
      </MenuManager>
    </>
  );
};

export default Landing;
