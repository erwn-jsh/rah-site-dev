import styled from "styled-components";
import { motion } from "framer-motion";

export const HomePageWrapper = styled.div`
  height: 100vh;
  background: #000000;
  padding-top: 20px;
`;

export const FirstNameContainer = styled(motion.div)`
  position: absolute;
  bottom: 75px;
  left: 100px;
  h1 {
    color: #ffffff !important;
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 10vh;
    max-width: 70vw;
    padding-left: 72px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    color: #111;
    letter-spacing: 1.5rem;
    line-height: 5rem;
  }
`;

export const SecondNameContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 100px;
  h1 {
    color: #ffffff !important;
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 10vh;
    max-width: 70vw;
    padding-left: 72px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;

    letter-spacing: 1.5rem;
    line-height: 5rem;
  }
`;

export const Header = styled(motion.div)`
  position: absolute;
  width: 90%;
  margin-top: 10vh;
  height: 75vh;
  margin-right: 96px;
  margin-left: 75px;

  p {
    color: #808080 !important;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 100;
    line-height: 2rem;
    letter-spacing: 0.2rem;
    text-align: right;
    padding-top: 0.8vh;
  }
`;
