import React, { useContext } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Plus } from "react-feather";
import { MenuContext } from "../MenuManager";

const XploreBtn = styled.button`
  position: fixed;
  right: 96px;
  bottom: 12vh;
  background-color: ${(props) => (props.open ? "black" : "transparent")};
  text-transform: uppercase;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 20px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  letter-spacing: 0.6rem;
  display: none;

  @media only screen and (max-width: 768px) {
    display: inline-flex;
    position: fixed;
    right: 20px;
    bottom: 30px;
    z-index: 11;

    transition: all 0.2s ease,
      transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);

    width: 82px;
    height: 46px;
    border-radius: 24px;
    text-align: center;
    transition-delay: 0.4s;

    span {
      display: none;
    }
    svg {
      height: 24px;
      transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: ${(props) =>
        props.open ? "rotate(225deg) scale(1.5)" : "rotate(0) scale(1)"};
    }
  }
`;

const ExploreButton = () => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <XploreBtn onClick={() => setOpen(!open)} open={open}>
      {/* <span>Menu</span> */}
      <Plus />
    </XploreBtn>
  );
};

export default ExploreButton;
