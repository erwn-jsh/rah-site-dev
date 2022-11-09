import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import { Link } from "gatsby";
import Layout from "../components/Layout";

export const Page404Wrapper = styled.div`
  height: 100vh;
  background: #000000;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: #ffffff !important;
    font-size: 1.5rem;
    font-weight: 100;
    letter-spacing: 0.2rem;
    margin-bottom: 10vh;
    padding-left: 72px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    color: #111;
  }

  a {
    cursor: pointer;
    color: #ffffff !important;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

export const FirstNameContainer = styled(motion.div)`
  left: 100px;
  h1 {
    color: #ffffff !important;
    font-size: 4rem;
    font-weight: 100;
    max-width: 70vw;
    padding-left: 72px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    color: #111;
    letter-spacing: 1.5rem;
  }
`;

export const SecondNameContainer = styled(motion.div)`
  left: 100px;
  margin-bottom: 32px;
  h1 {
    color: #ffffff !important;
    font-size: 4rem;
    font-weight: 100;
    max-width: 70vw;
    padding-left: 72px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 1.5rem;
  }
`;

const NotFoundPage = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "2000px",
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
      <Layout>
        <Page404Wrapper>
          <FirstNameContainer
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(1)}
          >
            <h1>Robert</h1>
          </FirstNameContainer>
          <SecondNameContainer
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(1.2)}
          >
            <h1>Andrew Hiyas</h1>
          </SecondNameContainer>
          <motion.h2
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(1.4)}
          >
            <span>The page you're looking for could not be found</span>
            <span>&nbsp;/&nbsp;</span>
            <Link to="/">Return Home</Link>
          </motion.h2>
        </Page404Wrapper>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
