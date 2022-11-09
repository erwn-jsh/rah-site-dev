import styled from "styled-components";

export const Gallery = styled.section`
  background: #f5e4e7;
  width: 100%;

  div:first-of-type {
    height: 970vh;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;

    p {
      position: sticky;
      top: 40%;
      bottom: 40%;
      writing-mode: vertical-rl;
      text-orientation: sideways;
      transform: rotate(180deg);
      margin-left: 40px;
    }
  }
  div:nth-of-type(2) {
    height: 975vh;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;

    p {
      position: sticky;
      top: 33%;
      bottom: 33%;
      writing-mode: vertical-rl;
      text-orientation: sideways;
      margin-right: 40px;
    }
  }

  p {
    font-family: "Arial", sans-serif;
    font-size: 1.4rem;

    text-transform: uppercase;
    letter-spacing: 0.5rem;
    opacity: 0.8;
  }
`;

export const L11Container = styled.div`
  img {
    width: 100%;
    object-fit: contain;
  }
  margin-left: 165px;
  margin-right: 165px;
`;

export const L21Container = styled.div`
  height: 100vh;
  position: relative;
  img:first-of-type {
    position: absolute;
    bottom: 0px;
    left: 140px;
    width: 20%;
    z-index: 2;
  }
  img:nth-of-type(2) {
    position: absolute;
    object-fit: cover;
    width: 100%;
    padding: 80px 330px;
    z-index: 1;
  }
  img:last-of-type {
    position: absolute;
    right: 140px;
    width: 20%;
    z-index: 3;
  }

  p {
    font-family: "Arial", sans-serif;
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    opacity: 0.8;
  }
  p:first-of-type {
    position: absolute;
    height: 100%;
    text-align: center;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotate(180deg);
    left: 40px;
  }
  p:last-of-type {
    position: absolute;
    height: 100%;
    text-align: center;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    right: 40px;
  }
`;

export const L31Container = styled.div`
  height: 100vh;
  position: relative;

  img:first-of-type {
    position: absolute;
    left: 160px;
    height: 80%;
  }
  img:last-of-type {
    position: absolute;
    right: 160px;
    bottom: 0;
    height: 55%;
    z-index: 1;
  }
`;

export const L41Container = styled.div`
  display: flex;
  height: 100vh;
  p {
    font-family: "Arial", sans-serif;
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    opacity: 0.8;
  }
  p:first-of-type {
    height: 100%;
    text-align: center;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotate(180deg);
    margin-left: 40px;
  }
  p:last-of-type {
    height: 100%;
    text-align: center;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    margin-right: 40px;
  }

  img {
    height: 100%;
    margin-right: 160px;
    margin-left: 160px;
    object-fit: cover;
  }
`;

export const L51Container = styled.div`
  margin: 40px 380px;

  img {
    width: 100%;
  }
`;

export const L61Container = styled.div`
  height: 100vh;
  position: relative;

  img:first-of-type {
    position: absolute;
    bottom: 0px;
    left: 125px;
    height: 100%;
  }
  img:nth-of-type(2) {
    position: absolute;
    bottom: 0px;
    height: 70%;
    left: 35%;
    z-index: 3;
  }
  img:last-of-type {
    position: absolute;
    bottom: 0px;
    right: 125px;
    height: 100%;
  }
  p {
    font-family: "Arial", sans-serif;
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    opacity: 0.8;
  }
  p:first-of-type {
    position: absolute;
    height: 100%;
    text-align: center;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotate(180deg);
    left: 40px;
  }
  p:last-of-type {
    position: absolute;
    height: 100%;
    text-align: center;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    right: 40px;
  }
`;

export const L71Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  margin-left: 140px;
  margin-right: 140px;

  img:first-of-type {
    height: 100%;
  }
  img:nth-of-type(2) {
    margin-left: auto;
    margin-right: -13%;
    margin-top: auto;
    width: 25%;
    object-fit: contain;
    z-index: 3;
  }
  img:last-of-type {
    margin-bottom: auto;
    width: 33%;
    object-fit: contain;
  }
  svg:first-of-type {
    position: absolute;
    left: 36.2%;
    top: 40%;
    rect {
      transform: rotate(45deg) scale(1.5);
    }
  }
  svg:last-of-type {
    position: absolute;
    top: 52%;
    left: 76.5%;
    z-index: 10;
    rect {
      transform: rotate(45deg) scale(3.5);
    }
  }
`;

export const L81Container = styled.div`
  display: flex;
  height: 100vh;

  img {
    margin-left: 160px;
    margin-right: 0;
    margin-top: 55px;
    margin-bottom: 55px;
  }
`;

export const L91Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;

  img:first-of-type {
    margin-left: 140px;
  }

  img:nth-of-type(2) {
    width: 26%;
    margin-bottom: auto;
    margin-left: 15%;
    object-fit: contain;
  }

  img:last-of-type {
    width: 21%;
    object-fit: contain;
    margin-top: auto;
    margin-right: 140px;
    margin-left: -10%;
  }

  svg:first-of-type {
    position: absolute;
    left: 3.4%;
    top: -5%;
    rect {
      transform: rotate(45deg) scale(0.8);
    }
  }

  svg:nth-of-type(2) {
    position: absolute;
    top: 85%;
    left: 38.3%;
    /* z-index: 1; */
    rect {
      transform: rotate(45deg) scale(1.2);
    }
  }

  svg:last-of-type {
    position: absolute;
    left: 69.6%;
    top: 56%;
    rect {
      transform: rotate(45deg) scale(3);
    }
  }
`;

export const L101Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-left: 140px;
  padding-right: 140px;

  img:first-of-type {
    width: 33%;
    object-fit: contain;
    margin-right: 13%;
  }

  img:last-of-type {
    width: 33%;
    object-fit: contain;
  }

  svg:first-of-type {
    position: absolute;
    left: 3.55%;
    bottom: -3%;
    transform: scale(0.5);
  }

  svg:last-of-type {
    position: absolute;
    left: 36.5%;
    top: 1%;
    transform: scale(0.5);
  }
`;

export const Footer = styled.section`
  height: 100vh;
`;
