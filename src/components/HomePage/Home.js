import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
// Styled Components
import {
  HomePageWrapper,
  FirstNameContainer,
  SecondNameContainer,
  Header,
} from "./HomeStyles";
import ExploreButton from "../Menu/ExploreButton/ExploreButton";
import AboutSection from "../AboutSection/AboutSection";
import ProjectSection from "../ProjectSection/ProjectSection";
import ContactSection from "../ContactSection/ContactSection";

import Menu from "../Menu";
import MenuManager from "../Menu/MenuManager";
import LogoWhite from "../Logo/LogoWhite";

import Layout from "../Layout";

const Home = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  // params for framer motion
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      y: 72,
    },
  };

  return (
    <>
      <Layout>
        <MenuManager>
          <Menu />
          <HomePageWrapper id="Home">
            <Header
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={variants}
            >
              <p>
                The Art of Storytelling
                <br /> in Fashion
              </p>
            </Header>
            <LogoWhite
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={variants}
            />
            <FirstNameContainer
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={variants}
            >
              <h1>Robert</h1>
            </FirstNameContainer>
            <SecondNameContainer
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={variants}
            >
              <h1>Andrew Hiyas</h1>
            </SecondNameContainer>
            <ExploreButton
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={variants}
            />
          </HomePageWrapper>
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </MenuManager>
      </Layout>
    </>
  );
};

export default Home;
