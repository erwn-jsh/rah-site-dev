import React, { useEffect } from "react";

import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Container } from "../../styles/globalStyles";

const AboutSectionTextWrapper = styled.div`
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

  p {
    font-family: "Josefin Sans", serif;
    font-size: 2rem;
    color: #ffffff;
    font-weight: 100;
    line-height: 3rem;
  }
`;

const AboutSectionText = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "150px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  return (
    <>
      <AboutSectionTextWrapper id="About">
        <Container>
          <motion.h2
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.8,
                  duration: 1,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
              hidden: {
                opacity: 0,
                y: 72,
              },
            }}
          >
            About{" "}
          </motion.h2>
          <motion.p
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.9,
                  duration: 1,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
              hidden: {
                opacity: 0,
                y: 72,
              },
            }}
          >
            Hiyas’ design practice draws inspiration from reflections on
            social-cultural constructs like gender and sexuality. His present
            work explores the intersection between gender and clothing.
          </motion.p>
        </Container>
      </AboutSectionTextWrapper>
    </>
  );
};

export default AboutSectionText;
