import styled from "styled-components";

export const Gallery = styled.section`
  width: 100%;
  overflow: hidden;

  p {
    margin-top: 20px;
    font-family: sans-serif;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

export const L11Container = styled.div`
  display: flex;
  height: 100vh;
  margin-right: 230px;
  margin-left: 230px;
`;

export const L21Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 40px 250px;

  img {
    width: 50%;
  }

  div {
    width: 50%;
    height: 50%;
    margin-left: 72px;
    align-self: center;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const L31Container = styled.div`
  display: flex;
  margin: 80px 330px;

  img {
    width: 50%;
  }
`;

export const L41Container = styled.div`
  display: flex;
  margin: 40px 220px;
  img {
    width: 50%;
  }
`;

export const L51Container = styled.div`
  display: flex;
  margin: 0 220px;

  img {
    width: 50%;
  }

  img:last-of-type {
    width: 35%;
    object-fit: contain;
    margin-right: 80px;
    margin-left: 80px;
  }
`;

export const L61Container = styled.div`
  display: flex;
  margin: 40px 220px;

  img:first-of-type {
    width: 70%;
    object-fit: cover;
  }
  img:last-of-type {
    width: 30%;
  }
`;

export const L71Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 40px 220px;

  img {
    width: 50%;
  }

  div {
    width: 50%;
    height: 50%;
    margin-left: 72px;
    align-self: center;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const L81Container = styled.div`
  display: flex;
  margin: 40px 220px;

  img {
    width: 50%;
  }
`;

export const L91Container = styled.div`
  display: flex;
  margin: 40px 220px;
  height: 100vh;
  position: relative;

  div {
    width: 75%;
    z-index: 5;
    margin-right: -100px;
    margin-top: 40px;
    margin-bottom: 80px;

    img {
      height: 100%;
      width: 50%;
      object-fit: cover;
    }
  }

  img:last-of-type {
    width: 50%;
    object-fit: cover;
  }
`;

export const L101Container = styled.div`
  display: flex;
  height: 85vh;
  margin: 40px 280px;

  div {
    margin-top: auto;
    margin-bottom: auto;
  }

  img:first-of-type {
    margin-left: 100px;
    width: 75%;
  }

  img:last-of-type {
    width: 25%;
    margin-left: -120px;
    z-index: 5;
  }
`;

export const L111Container = styled.div`
  display: flex;
  margin: 40px 220px;
  img {
    width: 100%;
  }
`;

export const L121Container = styled.div`
  display: flex;
  margin: 40px 220px;

  img {
    width: 33%;
  }
`;

export const L131Container = styled.div`
  display: flex;
  margin: 40px 220px;

  img {
    width: 50%;
  }

  div {
    width: 50%;
    height: 50%;
    margin-left: 72px;
    align-self: center;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const L141Container = styled.div`
  display: flex;
  margin: 40px 220px;

  img {
    width: 50%;
  }
`;
