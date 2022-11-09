import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Importing Styles
import {
  Gallery,
  L11Container,
  L21Container,
  L31Container,
  L41Container,
  L51Container,
  L61Container,
  L71Container,
  L81Container,
  L91Container,
  L101Container,
} from "./BodyStyles";

import L11 from "../../../assets/images/Pulse/compressed/L11-min.jpg";
import L21 from "../../../assets/images/Pulse/compressed/L23-min.jpg";
import L22 from "../../../assets/images/Pulse/compressed/L22 - Placeholder-min.jpg";
import L23 from "../../../assets/images/Pulse/compressed/L21-min.jpg";
import L31 from "../../../assets/images/Pulse/compressed/L31-min.jpg";
import L32 from "../../../assets/images/Pulse/compressed/L32-min.jpg";
import L41 from "../../../assets/images/Pulse/compressed/L41-min.jpg";
import L51 from "../../../assets/images/Pulse/compressed/L51-min.jpg";
import L61 from "../../../assets/images/Pulse/compressed/L61-min.jpg";
import L62 from "../../../assets/images/Pulse/compressed/L62-min.jpg";
import L63 from "../../../assets/images/Pulse/compressed/L63-min.jpg";
import L71 from "../../../assets/images/Pulse/compressed/L71 - Placeholder-min.jpg";
import L72 from "../../../assets/images/Pulse/compressed/L72-min.jpg";
import L73 from "../../../assets/images/Pulse/compressed/L73-min.jpg";
import L81 from "../../../assets/images/Pulse/compressed/L81-min.jpg";
import L91 from "../../../assets/images/Pulse/compressed/L91 - Placeholder-min.jpg";
import L92 from "../../../assets/images/Pulse/compressed/L92-min.jpg";
import L93 from "../../../assets/images/Pulse/compressed/L93-min.jpg";
import L101 from "../../../assets/images/Pulse/compressed/L101 - placeholder-min.jpg";
import L102 from "../../../assets/images/Pulse/compressed/L102-min.jpg";

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
      <Gallery>
        <div>
          <p>Pulse</p>
        </div>
        <div>
          <p>A Life Story</p>
        </div>
        <L11Container>
          <img src={L11} />
        </L11Container>
        <L21Container>
          <img src={L21} />
          <img src={L22} />
          <img src={L23} />
        </L21Container>
        <L31Container>
          <img src={L31} />
          <img src={L32} />
        </L31Container>
        <L41Container>
          <img src={L41} />
        </L41Container>
        <L51Container>
          <img src={L51} />
        </L51Container>
        <L61Container>
          <img src={L61} />
          <img src={L62} />
          <img src={L63} />
        </L61Container>
        <L71Container>
          <img src={L71} />
          <svg viewBox="-6 -5 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="5" fill="#212545" />
          </svg>
          <img src={L72} />
          <svg viewBox="-15 -10 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="5" fill="#F7E1E7" />
          </svg>
          <img src={L73} />
        </L71Container>
        <L81Container>
          <img src={L81} />
        </L81Container>
        <L91Container>
          <svg viewBox="-6 -6 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="5" fill="#212545" />
          </svg>
          <img src={L91} />
          <svg viewBox="-6 -6 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="5" fill="#212545" />
          </svg>
          <img src={L92} />
          <svg viewBox="-11 -11 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="5" fill="#3F64A6" />
          </svg>
          <img src={L93} />
        </L91Container>
        <L101Container>
          <svg width="174" height="200" viewbox="0 0 173.20508075688772 200">
            <path
              fill="#212545"
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
            ></path>
          </svg>
          <img src={L101} />
          <svg width="174" height="200" viewbox="0 0 173.20508075688772 200">
            <path
              fill="#212545"
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
            ></path>
          </svg>
          <img src={L102} />
        </L101Container>
      </Gallery>
    </>
  );
};

export default Body;
