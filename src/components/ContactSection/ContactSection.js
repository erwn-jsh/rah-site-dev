import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Facebook, Instagram } from "react-feather";

import DownWriteArrow from "../../assets/lotties/down-white-arrow";

const ContactSect = styled.section`
  background: black;
  /* height: 180vh; */
  color: white;

  display: flex;
  flex-direction: column;

  iframe {
    width: 100%;
    margin: auto;
    /* margin-bottom: 80px; */
    /* margin-top: 448px; */
  }
`;

const ContactSectionTextWrapper = styled.div`
  flex-grow: 1;
  margin-top: 0;
  margin-bottom: 112px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0;
  position: relative;
  width: auto;

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
    margin-bottom: 80px;
  }

  p {
    font-family: "Josefin Sans", serif;
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 100;
    line-height: 2.5rem;
    text-align: center;

    a {
      text-decoration: none;
      color: #ffffff !important;
    }
  }

  div {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    a {
      color: white;

      svg {
        width: 48px;
        height: 48px;
        stroke-width: 1.5px;
      }
    }
  }
`;

const externalLinks = [
  {
    url: "https://www.facebook.com",
    component: <Facebook />,
  },
  {
    url: "https://www.instagram.com",
    component: <Instagram />,
  },
];

const ContactSection = () => {
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
      <ContactSect>
        <DownWriteArrow />
        <ContactSectionTextWrapper>
          <motion.h2
            id="Contact"
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
            Contact
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
            <a href="mailto:robertandrewhiyas@gmail.com">
              robertandrewhiyas@gmail.com
            </a>
          </motion.p>

          <motion.p
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
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
            }}
          >
            <a href="https://www.facebook.com/robertandrewhiyas">facebook</a>
          </motion.p>
          <motion.p
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.1,
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
            <a href="https://instagram.com/robertandrewhiyas?igshid=YmMyMTA2M2Y=">
              instagram
            </a>
          </motion.p>
        </ContactSectionTextWrapper>
      </ContactSect>
    </>
  );
};

export default ContactSection;
