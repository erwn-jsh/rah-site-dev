import React from "react";

import Body from "../../components/Collections/KNJ/Body";
import Footer from "../../components/Collections/KNJ/Footer";
import Recommendations from "../../components/Collections/KNJ/Recommendations";

const knj = () => {
  return (
    <div>
      <Body />
      <Recommendations />
      <Footer />
    </div>
  );
};

export default knj;

export const Head = () => <title>KNJ</title>;
