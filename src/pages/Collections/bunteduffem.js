import React from "react";

import Body from "../../components/Collections/Bunteduffem/Body";
import Footer from "../../components/Collections/Bunteduffem/Footer";
import Recommendations from "../../components/Collections/Bunteduffem/Recommendations";

const bunteduffem = () => {
  return (
    <>
      <Body />
      <Recommendations />
      <Footer />
    </>
  );
};

export default bunteduffem;
export const Head = () => <title>Bunteduffem</title>;
