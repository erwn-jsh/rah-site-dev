import React from "react";

import MenuManager from "../../ProjectMenuAlt/MenuManager";
import Menu from "../../ProjectMenuAlt";
import ExploreButton from "../../ProjectMenuAlt/ExploreButton/ExploreButton";

import {
  Gallery,
  L11Container,
  L21Container,
  L31Container,
  L41Container,
  L51Container,
  L61Container,
  L71Container,
  L81Container,
  L91Container,
  L101Container,
  L111Container,
  L121Container,
  L131Container,
  L141Container,
} from "./BodyStyles";

import L11 from "../../../assets/images/KNJ/compressed/L11-min.jpg";
import L12 from "../../../assets/images/KNJ/compressed/L12-min.jpg";
import L21 from "../../../assets/images/KNJ/compressed/L21-min.jpg";
import L22 from "../../../assets/images/KNJ/compressed/L22-min.jpg";
import L31 from "../../../assets/images/KNJ/compressed/L31-min.jpg";
import L32 from "../../../assets/images/KNJ/compressed/L32-min.jpg";
import L41 from "../../../assets/images/KNJ/compressed/L41-min.jpg";
import L42 from "../../../assets/images/KNJ/compressed/L42-min.jpg";
import L51 from "../../../assets/images/KNJ/compressed/L51-min.jpg";
import L52 from "../../../assets/images/KNJ/compressed/L52-min.jpg";
import L61 from "../../../assets/images/KNJ/compressed/L61-min.jpg";
import L62 from "../../../assets/images/KNJ/compressed/L62-min.jpg";
import L71 from "../../../assets/images/KNJ/compressed/L71-min.jpg";
import L72 from "../../../assets/images/KNJ/compressed/L72-min.jpg";
import L81 from "../../../assets/images/KNJ/compressed/L81-min.jpg";
import L82 from "../../../assets/images/KNJ/compressed/L82-min.jpg";
import L91 from "../../../assets/images/KNJ/compressed/L91-min.jpg";
import L92 from "../../../assets/images/KNJ/compressed/L92-min.jpg";
import L93 from "../../../assets/images/KNJ/compressed/L93-min.jpg";
import L101 from "../../../assets/images/KNJ/compressed/L101-min.jpg";
import L102 from "../../../assets/images/KNJ/compressed/L102-min.jpg";
import L111 from "../../../assets/images/KNJ/compressed/L111-min.jpg";
import L121 from "../../../assets/images/KNJ/compressed/L121-min.jpg";
import L122 from "../../../assets/images/KNJ/compressed/L122-min.jpg";
import L123 from "../../../assets/images/KNJ/compressed/L123-min.jpg";
import L131 from "../../../assets/images/KNJ/compressed/L131-min.jpg";
import L132 from "../../../assets/images/KNJ/compressed/L132-min.jpg";
import L141 from "../../../assets/images/KNJ/compressed/L141-min.jpg";
import L142 from "../../../assets/images/KNJ/compressed/L142-min.jpg";

const Body = () => {
  return (
    <div>
      <MenuManager>
        <Menu />
        <Gallery>
          <L11Container>
            <img src={L11} />
            <img src={L12} />
          </L11Container>
          <L21Container>
            <img src={L21} />
            <div>
              <img src={L22} />
              <p>
                Clothing and identity have also been theorised in terms of
                performativity, emphasising its role of self realisation &
                presention.
                <br />
                <br />
                (Twigg, 2009)
              </p>
            </div>
          </L21Container>
          <L31Container>
            <img src={L31} />
            <img src={L32} />
          </L31Container>
          <L41Container>
            <img src={L41} />
            <img src={L42} />
          </L41Container>
          <L51Container>
            <img src={L51} />
            <img src={L52} />
          </L51Container>
          <L61Container>
            <img src={L61} />
            <img src={L62} />
          </L61Container>
          <L71Container>
            <img src={L71} />
            <div>
              <img src={L72} />
              <p>
                Fashion must be understood in terms of the competing desires for
                social equalisation & for individual differentiation, the
                interplay between the wish to fit in and to stand out.
                <br />
                <br />
                (Simmel,1904/1971)
              </p>
            </div>
          </L71Container>
          <L81Container>
            <img src={L81} />
            <img src={L82} />
          </L81Container>
          <L91Container>
            <div>
              <img src={L91} />
              <img src={L92} />
            </div>
            <img src={L93} />
          </L91Container>
          <L101Container>
            <div>
              <img src={L101} />
              <img src={L102} />
            </div>
          </L101Container>
          <L111Container>
            <img src={L111} />
          </L111Container>
          <L121Container>
            <img src={L121} />
            <img src={L122} />
            <img src={L123} />
          </L121Container>
          <L131Container>
            <img src={L131} />
            <div>
              <img src={L132} />
              <p>
                Clothing is closely linked to the body. It forms the
                vestimentary envelope that contains the body & presents it to
                the social world. It is the body that makes clothes live.
                <br />
                <br />
                (Twigg, 2009)
              </p>
            </div>
          </L131Container>
          <L141Container>
            <img src={L141} />
            <img src={L142} />
          </L141Container>
        </Gallery>
        <ExploreButton />
      </MenuManager>
    </div>
  );
};

export default Body;
