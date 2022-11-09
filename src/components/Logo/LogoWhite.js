import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";

// Styled Components
const LogoContainer = styled.div`
  z-index: 0;
  width: 552px;
  height: 344px;
  position: absolute;
  top: 100px;
  left: 60px;

  svg {
    width: 100%;
    height: auto;
    bottom: 0;
  }
`;

const Logo = () => {
  // Defining references to be used in SVG animation
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const outlineLogoRef1 = useRef();
  const outlineLogoRef2 = useRef();
  const outlineLogoRef3 = useRef();
  const outlineLogoRef4 = useRef();
  const outlineLogoRef5 = useRef();
  const outlineLogoRef6 = useRef();
  const outlineLogoRef7 = useRef();
  const outlineLogoRef8 = useRef();
  const outlineLogoRef9 = useRef();

  // SETTING SVG ANIMATION PARAMS
  // Refer to docs for rationale: https://greensock.com/docs/v3/GSAP/Timeline
  const animationOverlap = "-=100%"; // -=100% is 100% overlap hence simultaneous
  const svgStrokeProps = { drawSVG: 1, duration: 10 };
  // Object that defines the stroke in SVG
  // goes to the style prop
  const svgStrokeStyle = {
    stroke: "#ffffff",
    strokeWidth: 4,
    fillOpacity: 1,
    fillRule: "nonzero",
  };

  // applies animation effect
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 1,
        duration: 10,
      })
      .from(outlineLogoRef1.current, svgStrokeProps, animationOverlap)
      .from(outlineLogoRef2.current, svgStrokeProps, animationOverlap)
      .from(outlineLogoRef3.current, svgStrokeProps, animationOverlap)
      .from(outlineLogoRef4.current, svgStrokeProps, animationOverlap)
      .from(outlineLogoRef5.current, svgStrokeProps, animationOverlap)
      .from(outlineLogoRef6.current, svgStrokeProps, animationOverlap)
      .from(outlineLogoRef7.current, svgStrokeProps, animationOverlap)
      .from(outlineLogoRef8.current, svgStrokeProps, animationOverlap)
      .from(outlineLogoRef9.current, svgStrokeProps, animationOverlap);
  }, []);

  return (
    <>
      <LogoContainer ref={bgRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="759px"
          height="473px"
          viewBox="0 0 198.94104 173.01326"
          version="1.1"
          id="svg8"
        >
          <defs id="defs2">
            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath26">
              <path d="M 0,1500 H 1500 V 0 H 0 Z" id="path24" />
            </clipPath>
          </defs>
          <g id="layer1" transform="translate(-4.4729252,-49.187311)">
            <g
              id="g22"
              clip-path="url(#clipPath26)"
              transform="matrix(0.14020523,0,0,-0.14020523,-1.2104392,240.84786)"
            >
              <g id="g28" transform="translate(663.2739,441.4619)">
                <path
                  ref={outlineLogoRef}
                  d="m 0,0 c -2.584,0 -4.679,2.095 -4.679,4.679 v 728.147 h -304.349 c -84.065,0 -152.456,-68.392 -152.456,-152.454 0,-84.064 68.391,-152.455 152.456,-152.455 2.584,0 4.679,-2.096 4.679,-4.68 0,-2.584 -2.095,-4.679 -4.679,-4.679 -89.224,0 -161.814,72.588 -161.814,161.812 0,89.223 72.59,161.814 161.814,161.814 H 4.679 V 4.679 C 4.679,2.095 2.584,0 0,0"
                  style={svgStrokeStyle}
                  id="path30"
                />
              </g>
              <g id="g32" transform="translate(883.2617,860.02)">
                <path
                  ref={outlineLogoRef1}
                  d="m 0,0 h -440.72 c -2.585,0 -4.679,2.095 -4.679,4.679 0,2.584 2.094,4.679 4.679,4.679 H 0 C 2.584,9.358 4.679,7.263 4.679,4.679 4.679,2.095 2.584,0 0,0"
                  style={svgStrokeStyle}
                  id="path34"
                />
              </g>
              <g id="g36" transform="translate(45.2192,577.1797)">
                <path
                  ref={outlineLogoRef2}
                  d="m 0,0 c -1.462,0 -2.904,0.683 -3.815,1.965 -1.499,2.106 -1.008,5.026 1.096,6.525 l 397.324,282.841 c 2.109,1.503 5.029,1.009 6.526,-1.097 1.498,-2.107 1.007,-5.026 -1.097,-6.526 L 2.71,0.868 C 1.885,0.28 0.939,0 0,0"
                  style={svgStrokeStyle}
                  id="path38"
                />
              </g>
              <g id="g40" transform="translate(442.5435,860.02)">
                <path
                  ref={outlineLogoRef3}
                  d="m 0,0 c -1.462,0 -2.904,0.683 -3.815,1.965 -1.499,2.106 -1.008,5.026 1.096,6.525 l 220.735,157.135 c 2.109,1.501 5.029,1.007 6.526,-1.097 1.498,-2.106 1.007,-5.026 -1.097,-6.525 L 2.71,0.868 C 1.885,0.281 0.939,0 0,0"
                  style={svgStrokeStyle}
                  id="path42"
                />
              </g>
              <g id="g44" transform="translate(721.9067,133)">
                <path
                  ref={outlineLogoRef4}
                  d="m 0,0 c -2.584,0 -4.679,2.095 -4.679,4.679 v 1224.642 c 0,2.584 2.095,4.679 4.679,4.679 2.584,0 4.679,-2.095 4.679,-4.679 V 4.679 C 4.679,2.095 2.584,0 0,0"
                  style={svgStrokeStyle}
                  id="path46"
                />
              </g>
              <g id="g48" transform="translate(836.7266,441.4619)">
                <path
                  ref={outlineLogoRef5}
                  d="m 0,0 c -2.584,0 -4.68,2.095 -4.68,4.679 v 737.505 h 313.708 c 89.223,0 161.814,-72.588 161.814,-161.812 0,-89.223 -72.591,-161.814 -161.814,-161.814 -2.584,0 -4.679,2.095 -4.679,4.679 0,2.584 2.095,4.68 4.679,4.68 84.065,0 152.455,68.391 152.455,152.453 0,84.064 -68.39,152.456 -152.455,152.456 H 4.679 V 4.679 C 4.679,2.095 2.584,0 0,0"
                  style={svgStrokeStyle}
                  id="path50"
                />
              </g>
              <g id="g52" transform="translate(1057.459,860.02)">
                <path
                  ref={outlineLogoRef6}
                  d="m 0,0 h -440.721 c -2.584,0 -4.679,2.095 -4.679,4.679 0,2.584 2.095,4.679 4.679,4.679 H 0 C 2.584,9.358 4.679,7.263 4.679,4.679 4.679,2.095 2.584,0 0,0"
                  style={svgStrokeStyle}
                  id="path54"
                />
              </g>
              <g id="g56" transform="translate(1454.7803,577.1797)">
                <path
                  ref={outlineLogoRef7}
                  d="m 0,0 c -0.938,0 -1.885,0.28 -2.709,0.868 l -397.324,282.84 c -2.105,1.5 -2.596,4.419 -1.097,6.526 1.496,2.106 4.414,2.6 6.525,1.097 L 2.719,8.49 C 4.823,6.991 5.314,4.071 3.815,1.965 2.904,0.683 1.463,0 0,0"
                  style={svgStrokeStyle}
                  id="path58"
                />
              </g>
              <g id="g60" transform="translate(1057.4561,860.02)">
                <path
                  ref={outlineLogoRef8}
                  d="m 0,0 c -0.938,0 -1.885,0.281 -2.709,0.868 l -220.735,157.135 c -2.105,1.499 -2.596,4.419 -1.097,6.525 1.497,2.107 4.414,2.6 6.525,1.097 L 2.719,8.49 C 4.823,6.991 5.314,4.071 3.815,1.965 2.904,0.683 1.463,0 0,0"
                  style={svgStrokeStyle}
                  id="path62"
                />
              </g>
              <g id="g64" transform="translate(778.0928,133)">
                <path
                  ref={outlineLogoRef9}
                  d="m 0,0 c -2.584,0 -4.679,2.095 -4.679,4.679 v 1224.642 c 0,2.584 2.095,4.679 4.679,4.679 2.584,0 4.68,-2.095 4.68,-4.679 V 4.679 C 4.68,2.095 2.584,0 0,0"
                  style={svgStrokeStyle}
                  id="path66"
                />
              </g>
            </g>
          </g>
        </svg>
      </LogoContainer>
    </>
  );
};

export default Logo;
