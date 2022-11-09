import React from "react";

import Landing from "../../components/Collections/Pulse/Landing";
import Body from "../../components/Collections/Pulse/Body";
import Footer from "../../components/Collections/Pulse/Footer";
import Recommendations from "../../components/Collections/Pulse/Recommendations";

const pulse = () => {
  return (
    <>
      <Landing />
      <Body />
      <Recommendations />
      <Footer />
    </>
  );
};

export default pulse;

export const Head = () => <title>Pulse</title>;
