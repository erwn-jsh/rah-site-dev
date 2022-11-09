import styled from "styled-components";

export const MenuHolder = styled.div``;
export const MenuInside = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  z-index: 10;

  will-change: transform;
  transition: transform 1s cubic-bezier(1, 0, 0, 1);
  color: white;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
`;
export const MenuNavContainer = styled.div`
  position: relative;
  left: 220px;
  top: 100px;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  width: calc(90vw - 260px);
`;
export const InternalNavLinks = styled.div`
  li {
    margin-bottom: 20px;

    a {
      color: black;
      text-decoration: none;
      font-family: "Josefin Sans", sans-serif;
      text-transform: uppercase;
      font-size: 54px;
      font-weight: 100;
      line-height: 1.3em;

      transform: translate(-100%);
      transition: transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    &:hover {
      cursor: pointer;

      a {
        font-weight: 400;
      }
    }
  }
`;

export const ExternalNavLinks = styled.div`
  margin-top: 50px;
  display: flex;
  li {
    margin-bottom: 20px;

    a {
      color: black;
      text-decoration: none;

      transform: translate(-100%);
      transition: transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);

      svg {
        width: 32px;
        height: 32px;
        stroke-width: 1.5px;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NavLinkWrapper = styled.div`
  /* display: flex; */
`;
