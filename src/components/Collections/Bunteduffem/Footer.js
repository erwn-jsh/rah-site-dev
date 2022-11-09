import React, { useEffect } from "react";
import { Facebook, Instagram, Mail } from "react-feather";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import { ContactSection, ContactIconsWrapper } from "./FooterStyles";

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

const Footer = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "-100px",
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
      <ContactSection>
        <ContactIconsWrapper
          ref={contentRef}
          animate={animation}
          initial="hidden"
          variants={variants(1.6)}
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
    </>
  );
};

export default Footer;
