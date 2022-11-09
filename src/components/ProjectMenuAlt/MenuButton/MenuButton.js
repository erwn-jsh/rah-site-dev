import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";

import styled from "styled-components";

const ButtonWrap = styled.div`
  position: fixed;
  left: 11px;
  top: 100px;
  z-index: 11;
  transform: ${(props) =>
    props.open ? "translateX(80px)" : "translateX(0px)"};
  transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const MenuBtn = styled.button`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border: none;
  background: 0 0;
  transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuBtnSpan = styled.span`
  &:after,
  &:before {
    content: "";

    width: 2px;
    height: 48px;
    position: absolute;
    background-color: ${(props) => (props.open ? "white" : "black")};
    left: 50%;
    top: 50%;
    display: block;

    will-change: transform;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:before {
    transform: ${(props) =>
      props.open
        ? "translate(-50%, -50%) rotate(315deg)"
        : "translate(-5px, -50%) scale(0.7) rotate(180deg)"};
  }

  &:after {
    transform: translate(5px, -50%) scale(0.7) rotate(0);
    transform: ${(props) =>
      props.open
        ? "translate(-50%, -50%) rotate(45deg)"
        : "translate(5px, -50%) scale(0.7) rotate(0)"};
  }
`;

const MenuButton = () => {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <>
      <ButtonWrap open={open}>
        <MenuBtn onClick={() => setOpen(!open)}>
          <MenuBtnSpan open={open}></MenuBtnSpan>
        </MenuBtn>
      </ButtonWrap>
    </>
  );
};

export default MenuButton;
