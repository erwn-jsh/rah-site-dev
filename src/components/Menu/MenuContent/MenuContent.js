import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Link as GLink } from "gatsby";

// Import to manage menu open close state
import { MenuContext } from "../MenuManager";

// Internal Asset Import
import logo from "../../../assets/logo/RAH-logo-black.jpg";

// External Link Icons
import { Facebook, Instagram } from "react-feather";
// Styled Components
import {
  MenuHolder,
  MenuInside,
  MenuNavContainer,
  InternalNavLinks,
  ExternalNavLinks,
  NavLinkWrapper,
} from "./MenuContentStyles.js";

const externalLinks = [
  {
    url: "https://www.facebook.com/robertandrewhiyas",
    component: <Facebook />,
  },
  {
    url: "https://instagram.com/robertandrewhiyas?igshid=YmMyMTA2M2Y=",
    component: <Instagram />,
  },
];

const MenuContent = () => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <>
      <MenuHolder>
        <MenuInside open={open}>
          <MenuNavContainer>
            <NavLinkWrapper>
              <InternalNavLinks open={open}>
                <li>
                  <Link
                    className="Home"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={3000}
                    onClick={() => setOpen(!open)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="About"
                    to="About"
                    spy={true}
                    smooth={true}
                    duration={3000}
                    offset={-150}
                    onClick={() => setOpen(!open)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="Collections"
                    to="Collections"
                    spy={true}
                    smooth={true}
                    duration={3000}
                    offset={-150}
                    onClick={() => setOpen(!open)}
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <GLink to="/Store/">Store</GLink>
                </li>
                <li>
                  <Link
                    className="Contact"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={3000}
                    offset={200}
                    onClick={() => setOpen(!open)}
                  >
                    Contact
                  </Link>
                </li>
              </InternalNavLinks>
              <ExternalNavLinks>
                {externalLinks.map((link) => (
                  <li key={link.url}>
                    <a href={link.url}>{link.component}</a>
                  </li>
                ))}
              </ExternalNavLinks>
            </NavLinkWrapper>
            <img
              src={logo}
              style={{
                maxHeight: "375px",
                maxWidth: "375px",
              }}
            />
          </MenuNavContainer>
        </MenuInside>
      </MenuHolder>
    </>
  );
};

export default MenuContent;
