import React, { useContext } from "react";
import { Link } from "gatsby";

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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to={`/#About`}>About</Link>
                </li>
                <li>
                  <Link to="/#Collections">Collections</Link>
                </li>
                <li>
                  <Link to="/Store/">Store</Link>
                </li>
                <li>
                  <Link to="http://localhost:8000/#Contact">Contact</Link>
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
