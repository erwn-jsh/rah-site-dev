import React, { useEffect } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import DownWriteArrow from "../../assets/lotties/down-white-arrow";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import ProjectMarquee from "./ProjectMarquee";
import Transfigure from "../../assets/images/Transfigure/compressed/20.jpg";
import Pulse from "../../assets/images/Pulse/4.jpg";
import Bunteduffem from "../../assets/images/Bunteduffem/Cover.png";
import KNJ from "../../assets/images/KNJ/Cover.png";

const ProjectSect = styled.section`
  padding-top: 20vh;
  background: black;
  color: white;

  iframe {
    width: 100%;
    margin: auto;
    margin-bottom: 200px;
  }

  h2 {
    color: #ffffff !important;
    font-size: 3rem;
    font-weight: 100;
    text-transform: uppercase;
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 1.5rem;
    line-height: 5rem;
    margin-top: 200px;
  }
`;

const ProjectsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  overflow: hidden;
`;

const Project = styled.div`
  cursor: pointer;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-size: 3.5rem;
  width: 50%;
  letter-spacing: 0.7rem;
  transition: all 0.5s;
  padding: 5px;
  border-radius: 5px;
  position: relative;

  a {
    color: #ffffff !important;
    text-decoration: none;
  }

  img {
    margin: auto;
    margin-bottom: 16px;
    object-fit: cover;
    max-height: 550px;
    width: 100%;
  }

  h3 {
    display: inline;
  }

  div {
    position: absolute;
    opacity: 0;
    transition: opacity 0.15s ease;
    width: 100%;
    height: 100%;
    padding-top: 40%;
    padding-bottom: 60%;
  }

  &:hover {
    div {
      opacity: 1;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);

      h4 {
        text-align: center;
      }
    }
  }
`;

const ProjectSection = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "2200px",
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
      <ProjectSect>
        <DownWriteArrow />

        <ProjectMarquee />

        <h2>Collections</h2>
        <ProjectsWrapper id="Collections">
          <Project>
            <Link to="/Collections/transfigure">
              <motion.img
                src={Transfigure}
                ref={contentRef}
                animate={animation}
                initial="hidden"
                variants={variants(0.2)}
                loading="lazy"
              />

              <div>
                <h4>Trans/&#40;f&#41;igure</h4>
              </div>
            </Link>
          </Project>
          <Project>
            <Link to="/Collections/knj1">
              <motion.img
                src={KNJ}
                ref={contentRef}
                animate={animation}
                initial="hidden"
                variants={variants(0.8)}
              />

              <div>
                <h4>KNJ&nbsp;</h4>
              </div>
            </Link>
          </Project>
          <Project>
            <Link to="/Collections/bunteduffem">
              <motion.img
                src={Bunteduffem}
                ref={contentRef}
                animate={animation}
                initial="hidden"
                variants={variants(1.2)}
              />

              <div>
                <h4>Bunteduffem </h4>
              </div>
            </Link>
          </Project>
          <Project>
            <Link to="/Collections/pulse">
              <motion.img
                src={Pulse}
                ref={contentRef}
                animate={animation}
                initial="hidden"
                variants={variants(2)}
              />

              <div>
                <h4>Pulse </h4>
              </div>
            </Link>
          </Project>
        </ProjectsWrapper>
      </ProjectSect>
    </>
  );
};

export default ProjectSection;
