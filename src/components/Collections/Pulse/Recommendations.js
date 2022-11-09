import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import KNJ from "../../../assets/images/KNJ/Cover.png";
import Bunteduffem from "../../../assets/images/Bunteduffem/Cover.png";

const RecommendationsSection = styled.section`
  display: flex;
  flex-direction: column;
  background: #f5e4e7;
  padding-top: 200px;
  padding-right: 100px;
  padding-left: 100px;

  h2 {
    color: #000000 !important;
    font-size: 1.2rem;
    font-weight: 100;
    text-transform: uppercase;
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 1.5rem;
    line-height: 5rem;
  }
`;

const RecsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  overflow: hidden;
`;

const Recommendation = styled.div`
  cursor: pointer;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-size: 3.5rem;
  width: 50%;
  letter-spacing: 0.7rem;
  transition: all 0.5s;
  padding: 5px;
  border-radius: 5px;
  position: relative;

  a {
    color: #000000 !important;
    text-decoration: none;
  }

  img {
    margin: auto;
    margin-bottom: 16px;
    object-fit: cover;
    max-height: 550px;
    width: 100%;
  }

  h3 {
    display: inline;
  }

  div {
    position: absolute;
    opacity: 0;
    transition: opacity 0.15s ease;
    width: 100%;
    height: 100%;
    padding-top: 40%;
    padding-bottom: 60%;
  }

  &:hover {
    div {
      opacity: 1;
      top: 0;
      left: 0;
      background: RGBa(245, 228, 231, 0.8);

      h4 {
        text-align: center;
      }
    }
  }
`;

const Recommendations = () => {
  return (
    <>
      <RecommendationsSection>
        <h2>You may also like:</h2>
        <RecsWrapper>
          <Recommendation>
            <Link to="/Collections/knj1">
              <img src={KNJ} />

              <div>
                <h4>KNJ&nbsp;</h4>
              </div>
            </Link>
          </Recommendation>
          <Recommendation>
            <Link to="/Collections/bunteduffem">
              <img src={Bunteduffem} />
              <div>
                <h4>Bunteduffem</h4>
              </div>
            </Link>
          </Recommendation>
        </RecsWrapper>
      </RecommendationsSection>
    </>
  );
};

export default Recommendations;
