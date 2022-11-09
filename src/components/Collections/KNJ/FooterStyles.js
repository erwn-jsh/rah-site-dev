import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSection = styled.section`
  background: #ffffff;
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
export const ContactIconsWrapper = styled(motion.div)`
  margin-top: 50px;
  margin-right: 33%;
  margin-left: 33%;
  display: flex;
  justify-content: center;

  a {
    color: black;

    svg {
      margin-right: 48px;
      width: 24px;
      height: 24px;
      stroke-width: 1.5px;
    }
  }
`;
