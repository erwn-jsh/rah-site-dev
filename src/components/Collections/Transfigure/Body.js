import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Facebook, Instagram, Mail } from "react-feather";

import Img41 from "../../../assets/images/Transfigure/compressed/41.jpg";

import Gallery from "./Gallery";
import Recommendations from "./Recommendations";

const OpeningSection = styled.section`
  background: #000000;
  display: flex;
  img {
    width: 50%;
  }

  div {
    padding-top: 200px;
    padding-bottom: 500px;
    position: sticky;
    top: 0;
    color: #ffffff;
    height: 50px;

    p {
      padding-right: 150px;
      padding-left: 50px;
      font-weight: 300;
      font-family: "Merriweather", serif;
      font-size: 1.2rem;
      line-height: 1.6rem;
      text-align: justify;
    }

    h2 {
      margin-top: 50px;
      padding-left: 50px;
      font-size: 1.5rem;
      font-weight: 100;
      text-transform: uppercase;
      font-family: "Josefin Sans", sans-serif;
      letter-spacing: 1.5rem;
    }
  }
`;

const Footer = styled.section`
  padding-top: 100px;
  background: #000000;
  display: flex;
  transition: all 0.5;
`;

const ContactSection = styled.section`
  width: 100%;
  overflow: hidden;
  padding-top: 140px;
  padding-left: 140px;
  padding-right: 140px;
  padding-bottom: 112px;

  p {
    margin-top: 40px;
    text-align: center;
    color: #343838;
    font-weight: 400;
    font-family: "Josefin Sans", sans-serif;
  }
`;

const ContactIconsWrapper = styled(motion.div)`
  margin-top: 50px;
  margin-right: 33%;
  margin-left: 33%;
  display: flex;
  justify-content: center;

  a {
    color: white;

    svg {
      margin-right: 48px;
      width: 24px;
      height: 24px;
      stroke-width: 1.5px;
    }
  }
`;

const externalLinks = [
  {
    url: "https://www.facebook.com/robertandrewhiyas",
    component: <Facebook />,
  },
  {
    url: "mailto:robertandrewhiyas@gmail.com",
    component: <Mail />,
  },
  {
    url: "https://instagram.com/robertandrewhiyas?igshid=YmMyMTA2M2Y=",
    component: <Instagram />,
  },
];

const Body = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
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
      <OpeningSection>
        <motion.img
          src={Img41}
          ref={contentRef}
          animate={animation}
          initial="hidden"
          variants={variants(1)}
        />
        <div>
          <motion.p
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(1)}
          >
            In this collection, "Trans/figure", Hiyas interrogates and critiques
            the construct and performativity of gender -- in the context of
            Judeo-Christian tradition -- through the lens of fashion and design
            (i.e. utilitarian arts). He also intends to deconstruct gender
            conventions by reimagining the human figure as body, as embodiment,
            and as medium that human beings use to perform gender. To Hiyas, the
            figure (or body) is constantly transforming and transfiguring. His
            use of Judeo-Christian symbols as design elements for embroidery,
            embellishment, print, etc. is an attempt to dialogue and renegotiate
            with tradition.
          </motion.p>
          <motion.h2
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(1)}
          >
            Trans/&#40;f&#41;igure
          </motion.h2>
        </div>
      </OpeningSection>
      <Gallery />
      <Recommendations />
      <Footer>
        <ContactSection>
          <ContactIconsWrapper
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(1)}
          >
            {externalLinks.map((link) => (
              <a href={link.url} key={link.url} target="_blank">
                {link.component}
              </a>
            ))}
          </ContactIconsWrapper>
          <p>
            Copyright {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;&nbsp;Robert
            Andrew Hiyas
          </p>
        </ContactSection>
      </Footer>
    </>
  );
};

export default Body;
